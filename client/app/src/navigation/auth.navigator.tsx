import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { SignInScreen, SignUpScreen } from '../screens'

const Stack = createStackNavigator()

export const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Sign in" component={SignInScreen} />
    <Stack.Screen name="Sign up" component={SignUpScreen} />
  </Stack.Navigator>
)
