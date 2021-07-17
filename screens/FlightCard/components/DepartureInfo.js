import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FavoriteIcon from '../../../components/icons/FavoriteIcon';
import ForwardArrowIcon from '../../../components/icons/ForwardArrowIcon';

export default function DepartureInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.placeContainer}>
        <Text style={styles.grayText}>1 Aug, 2020</Text>
        <View style={styles.origin}>
          <Text style={styles.place}>SVO</Text>
        </View>
        <Text style={styles.grayText}>Moscow</Text>
      </View>
      <View style={styles.forwardArrow}>
        <ForwardArrowIcon />
      </View>
      <View style={styles.placeContainer}>
        <Text style={styles.grayText}>11:45</Text>
        <Text style={styles.place}>JFK</Text>
        <Text style={styles.grayText}>New York City</Text>
      </View>
      <View style={styles.favorite}>
        <TouchableOpacity>
          <FavoriteIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 40, flexDirection: 'row' },
  placeContainer: { width: 77 },
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
