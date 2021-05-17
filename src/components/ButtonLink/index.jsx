//#region Imports

import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';
import useSystemContext from 'storages/system/context';
import MISC_ERROR from 'utils/constants/error/misc';

//#endregion

const ButtonLink = ({ url, children, ...rest }) => {
    const { handleSnackbar } = useSystemContext();

    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (!supported) {
            handleSnackbar(MISC_ERROR.NOT_SUPPORTED, 'FECHAR', null, true);
        }

        await Linking.openURL(url);
    }, [url, handleSnackbar]);

    return <Button title={children} onPress={handlePress} {...rest} />;
};

export default ButtonLink;
