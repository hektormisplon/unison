import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { HomeScreen } from '../screens'

const Tab = createBottomTabNavigator()

export const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>
)
