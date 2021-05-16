//#region Imports

import AppHeader from 'components/AppHeader';
import CardNews from 'components/CardNews';
import React, { Fragment, useEffect } from 'react';
import useTopStoriesContext, { TopStoriesContextProvider } from 'storages/top-stories/context';

//#endregion

const ap = {
    section: 'us',
    subsection: '',
    title: 'How a Genetic Trait in Black People Can Give the Police Cover',
    abstract:
        'Sickle cell trait has been cited in dozens of police custody deaths ruled accidental or natural, even though the condition is benign on its own, a Times investigation found.',
    url: 'https://www.nytimes.com/2021/05/15/us/african-americans-sickle-cell-police.html',
    uri: 'nyt://article/9772eb66-241a-538f-9bd5-7c118545ad02',
    byline: 'By Michael LaForgia and Jennifer Valentino-DeVries',
    item_type: 'Article',
    updated_date: '2021-05-15T05:00:23-04:00',
    created_date: '2021-05-15T05:00:23-04:00',
    published_date: '2021-05-15T05:00:23-04:00',
    material_type_facet: '',
    kicker: '',
    des_facet: [
        'Black Lives Matter Movement',
        'Black People',
        'George Floyd Protests (2020)',
        'Police Brutality, Misconduct and Shootings',
        'Police',
        'Autopsies',
        'Prison Guards and Corrections Officers',
        'Genetics and Heredity',
        'Sickle Cell Anemia'
    ],
    org_facet: [],
    per_facet: ['Chauvin, Derek (1976- )', 'Floyd, George (d 2020)', 'Wetli, Charles V'],
    geo_facet: ['United States'],
    multimedia: [
        {
            url: 'https://static01.nyt.com/images/2021/04/30/multimedia/00sicklecell1/merlin_187136928_faa677b1-7b87-49e1-8f02-f8a6ad5a2c0c-superJumbo.jpg',
            format: 'superJumbo',
            height: 2048,
            width: 1367,
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Damon Casarez for The New York Times'
        },
        {
            url: 'https://static01.nyt.com/images/2021/04/30/multimedia/00sicklecell1/merlin_187136928_faa677b1-7b87-49e1-8f02-f8a6ad5a2c0c-thumbStandard.jpg',
            format: 'Standard Thumbnail',
            height: 75,
            width: 75,
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Damon Casarez for The New York Times'
        },
        {
            url: 'https://static01.nyt.com/images/2021/04/30/multimedia/00sicklecell1/merlin_187136928_faa677b1-7b87-49e1-8f02-f8a6ad5a2c0c-thumbLarge.jpg',
            format: 'thumbLarge',
            height: 150,
            width: 150,
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Damon Casarez for The New York Times'
        },
        {
            url: 'https://static01.nyt.com/images/2021/04/30/multimedia/00sicklecell1/merlin_187136928_faa677b1-7b87-49e1-8f02-f8a6ad5a2c0c-mediumThreeByTwo210.jpg',
            format: 'mediumThreeByTwo210',
            height: 140,
            width: 210,
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Damon Casarez for The New York Times'
        },
        {
            url: 'https://static01.nyt.com/images/2021/04/30/multimedia/00sicklecell1/merlin_187136928_faa677b1-7b87-49e1-8f02-f8a6ad5a2c0c-articleInline.jpg',
            format: 'Normal',
            height: 285,
            width: 190,
            type: 'image',
            subtype: 'photo',
            caption: '',
            copyright: 'Damon Casarez for The New York Times'
        }
    ],
    short_url: 'https://nyti.ms/3tOu1ok'
};

const Content = () => {
    const { topStories, fetchHome } = useTopStoriesContext();

    useEffect(() => {
        fetchHome();
    }, []);

    console.log('topStories', topStories);
    return (
        <Fragment>{topStories && topStories.map((story, index) => <CardNews key={index} story={story} />)}</Fragment>
    );
};

const Home = () => (
    <TopStoriesContextProvider>
        <AppHeader />
        <Content />
    </TopStoriesContextProvider>
);

export default Home;
