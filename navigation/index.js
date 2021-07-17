import React from 'react';
import { Text, View, Dimensions, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Flights from '../screens/Flights';
import FlightCard from '../screens/FlightCard';

const Tab = createMaterialTopTabNavigator();

function Root() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#FFFFFF"
      />
      <View
        style={{
          backgroundColor: '#ffffff',
          paddingTop: StatusBar.currentHeight,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Abel-Regular',
            fontSize: 17,
          }}>
          Flight
        </Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          upperCaseLabel: false,
          activeTintColor: '#000000',
          inactiveTintColor: '#000000',
          indicatorStyle: {
            height: 4,
            width: Dimensions.get('window').width / 2 - 40,
            marginHorizontal: 20,
            borderRadius: 2,
            backgroundColor: '#1157A7',
            marginBottom: 4,
          },
          labelStyle: {
            fontFamily: 'Abel-Regular',
            fontSize: 17,
            textTransform: 'none',
          },
        }}>
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
      {/* <Text>Favourites</Text> */}
      <Flights />
    </View>
  );
}

function BrowseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Browse</Text> */}
      <Flights />
    </View>
  );
}
