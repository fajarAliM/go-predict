import React from 'react';

import {
  Text,
  View
} from 'react-native';
import HomeLayout from '../layout/HomeLayout';

const CopyTradeScreen = ({ navigation }) => {
  return (
    <HomeLayout navigation={navigation} currentTab="Copy Trade">
      <Text>Prediction screen</Text>
    </HomeLayout>
  );
}

export default CopyTradeScreen;
