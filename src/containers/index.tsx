import React from 'react'
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserRating from './UserRating';
import PartyRating from './PartyRating';

const Container = () => {

  const Stack = createStackNavigator();
  const user = "Brooklyn"
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={`${user}'s Rating`} component={UserRating} />
        <Stack.Screen name="Party Rating" component={PartyRating} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container;