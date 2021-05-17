//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        title: {
            fontSize: 18,
            color: '#FFFFFF',
            ...FONT.CHOMSKY.MEDIUM
        },
        banner: {
            flexDirection: 'row',
            ...ALIGN.LEFT
        }
    });

export default useStyles;
