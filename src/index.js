import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PredictionScreen from './view/PredictionScreen';
import SinginScreen from './view/SinginScreen';
import TermsScreen from './view/TermsScreen';
import PrivacyScreen from './view/PrivacyScreen';

const MainNavigator = createNativeStackNavigator();

function MainStack() {
  return (
    <MainNavigator.Navigator
      initialRouteName="LoginStack"
      screenOptions={{headerShown: false}}>
      <MainNavigator.Screen name="LoginStack" component={SinginScreen} />
      <MainNavigator.Screen name="TermsStack" component={TermsScreen} />
      <MainNavigator.Screen name="PrivacyStack" component={PrivacyScreen} />
      <MainNavigator.Screen name="PredictionScreen" component={PredictionScreen} />
    </MainNavigator.Navigator>
  );
}

export default MainStack;
