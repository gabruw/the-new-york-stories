//#region Imports

import CardNews from 'components/CardNews';
import AppLoader from 'containers/AppLoader';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import useTopStoriesContext from 'storages/top-stories/context';

//#endregion

const Technology = () => {
    const { technologyStories, fetchTechnology, isLoading } = useTopStoriesContext();

    useEffect(() => {
        fetchTechnology();
    }, []);

    return (
        <AppLoader isLoading={isLoading}>
            <ScrollView>
                {technologyStories && technologyStories.map((story, index) => <CardNews key={index} story={story} />)}
            </ScrollView>
        </AppLoader>
    );
};

export default Technology;
