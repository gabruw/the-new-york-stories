//#region Imports

import GradientBackground from 'components/GradientBackground';
import Logo from 'components/Logo';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const LoadingScreen = () => {
    const styles = useStyles();

    return (
        <GradientBackground>
            <View style={styles.container}>
                <Logo width={100} height={140} />
                <Text style={styles.title}>The New York Stories</Text>

                <ActivityIndicator size='large' color='#FFFFFF' />
            </View>
        </GradientBackground>
    );
};

export default LoadingScreen;
