//#region Imports

import React, { useState } from 'react';
import Modal from 'react-native-modal';
import useStyles from './styles';

//#endregion

const AppModal = ({ children, animationIn = 'fadeIn', animationOut = 'fadeOut', ...rest }, ref) => {
    const styles = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        handle: () => setIsVisible((prevState) => !prevState)
    }));

    return (
        <Modal isVisible={isVisible} {...rest} animationIn={animationIn} animationOut={animationOut}>
            {children}
        </Modal>
    );
};

export default forwardRef(AppModal);
