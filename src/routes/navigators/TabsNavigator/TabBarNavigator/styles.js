//#region Imports

import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { DARK } = COLOR.RED;

const useStyles = () =>
    StyleSheet.create({
        indicator: {
            backgroundColor: '#FFFFFF'
        },
        bar: {
            backgroundColor: DARK
        },
        title: {
            fontSize: 14,
            color: '#FFFFFF',
            ...FONT.GEOMANIST.MEDIUM
        }
    });

export default useStyles;
