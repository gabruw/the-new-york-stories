//#region Imports

import COLOR from 'assets/styles/color';
import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const { DARK } = COLOR.RED;

const useStyles = () =>
    StyleSheet.create({
        layout: {
            width: Dimensions.get('window').width
        },
        container: {
            marginTop: 0
        },
        scene: {
            backgroundColor: DARK
        }
    });

export default useStyles;
