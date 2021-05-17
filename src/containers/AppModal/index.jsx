//#region Imports

import COLOR from 'assets/styles/color';
import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const { DARK } = COLOR.RED;

const AppModal = (
    { children, onClose, containerStyle, animationIn = 'fadeIn', animationOut = 'fadeOut', ...rest },
    ref
) => {
    const styles = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    const containerStyleSwitch = useMemo(() => containerStyle || styles.container, [containerStyle, styles]);

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
            <View style={containerStyleSwitch}>
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
