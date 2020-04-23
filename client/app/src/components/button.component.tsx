import { Feather as Icon } from '@expo/vector-icons'
import React from 'react'
import { Button as DefaultButton } from 'react-native'

export const Button = ({ text, icon, onPress }) =>
  icon ? (
    <Icon.Button onPress={onPress} name={icon}>
      {text}
    </Icon.Button>
  ) : (
    <DefaultButton title={text} onPress={onPress} />
  )
