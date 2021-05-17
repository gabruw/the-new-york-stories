//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 2,
            backgroundColor: '#FFFFFF'
        },
        header: {
            padding: 10,
            paddingBottom: 0,
            flexDirection: 'row',
            ...ALIGN.RIGHT
        }
    });

export default useStyles;
