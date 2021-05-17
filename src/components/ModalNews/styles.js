//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

//#endregion

const { RED, GRAY } = COLOR;

const useStyles = () =>
    StyleSheet.create({
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
        abstract: {
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10,
            textAlign: 'left',
            ...FONT.GEOMANIST.REGULAR
        },
        bottom: {
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
