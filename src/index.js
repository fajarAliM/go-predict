import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PredictionScreen from './view/PredictionScreen';
import SinginScreen from './view/SinginScreen';
import TermsScreen from './view/TermsScreen';
import PrivacyScreen from './view/PrivacyScreen';
import TradebookScreen from './view/TradebookScreen';
import CopyTradeScreen from './view/CopyTradeScreen';
import ProfileScreen from './view/ProfileScreen';
import PasswordResetScreen from './view/PasswordResetScreen';
import ResetPasswordScreen from './view/ResetPasswordScreen';
import SplashScreen from './view/SplashScreen';

const MainNavigator = createNativeStackNavigator();

function MainStack() {
  return (
    <MainNavigator.Navigator
      initialRouteName="SplashStack"
      screenOptions={{headerShown: false}}>
      <MainNavigator.Screen name="SplashStack" component={SplashScreen} />
      <MainNavigator.Screen name="LoginStack" component={SinginScreen} />
      <MainNavigator.Screen name="PasswordResetStack" component={PasswordResetScreen} />
      <MainNavigator.Screen name="ResetPasswordStack" component={ResetPasswordScreen} />
      <MainNavigator.Screen name="TermsStack" component={TermsScreen} />
      <MainNavigator.Screen name="PrivacyStack" component={PrivacyScreen} />

      <MainNavigator.Screen name="PredictionStack" component={PredictionScreen} />
      <MainNavigator.Screen name="TradebookStack" component={TradebookScreen} />
      <MainNavigator.Screen name="CopyTradeStack" component={CopyTradeScreen} />
      <MainNavigator.Screen name="ProfileStack" component={ProfileScreen} />
    </MainNavigator.Navigator>
  );
}

export default MainStack;
