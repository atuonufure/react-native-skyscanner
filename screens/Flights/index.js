import React from 'react';
import { ScrollView } from 'react-native';

import Flight from './components/Flight';

export default function Flights() {
  return (
    <ScrollView
      style={{ width: '100%' }}
      contentContainerStyle={{ alignItems: 'center', paddingVertical: 10 }}>
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
