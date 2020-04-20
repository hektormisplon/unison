import React from 'react'
import { Button } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

export default ({ text, icon }) =>
  icon ? <Icon.Button name={icon}>{text}</Icon.Button> : <Button title={text} />
