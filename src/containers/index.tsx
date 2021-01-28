import React from 'react'
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserRating from './UserRating';
import PartyRating from './PartyRating';
import { user } from '../constant/data';
import styles from './Container.Style';

const USER_IMAGE = require("../assets/img/user.png")

const Container = () => {
  const Stack = createStackNavigator();

  const HeaderOption = {
    headerStyle: {
      backgroundColor: '#25233D',
      height: 62,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  } 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={`${user.firstName}'s Rating`} 
          component={UserRating}
          options={{
            ...HeaderOption,
            headerLeft: () => <Image source={USER_IMAGE} style={styles.headerImage} />
          }}
        />
        <Stack.Screen 
          name="Party Rating" 
          component={PartyRating}
          options={HeaderOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container;