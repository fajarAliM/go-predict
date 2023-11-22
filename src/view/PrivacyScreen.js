import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import CustomText from '../components/custom/CustomText';

const PrivacyScreen = ({ navigation }) => {
    return (
        <View style={styles.screenContainer}>
            <CustomText
                value="Privacy Statement"
                size={24}
                font="bold"
                styles={styles.screenTitle}
                colorMode="highlight"
            />

            <ScrollView style={{ width: '100%', flex: 1 }}>
                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>

                <View>
                    <CustomText
                        value="Heading"
                        size={20}
                        font="bold"
                        styles={{ marginBottom: 6, lineHeight: 22 }}
                        colorMode="highlight"
                    />
                    <CustomText
                        value="Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in."
                        size={12}
                        font="medium"
                        styles={styles.descriptionText}
                    />
                </View>
            </ScrollView>

            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('LoginStack')}>
                <Button style={styles.closeButton} mode="contained">
                    <Text style={{ fontSize: 16, color: 'white', fontFamily: 'visbycf-demibold' }}>Close & GoPredict</Text>
                </Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    screenTitle: {
        marginTop: 30,
        marginBottom: 25
    },
    descriptionText: {
        lineHeight: 16,
        marginBottom: 16,
    },
    closeButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#141414',
        marginVertical: 30,
    }
});

export default PrivacyScreen;
