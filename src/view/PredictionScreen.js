import React from 'react';

import {
  Text,
  View
} from 'react-native';
import HomeLayout from '../layout/HomeLayout';

const PredictionScreen = ({ navigation }) => {
  return (
    <HomeLayout navigation={navigation} currentTab='Prediction'>
      <Text>Prediction screen</Text>
    </HomeLayout>
  );
}

export default PredictionScreen;
