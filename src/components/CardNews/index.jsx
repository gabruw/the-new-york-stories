//#region Imports

import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import useTopStoriesContext from 'storages/top-stories/context';
import useStyles from './styles';

//#endregion

const CardNews = ({ story }) => {
    const styles = useStyles();
    const { setSelected, modalRef } = useTopStoriesContext();

    const { title, section, multimedia } = story;

    const { url } = useMemo(
        () => multimedia.filter(({ type, subtype }) => type === 'image' && subtype === 'photo')[0],
        [multimedia]
    );

    const handleDetails = useCallback(() => {
        setSelected({ ...story, frontImage: url });
        modalRef.current.show();
    }, [setSelected, modalRef]);

    return (
        <Card containerStyle={styles.card}>
            <View style={styles.content}>
                <Card.Title style={styles.theme}>{section}</Card.Title>
                <Card.Title style={styles.title} onPress={() => handleDetails()}>
                    {title}
                </Card.Title>
            </View>

            <Card.Image source={url} onPress={() => handleDetails()} />
        </Card>
    );
};

export default CardNews;
