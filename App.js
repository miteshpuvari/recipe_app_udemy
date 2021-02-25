import React, { useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

// import CategoriesScreen from './screen/CategoriesScreen';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts =() => Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // we set the use stare default false

  if(fontsLoaded) {
    return (
      <MealsNavigator />
    );
  } else {
    return (<AppLoading startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError= {() => handleError(e)} />)
  }
}