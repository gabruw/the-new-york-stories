//#region Imports

import React, { useImperativeHandle, forwardRef, useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import useStyles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';
import COLOR from 'assets/styles/color';

//#endregion

const { DARK } = COLOR.RED;

const AppModal = ({ children, animationIn = 'fadeIn', animationOut = 'fadeOut', onClose, ...rest }, ref) => {
    const styles = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        handle: () => setIsVisible((prevState) => !prevState)
    }));

    return (
        <Modal
            isVisible={isVisible}
            animationIn={animationIn}
            animationOut={animationOut}
            onDismiss={() => onClose && onClose()}
            onBackdropPress={() => setIsVisible(false)}
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button
                        type='clear'
                        onPress={() => setIsVisible(false)}
                        icon={<Icon size={18} name='times' color={DARK} />}
                    />
                </View>
                {children}
            </View>
        </Modal>
    );
};

export default forwardRef(AppModal);
