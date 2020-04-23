import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AuthNavigator } from './auth.navigator'
import { HomeNavigator } from './home.navigator'

const Stack = createStackNavigator()

export const AppNavigator = props => (
  <Stack.Navigator {...props} headerMode="none">
    <Stack.Screen name="Auth" component={AuthNavigator} />
    <Stack.Screen name="Home" component={HomeNavigator} />
  </Stack.Navigator>
)
