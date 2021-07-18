import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Navigation from './navigation';

import AppWrapper from './components/AppWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Navigation />
      </AppWrapper>
    </Provider>
  );
}
