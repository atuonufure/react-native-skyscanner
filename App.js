import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import Navigation from './navigation';

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#ffffff" barStyle="dark-content" />
      <Navigation />
    </>
  );
}
