//#region Imports

import React, { useCallback } from 'react';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';

//#endregion

const AppSnackbar = () => {
    const styles = useStyles();
    const {
        handleSnackbar,
        snackbar: { visibility, text, actionText, action }
    } = useSystemContext();

    const handleAction = useCallback(() => {
        action && action();
        handleSnackbar();
    }, [action]);

    return (
        <BottomSheet isVisible={visibility}>
            <ListItem containerStyle={styles.listItems}>
                <ListItem.Content style={styles.content}>
                    <ListItem.Title style={styles.text}>{text}</ListItem.Title>
                    <Button
                        type='clear'
                        title={actionText}
                        buttonStyle={styles.button}
                        titleStyle={styles.actionText}
                        onPress={() => handleAction()}
                    />
                </ListItem.Content>
            </ListItem>
        </BottomSheet>
    );
};

export default AppSnackbar;
