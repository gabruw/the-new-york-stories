//#region Imports

import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import useTopStoriesContext from 'storages/top-stories/context';
import TOP_STORIES_FIELDS from 'utils/constants/fields/top-stories';
import useStyles from './styles';

//#endregion

const { TITLE, SECTION, MULTIMEDIA } = TOP_STORIES_FIELDS;

const CardNews = ({ story }) => {
    const styles = useStyles();
    const { setSelected, modalRef } = useTopStoriesContext();

    const { url } = useMemo(
        () => story[MULTIMEDIA].filter(({ type, subtype }) => type === 'image' && subtype === 'photo')[0],
        [story[MULTIMEDIA]]
    );

    const handleDetails = useCallback(() => {
        setSelected(story);
        modalRef.current.show();
    }, [setSelected, modalRef]);

    return (
        <Card containerStyle={styles.card}>
            <View style={styles.content}>
                <Card.Title style={styles.theme}>{story[SECTION]}</Card.Title>
                <Card.Title style={styles.title} onPress={() => handleDetails()}>
                    {story[TITLE]}
                </Card.Title>
            </View>

            <Card.Image source={url} onPress={() => handleDetails()} />
        </Card>
    );
};

export default CardNews;
