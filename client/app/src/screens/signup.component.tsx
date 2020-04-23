import React from 'react'
import { View, Text } from 'react-native'

import { Button } from '../components'

export const SignUpScreen = ({ navigation }) => (
  <View>
    <Text>Sign up</Text>
    <Button
      icon="user-plus"
      text="Sign up"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
)
