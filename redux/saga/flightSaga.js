import { put, takeEvery, call } from 'redux-saga/effects';

import { FETCH_FLIGHTS, setFlights } from '../store/flightReducer';

import { days, formattedDate, formattedPrice } from '../../helpers';

import { API_KEY } from '../../env';

import axios from 'axios';

const fetchFlights = () => {
  const requestsArray = [];
  const requestDay = date => {
    return axios({
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/en-EN/JFK-sky/SVO-sky/${date}`,
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    });
  };

  for (let i = 0; i < days.length; i++) {
    const date = days[i];
    requestsArray.push(requestDay(date));
  }

  return Promise.all(requestsArray);
};

function* fetchFlightsWorker() {
  const response = yield call(fetchFlights);
  const flights = response.map(el => el.data);
  const result = [];

  flights.map(data => {
    data.Quotes.map((el, index) => {
      const quote = {
        depatureDate: formattedDate(el.OutboundLeg.DepartureDate.slice(0, 10)),
        depatureTime: '10:40', // hardcoded cause no data
        boardingTime: '20:55', // hardcoded cause no data
        price: formattedPrice(el.MinPrice),
        currency: ' ' + data.Currencies[0].Symbol,
        fromTown: data.Places[1].CityName,
        toTown: data.Places[0].CityName,
        carrierName: data.Carriers[index].Name,
        fromIataCode: data.Places[1].IataCode,
        toIataCode: data.Places[0].IataCode,
        favorite: false,
      };
      result.push(quote);
    });
  });

  yield put(setFlights(result));
}

export function* flightsWatcher() {
  yield takeEvery(FETCH_FLIGHTS, fetchFlightsWorker);
}
