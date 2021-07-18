import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { fetchFlights } from '../redux/store/flightReducer';

export default function AppWrapper({ children }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
});
