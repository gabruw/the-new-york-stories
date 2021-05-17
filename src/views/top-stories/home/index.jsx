//#region Imports

import CardNews from 'components/CardNews';
import AppLoader from 'containers/AppLoader';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import useTopStoriesContext from 'storages/top-stories/context';

//#endregion

const Home = () => {
    const { homeStories, fetchHome, isLoading } = useTopStoriesContext();

    useEffect(() => {
        fetchHome();
    }, []);

    return (
        <AppLoader isLoading={isLoading}>
            <ScrollView>
                {homeStories && homeStories.map((story, index) => <CardNews key={index} story={story} />)}
            </ScrollView>
        </AppLoader>
    );
};

export default Home;
