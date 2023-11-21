import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PredictionScreen from './view/PredictionScreen';
import SinginScreen from './view/SinginScreen';

const MainNavigator = createNativeStackNavigator();

function MainStack() {
  return (
    <MainNavigator.Navigator
      initialRouteName="LoginStack"
      screenOptions={{headerShown: false}}>
      <MainNavigator.Screen name="LoginStack" component={SinginScreen} />
      <MainNavigator.Screen name="PredictionScreen" component={PredictionScreen} />
    </MainNavigator.Navigator>
  );
}

export default MainStack;
