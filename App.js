import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/splash.png'),
      require('./src/assets/images/splash.png'),
      require('./src/assets/images/splash.png'),
    ]),
    Font.loadAsync({
      'JosefinSans-Bold': require('./src/assets/fonts/JosefinSans-Bold.ttf'),
      'JosefinSans-Light': require('./src/assets/fonts/JosefinSans-Light.ttf'),
      'JosefinSans-Medium': require('./src/assets/fonts/JosefinSans-Medium.ttf'),
      'JosefinSans-Regular': require('./src/assets/fonts/JosefinSans-Regular.ttf'),
      'JosefinSans-SemiBold': require('./src/assets/fonts/JosefinSans-SemiBold.ttf'),
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
