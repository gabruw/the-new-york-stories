//#region Imports

import Logo from 'components-svg/Logo';
import TitleLogo from 'components-svg/TitleLogo';
import GradientBackground from 'components/GradientBackground';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import useStyles from './styles';

//#endregion

const LoadingScreen = () => {
    const styles = useStyles();

    return (
        <GradientBackground>
            <View style={styles.container}>
                <Logo width={100} height={140} />
                <TitleLogo width={400} height={150} />

                <ActivityIndicator size='large' color='#FFFFFF' />
            </View>
        </GradientBackground>
    );
};

export default LoadingScreen;
