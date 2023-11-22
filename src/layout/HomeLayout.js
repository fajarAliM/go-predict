import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import CustomText from '../components/custom/CustomText';
import PagesTab from '../components/PagesTab';

const HomeLayout = ({ navigation, currentTab, children }) => {
    return (
        <View style={styles.screenContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={styles.avatarWrapper}>
                    <Avatar.Text size={48} label="JW" />
                    <CustomText
                        size={16}
                        font="semibold"
                        colorMode="highlight"
                        value="Jenny Wilson"
                    />
                </View>

                <View style={styles.notificationWrapper}>
                    <View style={styles.notificationNumWrapper}>
                    <Text style={styles.notificationNumber}>99</Text>
                    </View>
                    
                    <Image source={require('../assets/images/Bell.png')} />
                </View>
            </View>
            <PagesTab navigation={navigation} currentTab={currentTab} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    avatarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    notificationWrapper: {
        padding: 12,
        borderRadius: 30,
        backgroundColor: 'white',
        position: 'relative',
    },
    notificationNumWrapper: {
        borderRadius: 20,
        backgroundColor: '#FE2828',
        top: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
    },
    notificationNumber: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'visbycf-demibold',
    }
})

export default HomeLayout;
