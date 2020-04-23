import { Feather as Icon } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Image } from 'react-native'

import { AppNavigator } from './navigation/app.navigator'

const cacheImages = images =>
  images.map(image =>
    typeof image == 'string'
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  )

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

const _loadAssetsAsync = async () => {
  const images = cacheImages([])
  const fonts = cacheFonts([Icon.font])
  await Promise.all([...images, ...fonts])
}

export const App = () => {
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
      <AppNavigator initialRouteName="Auth" />
    </NavigationContainer>
  )
}
