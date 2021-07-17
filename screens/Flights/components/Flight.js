import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Flight() {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('FlightCard')}>
        <Text style={styles.testButton}>Flight Component 1</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  testButton: {
    fontSize: 22,
    color: 'red',
    backgroundColor: 'lightgreen',
    padding: 10,
    margin: 10,
  },
});
