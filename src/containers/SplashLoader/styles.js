//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        content: {
            flex: 1,
            ...FONT.REGULAR
        }
    });

export default useStyles;
