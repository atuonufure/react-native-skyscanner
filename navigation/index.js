import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Flights from '../screens/Flights';
import FlightCard from '../screens/FlightCard';

const Tab = createMaterialTopTabNavigator();

function Root() {
  return (
    <>
      <View style={{ backgroundColor: '#ffffff' }}>
        <Text style={{ textAlign: 'center' }}>Flight</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
      </Tab.Navigator>
    </>
  );
}

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="FlightCard" component={FlightCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function FavouritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favourites</Text>
      <Flights />
    </View>
  );
}

function BrowseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Browse</Text>
      <Flights />
    </View>
  );
}
