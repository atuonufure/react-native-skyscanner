import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Flight from './components/Flight';

export default function Flights() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      <Flight />
      <Flight />
      <Flight />
      <Flight />
      <Flight />
      <Flight />
      <Flight />
      <Flight />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  content: { alignItems: 'center', paddingVertical: 10 },
});
