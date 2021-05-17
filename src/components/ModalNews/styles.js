//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const { RED, GRAY } = COLOR;

const useStyles = () =>
    StyleSheet.create({
        modalAppContainer: {
            height: 260,
            borderRadius: 2,
            backgroundColor: '#FFFFFF'
        },
        container: {
            paddingLeft: 12,
            paddingRight: 12
        },
        title: {
            fontSize: 22,
            color: RED.DARK,
            textAlign: 'left',
            ...FONT.GEOMANIST.MEDIUM
        },
        divider: {
            marginTop: 10,
            marginBottom: 12
        },
        abstract: {
            fontSize: 14,
            textAlign: 'left',
            ...FONT.GEOMANIST.REGULAR
        },
        bottom: {
            marginTop: 10,
            flexDirection: 'row',
            ...ALIGN.RIGHT
        },
        buttonTitle: {
            marginRight: 5,
            color: GRAY.DARKEST,
            ...FONT.GEOMANIST.MEDIUM
        },
        buttonContainer: {
            flexDirection: 'row',
            ...ALIGN.LEFT
        }
    });

export default useStyles;
