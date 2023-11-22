import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from '../components/custom/CustomText';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordResetScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.screenContainer}>
            <Image source={require('../assets/images/lightLogo.png')} style={{ marginTop: 50 }} />
            <CustomText
                font="bold"
                value="Forgot your password?"
                colorMode="highlight"
                styles={styles.screenTitle}
            />
            <CustomText
                font="regular"
                value="To reset your password enter the email address you use to sign in to the GoPredict"
                styles={styles.screenDesc}
            />
            <TextInput
                label="Email address"
                value={email}
                placeholder='example@gmail.com'
                onChangeText={text => setEmail(text)}
                mode='outlined'
                style={styles.emailInput}
            />
            <TouchableOpacity style={{ width: '100%' }}>
                <Button mode="contained" style={{ fontFamily: 'visbycf-bold', ...styles.loginButton }}>
                    <Text style={{ fontSize: 16, fontFamily: 'visbycf-bold', color: '#fff' }}>Reset Password</Text>
                </Button>
            </TouchableOpacity>

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
        marginTop: 120,
        lineHeight: 30
    },
    screenDesc: {
        fontSize: 16,
        lineHeight: 22,
        marginTop: 5,
        textAlign: 'center',
        maxWidth: 315,
    },
    emailInput: {
        width: '100%',
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderColor: 'rgba(20, 20, 20, 0.30)',
        fontSize: 16,
        marginTop: 32,
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
    }
})

export default PasswordResetScreen;
