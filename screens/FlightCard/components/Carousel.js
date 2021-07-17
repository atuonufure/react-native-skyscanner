import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Carousel() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <Image
        source={require('../../../assets/street.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Image
        source={require('../../../assets/liberty.png')}
        style={styles.image}
      />
      <Image
        source={require('../../../assets/street.png')}
        style={styles.image}
      />
      <Image
        source={require('../../../assets/liberty.png')}
        style={styles.image}
      />
      <Image
        source={require('../../../assets/street.png')}
        style={styles.image}
      />
      <Image
        source={require('../../../assets/liberty.png')}
        style={styles.image}
      />
      <View style={styles.carouselEnd} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 30, paddingTop: 23 },
  image: {
    width: 139,
    height: 200,
    marginRight: 3,
  },
  carouselEnd: { width: 55 },
});
