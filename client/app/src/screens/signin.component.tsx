import React from 'react'
import { View, Text } from 'react-native'

import { Button } from '../components'

export const SignInScreen = ({ navigation }) => (
  <View>
    <Text>Sign in</Text>
    <Button
      icon="log-in"
      text="Log in"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
)
