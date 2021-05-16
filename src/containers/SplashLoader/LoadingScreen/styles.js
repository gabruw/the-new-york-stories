//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            ...ALIGN.CENTER
        },
        title: {
            fontSize: 40,
            marginTop: 15,
            marginBottom: 30,
            color: '#FFFFFF',
            textAlign: 'center',
            ...FONT.CHOMSKY.MEDIUM
        }
    });

export default useStyles;
