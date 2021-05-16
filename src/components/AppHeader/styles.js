//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        content: {
            flexDirection: 'row',
            ...ALIGN.LEFT
        }
    });

export default useStyles;
