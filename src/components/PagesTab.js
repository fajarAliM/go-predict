import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PagesTab = ({ navigation, currentTab }) => {
    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('PredictionStack')}
                style={currentTab === 'Prediction' ? { ...styles.tabItem, ...styles.tabItemActive } : { flex: 1, ...styles.tabItem }}>
                {currentTab === 'Prediction' ?
                    <Image source={require('../assets/images/prediction-focus.png')} /> :
                    <Image source={require('../assets/images/prediction.png')} />}
                {currentTab === 'Prediction' &&
                    <Text style={styles.activeTabText}>Prediction</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('TradebookStack')}
                style={currentTab === 'Tradebook' ? { ...styles.tabItem, ...styles.tabItemActive } : { flex: 1, ...styles.tabItem }}>
                {currentTab === 'Tradebook' ?
                    <Image source={require('../assets/images/tradebook-focus.png')} /> :
                    <Image source={require('../assets/images/tradebook.png')} />}
                {currentTab === 'Tradebook' &&
                    <Text style={styles.activeTabText}>Tradebook</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('CopyTradeStack')}
                style={currentTab === 'Copy Trade' ? { ...styles.tabItem, ...styles.tabItemActive } : { flex: 1, ...styles.tabItem }}>
                {currentTab === 'Copy Trade' ?
                    <Image source={require('../assets/images/copyTrade-focus.png')} /> :
                    <Image source={require('../assets/images/copyTrade.png')} />}
                {currentTab === 'Copy Trade' &&
                    <Text style={styles.activeTabText}>Copy Trade</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ProfileStack')}
                style={currentTab === 'Profile' ? { ...styles.tabItem, ...styles.tabItemActive } : { flex: 1, ...styles.tabItem }}>
                {currentTab === 'Profile' ?
                    <Image source={require('../assets/images/profile-focus.png')} /> :
                    <Image source={require('../assets/images/profile.png')} />}
                {currentTab === 'Profile' &&
                    <Text style={styles.activeTabText}>Profile</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        marginTop: 16,
        width: '100%',
        padding: 6,
        borderRadius: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tabItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        gap: 8,
    },
    tabItemActive: {
        backgroundColor: '#141414',
        borderRadius: 100,
    },
    activeTabText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'visbycf-medium',
    }
})

export default PagesTab;
