//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';
import COLOR from 'assets/styles/color';

//#endregion

const { DARK } = COLOR.RED;

const useStyles = () =>
    StyleSheet.create({
        card: {
            padding: 0,
            marginLeft: 0,
            marginRight: 0
        },
        theme: {
            fontSize: 14,
            flexDirection: 'row',
            textTransform: 'capitalize',
            ...ALIGN.LEFT
        },
        title: {
            color: DARK,
            fontSize: 18,
            textAlign: 'left'
        },
        content: {
            padding: 15,
            paddingBottom: 0
        }
    });

export default useStyles;
