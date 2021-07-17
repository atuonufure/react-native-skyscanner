import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PriceBoarding() {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.sideContainer}>
        <Text style={styles.title}>Price</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.info}>23 311</Text>
          <Text style={styles.info}> ₽</Text>
        </View>
      </View>
      <View style={styles.border} />
      <View style={styles.sideContainer}>
        <Text style={styles.title}>Boarding</Text>
        <Text style={styles.info}>19:20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 17,
    backgroundColor: '#1157A7',
    height: 80,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sideContainer: {
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFProText-Regular',
    fontSize: 13,
    color: '#FFFFFF',
    marginBottom: 1,
  },
  priceContainer: { flexDirection: 'row' },
  info: { fontFamily: 'Abel-Regular', fontSize: 20, color: '#FFFFFF' },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  border: { backgroundColor: '#FFFFFF', width: 1, marginVertical: 15 },
});
