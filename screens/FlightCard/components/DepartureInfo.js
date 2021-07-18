import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  FavoriteIcon,
  UnFavoriteIcon,
  ForwardArrowIcon,
} from '../../../components/icons';

import { setFlights } from '../../../redux/store/flightReducer';

export default function DepartureInfo({ quote, index }) {
  const flights = useSelector(state => state.flightReducer.flights);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.placeContainer}>
        <Text style={styles.grayText}>{quote.depatureDate}</Text>
        <View style={styles.origin}>
          <Text style={styles.place}>{quote.fromIataCode}</Text>
        </View>
        <Text style={styles.grayText}>{quote.fromTown}</Text>
      </View>
      <View style={styles.forwardArrow}>
        <ForwardArrowIcon />
      </View>
      <View style={styles.placeContainer}>
        <Text style={styles.grayText}>{quote.depatureTime}</Text>
        <Text style={styles.place}>{quote.toIataCode}</Text>
        <Text style={styles.grayText}>{quote.toTown} City</Text>
      </View>
      <View style={styles.favorite}>
        <TouchableOpacity
          onPress={() => {
            flights[index].favorite = !flights[index].favorite;
            dispatch(setFlights([...flights]));
          }}>
          {quote.favorite ? <FavoriteIcon /> : <UnFavoriteIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  placeContainer: { width: 'auto' },
  grayText: {
    fontFamily: 'SFProText-Regular',
    color: '#878787',
    fontSize: 13,
  },
  place: { fontFamily: 'Abel-Regular', fontSize: 36, color: '#404040' },
  forwardArrow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  favorite: { width: 20, marginTop: -10 },
  origin: { alignSelf: 'center' },
});
