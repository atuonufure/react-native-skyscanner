import React from 'react';
import { Image, StatusBar, StyleSheet, View, Text } from 'react-native';

import DepartureInfo from './components/DepartureInfo';
import PriceBoarding from './components/PriceBoarding';

export default function FlightCard() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={require('../../assets/bg-plane.png')}
        style={styles.image}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -30,
          paddingTop: 30,
        }}>
        <DepartureInfo />
        <PriceBoarding />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { width: '100%', height: 'auto', aspectRatio: 1 },
});
