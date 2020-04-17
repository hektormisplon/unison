import React, { useState } from "react";
import { View, Image } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Feather as Icon } from "@expo/vector-icons";

const cacheImages = images =>
  images.map(image =>
    typeof image == "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

const _loadAssetsAsync = async () => {
  const imageAssets = cacheImages([
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  ]);

  const fontAssets = cacheFonts([Icon.font]);

  await Promise.all([...imageAssets, ...fontAssets]);
};

export default () => {
  // render AppLoading until all is loaded
  [loading, setLoading] = useState(true);
  return loading ? (
    <AppLoading
      startAsync={_loadAssetsAsync}
      onFinish={() => setLoading(false)}
      onError={console.warn}
    />
  ) : (
    <View>
      <Icon name="home" size={64} />
    </View>
  );
};
