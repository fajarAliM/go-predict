import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from '../components/custom/CustomText';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPasswordScreen = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [protectPassword, setProtectPassword] = useState(true);
    const [protectPasswordConfirm, setProtectPasswordConfirm] = useState(true);

    const { colors } = useTheme();

    const textNormalColor = colors.customColors.regularText;
    const textHighLightedColor = colors.customColors.highlightedText;
    return (
        <View style={styles.screenContainer}>
            <Image source={require('../assets/images/lightLogo.png')} style={{ marginTop: 50 }} />
            <CustomText
                font="bold"
                value="Request sent successfully!"
                colorMode="highlight"
                styles={styles.screenTitle}
            />
            <CustomText
                font="regular"
                value="We’ve sent a confirmation code to your email. Please enter the code in the box below to continue with the password change."
                styles={styles.screenDesc}
            />
            <TextInput
                label="New Password"
                value={password}
                secureTextEntry={protectPassword}
                placeholder='New Password'
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

            <TextInput
                label="Confirm New Password"
                value={passwordConfirm}
                secureTextEntry={protectPassword}
                placeholder='Confirm New Password'
                right={
                    <TextInput.Icon
                        onPress={() => setProtectPasswordConfirm(!protectPasswordConfirm)}
                        icon={protectPasswordConfirm ? "eye" : "eye-off"}
                        style={{ paddingTop: 10 }}
                    />
                }
                left={
                    <TextInput.Icon
                        icon="lock"
                        style={{ paddingTop: 10 }}
                    />
                }
                onChangeText={text => setPasswordConfirm(text)}
                mode='outlined'
                style={styles.passwordInput}
            />

            <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('LoginStack')}>
                <Button mode="contained" style={{ fontFamily: 'visbycf-bold', ...styles.loginButton }}>
                    <Text style={{ fontSize: 16, fontFamily: 'visbycf-bold', color: '#fff' }}>Update Password</Text>
                </Button>
            </TouchableOpacity>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: textNormalColor, fontFamily: 'visbycf-medium', lineHeight: 18 }}>
                    Don’t have a code?&nbsp;
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: textHighLightedColor, fontFamily: 'visbycf-demibold', ...styles.forgotPassword }}>Resend code</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.returnBtn} onPress={() => navigation.navigate('LoginStack')}>
                <Icon name="menu-left" size={30} color="#141414" />
                <CustomText
                    font="semiBold"
                    value="Return to Login"
                    colorMode="highlight"
                    size={16}
                    styles={{ lineHeight: 18 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        paddingHorizontal: 25,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    screenTitle: {
        fontSize: 28,
        marginTop: 60,
        lineHeight: 30
    },
    screenDesc: {
        fontSize: 16,
        lineHeight: 22,
        marginTop: 5,
        textAlign: 'center',
    },
    passwordInput: {
        width: '100%',
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderColor: 'rgba(20, 20, 20, 0.30)',
        fontSize: 16,
        marginTop: 20,
    },
    loginButton: {
        width: '100%',
        height: 60,
        borderRadius: 8,
        backgroundColor: '#141414',
        color: '#ffffff',
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    returnBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32,
    },
    forgotPassword: {
        fontSize: 16,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
})

export default ResetPasswordScreen;
