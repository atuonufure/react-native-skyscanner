import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Flight from './components/Flight';

export default function Flights({ favoriteStatus }) {
  const flights = useSelector(state => state.flightReducer.flights);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      {flights.map((el, index) =>
        !favoriteStatus ? (
          <Flight quote={el} key={index} index={index} />
        ) : (
          favoriteStatus === el.favorite && (
            <Flight quote={el} key={index} index={index} />
          )
        ),
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  content: { alignItems: 'center', paddingVertical: 10 },
});
