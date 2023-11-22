import React from 'react';
import { useTheme } from '@react-navigation/native';

import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';

const PrivacyScreen = () => {
    const { colors } = useTheme();

    const textNormalColor = colors.customColors.regularText;
    const textHighLightedColor = colors.customColors.highlightedText;
    return (
        <View style={styles.screenContainer}>
            <Text style={{ color: textHighLightedColor, ...styles.screenTitle }}>Privacy Statement</Text>

            <ScrollView style={{ width: '100%', flex: 1 }}>
                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>

                <View>
                    <Text style={{ color: textHighLightedColor, ...styles.headingText }}>Heading</Text>
                    <Text style={{ color: textNormalColor, ...styles.descriptionText }}>
                        Lorem ipsum dolor sit amet consectetur. Praesent augue mauris malesuada sociis placerat amet in aliquet non. Augue auctor morbi morbi ipsum elementum dictum. Suspendisse lobortis ac dignissim amet sollicitudin. Mi ullamcorper sit enim tellus ac vitae. Ut nullam fames augue in.
                    </Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={{marginLeft: 'auto'}}>
                <Button style={styles.closeButton} mode="contained">Close & GoPredict</Button>
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
        fontSize: 24,
        fontWeight: 700,
        marginTop: 30,
        marginBottom: 25
    },
    headingText: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 6,
    },
    descriptionText: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16,
        marginBottom: 16,
    },
    closeButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: '700',
        borderRadius: 8,
        color: 'white',
        backgroundColor: '#141414',
        fontFamily: 'visbycf-bold',
        marginVertical: 30,
    }
});

export default PrivacyScreen;
