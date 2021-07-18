import React from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';

import DepartureInfo from './components/DepartureInfo';
import PriceBoarding from './components/PriceBoarding';
import Carousel from './components/Carousel';

export default function FlightCard({ route }) {
  const { quote, index } = route.params;
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
      <View style={styles.container}>
        <DepartureInfo quote={quote} index={index} />
        <PriceBoarding quote={quote} />
        <Carousel />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -60,
    paddingTop: 30,
  },
  image: { width: '100%', height: 'auto', aspectRatio: 1 },
});
