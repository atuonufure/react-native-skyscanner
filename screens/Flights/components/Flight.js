import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import { setFlights } from '../../../redux/store/flightReducer';

import {
  PlaneIcon,
  FavoriteIcon,
  UnFavoriteIcon,
  RightArrowIcon,
  DahIcon,
} from '../../../components/icons';

export default function Flight({ quote, index }) {
  const navigation = useNavigation();
  const flights = useSelector(state => state.flightReducer.flights);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate({
          name: 'FlightCard',
          params: { quote, index },
        })
      }
      style={[styles.container, styles.shadow]}>
      <View style={styles.upperContainer}>
        <View style={styles.plane}>
          <PlaneIcon />
        </View>
        <View style={styles.routeContainer}>
          <View style={styles.towns}>
            <Text style={styles.townName}>{quote.fromTown}</Text>
            <View style={styles.rightArrow}>
              <RightArrowIcon />
            </View>
            <Text style={styles.townName}>{quote.toTown}</Text>
          </View>
          <View style={styles.placeContainer}>
            <Text style={styles.placeInfo}>{quote.fromIataCode}</Text>
            <View style={styles.dah}>
              <DahIcon />
            </View>
            <Text style={styles.placeInfo}>{quote.depatureDate}</Text>
            <View style={styles.dah}>
              <DahIcon />
            </View>
            <Text style={styles.placeInfo}>{quote.depatureTime}</Text>
          </View>
          <Text style={styles.placeInfo}>{quote.carrierName}</Text>
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
      <View style={styles.border} />
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Price: </Text>
        <Text style={styles.currency}>{quote.price}</Text>
        <Text style={styles.currency}>{quote.currency}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 40,
    height: 135,
    marginVertical: 10,
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  upperContainer: { flexDirection: 'row', height: 93, alignItems: 'center' },
  plane: {
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  routeContainer: { flexGrow: 1 },
  townName: { fontFamily: 'Abel-Regular', fontSize: 17 },
  towns: { flexDirection: 'row', alignItems: 'center' },
  rightArrow: { marginHorizontal: 12 },
  placeContainer: { flexDirection: 'row', alignItems: 'center' },
  placeInfo: {
    fontFamily: 'SFProText-Regular',
    fontSize: 13,
    color: '#878787',
  },
  favorite: { width: 30, alignSelf: 'flex-start', paddingTop: 15 },
  dah: { marginHorizontal: 5 },
  border: {
    marginLeft: 20,
    marginRight: 16,
    backgroundColor: '#C4C4C4',
    height: 0.5,
    borderRadius: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 17,
    marginTop: 7.5,
  },
  price: {
    fontFamily: 'Abel-Regular',
    fontSize: 11,
    color: '#878787',
    alignSelf: 'flex-end',
    marginRight: 8,
  },
  currency: {
    fontFamily: 'SFProText-Regular',
    fontSize: 17,
  },
});
