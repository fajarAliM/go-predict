import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import CustomText from '../components/custom/CustomText';

const SinginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [protectPassword, setProtectPassword] = useState(true);

  const { colors } = useTheme();

  const textNormalColor = colors.customColors.regularText;
  const textHighLightedColor = colors.customColors.highlightedText;
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Image source={require('../assets/images/lightLogo.png')} style={{ marginTop: 50 }} />
        <Image source={require('../assets/images/loginPredictLight.png')} style={styles.loginPredictText} />
        <CustomText
          size={16}
          font='medium'
          value="Enter your registered details below"
          styles={styles.guideText}
        />
      </View>

      <View style={styles.loginFormView}>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <TextInput
            label="Email address or GPID"
            value={email}
            left={
              <TextInput.Icon icon="account" style={{ paddingTop: 10 }} />
            }
            placeholder='example@gmail.com'
            onChangeText={text => setEmail(text)}
            mode='outlined'
            style={styles.emailInput}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={protectPassword}
            placeholder='Password'
            right={
              <TextInput.Icon
                onPress={() => setProtectPassword(!protectPassword)}
                icon={protectPassword ? "eye" : "eye-off"}
                style={{ paddingTop: 10 }}
              />
            }
            onChangeText={text => setPassword(text)}
            mode='outlined'
            style={styles.passwordInput}
          />
        </View>

        <TouchableOpacity style={styles.termsPrivacyRow} onPress={() => { setChecked(!checked) }}>
          <Checkbox status={checked ? 'checked' : 'unchecked'} />
          <Text style={{ flex: 1, fontFamily: 'visbycf-medium', color: textNormalColor, lineHeight: 16 }}>I have read and understood the <Text style={{ color: textHighLightedColor, fontWeight: '600', textDecorationLine: 'underline' }}>Terms of Use</Text>
            &nbsp;and <Text style={{ color: textHighLightedColor, fontWeight: '600', textDecorationLine: 'underline' }}>Privacy Statement</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '100%' }}>
          <Button mode="contained" style={{ fontFamily: 'visbycf-bold', ...styles.loginButton }}>
            <Text style={{ fontSize: 16, fontFamily: 'visbycf-bold', color: '#fff' }}>Log In</Text>
          </Button>
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, color: textNormalColor, fontFamily: 'visbycf-medium', lineHeight: 18 }}>
            Forgot your password?&nbsp;
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('PasswordResetStack')}>
            <Text style={{ color: textHighLightedColor, fontFamily: 'visbycf-medium', ...styles.forgotPassword }}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '100%', marginTop: 40, marginBottom: 100, gap: 12 }}>
        <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('TermsStack')}>
          <View style={styles.termsPrivacyBtns}>
            <CustomText
              font="bold"
              value="Terms of Use "
              colorMode="highlight"
            />
            <Image source={require('../assets/images/arrow-left.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('PrivacyStack')}>
          <View style={styles.termsPrivacyBtns}>
            <CustomText
              font="bold"
              value="Privacy Statement"
              colorMode="highlight"
            />
            <Image source={require('../assets/images/arrow-left.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 25,
  },
  loginPredictText: {
    marginTop: 100,
  },
  guideText: {
    marginTop: 5,
    lineHeight: 18,
  },
  loginFormView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  emailInput: {
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderColor: 'rgba(20, 20, 20, 0.30)',
    fontSize: 16,
  },
  passwordInput: {
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderColor: 'rgba(20, 20, 20, 0.30)',
    fontSize: 16,
  },
  termsPrivacyRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    backgroundColor: '#3CD981',
    color: '#ffffff',
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  termsPrivacyBtns: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: 'rgba(20, 20, 20, 0.30)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  }
});

export default SinginScreen;
