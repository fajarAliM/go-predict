import React, { Children } from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const customFonts = {
    light: 'visbycf-light',
    regular: 'visbycf-regular',
    medium: 'visbycf-medium',
    semiBold: 'visbycf-demibold',
    bold: 'visbycf-bold',
    black: 'visbycf-heavy',
}

const CustomText = ({ font, size, colorMode, styles, value }) => {
    const { colors } = useTheme();

    const textColor = {
        normal: colors.customColors.regularText,
        highlight: colors.customColors.highlightedText,
    };
    return <Text style={{
        fontFamily: font ? customFonts[font] : customFonts.regular,
        color: colorMode ? textColor[colorMode] : textColor.normal,
        fontSize: size ? size : 14,
        ...styles
    }}>
        {value}
    </Text>
}

export default CustomText;
