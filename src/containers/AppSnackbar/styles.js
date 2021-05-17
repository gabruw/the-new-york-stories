//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { GRAY, RED } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        listItems: {
            margin: 10,
            marginTop: 0,
            borderRadius: 2
        },
        default: {
            backgroundColor: GRAY.DARKEST
        },
        error: {
            backgroundColor: RED.MEDIUM
        },
        content: {
            flexDirection: 'row',
            alignItems: 'center',
            ...ALIGN.BETWEEN
        },
        text: {
            fontSize: 14,
            marginRight: 5,
            color: '#FFFFFF',
            textAlign: 'left',
            ...FONT.GEOMANIST.REGULAR
        },
        actionText: {
            fontSize: 14,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            ...FONT.GEOMANIST.MEDIUM
        },
        button: {
            margin: 0,
            padding: 0
        }
    });

export default useStyles;
