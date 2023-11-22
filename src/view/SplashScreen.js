import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginStack');
        }, 3000)
    }, []);
    return (
        <View style={styles.screenContainer}>
            <Image source={require('../assets/images/splashLogo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SplashScreen;
