//#region Imports

import CardNews from 'components/CardNews';
import AppLoader from 'containers/AppLoader';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import useTopStoriesContext from 'storages/top-stories/context';

//#endregion

const Science = () => {
    const { scienceStories, fetchScience, isLoading } = useTopStoriesContext();

    useEffect(() => {
        fetchScience();
    }, []);

    return (
        <AppLoader isLoading={isLoading}>
            <ScrollView>
                {scienceStories && scienceStories.map((story, index) => <CardNews key={index} story={story} />)}
            </ScrollView>
        </AppLoader>
    );
};

export default Science;
