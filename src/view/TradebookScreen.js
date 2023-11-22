import React from 'react';

import {
  Text,
  View
} from 'react-native';
import HomeLayout from '../layout/HomeLayout';

const TradebookScreen = ({ navigation }) => {
  return (
    <HomeLayout navigation={navigation} currentTab="Tradebook">
      <Text>Prediction screen</Text>
    </HomeLayout>
  );
}

export default TradebookScreen;
