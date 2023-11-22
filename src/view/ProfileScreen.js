import React from 'react';

import {
  Text,
  View
} from 'react-native';
import HomeLayout from '../layout/HomeLayout';

const ProfileScreen = ({ navigation }) => {
  return (
    <HomeLayout navigation={navigation} currentTab="Profile">
      <Text>Prediction screen</Text>
    </HomeLayout>
  );
}

export default ProfileScreen;
