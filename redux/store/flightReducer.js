const defaultState = {
  flights: [],
};

export const SET_FLIGHTS = 'SET_FLIGHTS';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';

export default function flightReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FLIGHTS:
      return { ...state, flights: action.payload };
  }

  return state;
}

export const setFlights = payload => ({ type: SET_FLIGHTS, payload });
export const fetchFlights = () => ({ type: FETCH_FLIGHTS });
