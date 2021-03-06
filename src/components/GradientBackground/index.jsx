//#region Imports

import COLOR from 'assets/styles/color';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import useStyles from './styles';

//#endregion

const { BACKGROUND } = COLOR;

const GradientBackground = ({ children }) => {
    const styles = useStyles();

    return (
        <LinearGradient end={[1, 1]} start={[0, 0]} location={[0, 1]} colors={BACKGROUND} style={styles.background}>
            {children}
        </LinearGradient>
    );
};

export default GradientBackground;
