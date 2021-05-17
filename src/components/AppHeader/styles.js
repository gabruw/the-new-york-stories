//#region Imports

import ALIGN from 'assets/styles/align';
import COLOR from 'assets/styles/color';
import { StyleSheet } from 'react-native';

//#endregion

const { DARK } = COLOR.RED;

const useStyles = () =>
    StyleSheet.create({
        container: {
            backgroundColor: DARK
        },
        containerLeft: {
            flexDirection: 'row',
            ...ALIGN.LEFT
        },
        containerCenter: {
            flexDirection: 'row',
            ...ALIGN.CENTER
        }
    });

export default useStyles;
