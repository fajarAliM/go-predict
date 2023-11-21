import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const SinginScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.screenContainer}>
      <Image source={require('../assets/images/lightLogo.png')} />
      <Image source={require('../assets/images/loginPredictLight.png')} style={styles.loginPredictText} />
      <Text style={styles.guideText}>Enter your registered details below</Text>
      <TextInput 
        label="Email address or GPID" 
        value={email} 
        placeholder='example@gmail.com'
        onChangeText={text => setEmail(text)} 
        mode='outlined' 
        style={styles.textInput} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 30
  },
  loginPredictText: {
    marginTop: 120,
  },
  guideText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(20, 20, 20, 0.70)',
    marginTop: 5,
    fontFamily: 'visbycf-medium',
  },
  textInput: {
    width: '100%',
    marginTop: 30
  }
});

export default SinginScreen;
