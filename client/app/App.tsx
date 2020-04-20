import { Feather as Icon } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { View, Image } from 'react-native'

import HomeScreen from './src/screens/Home'

const cacheImages = images =>
  images.map(image =>
    typeof image == 'string'
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  )

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

const _loadAssetsAsync = async () => {
  const imageAssets = cacheImages([
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  ])

  const fontAssets = cacheFonts([Icon.font])

  await Promise.all([...imageAssets, ...fontAssets])
}

const Stack = createStackNavigator()

export default () => {
  // render AppLoading until all is loaded
  ;[loading, setLoading] = useState(true)
  return loading ? (
    <AppLoading
      startAsync={_loadAssetsAsync}
      onFinish={() => setLoading(false)}
      onError={console.warn}
    />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
