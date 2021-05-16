//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';
import COLOR from 'assets/styles/color';

//#endregion

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
            fontSize: 18,
            textAlign: 'left',
            color: COLOR.ERROR
        },
        content: {
            padding: 15,
            paddingBottom: 0
        }
    });

export default useStyles;
