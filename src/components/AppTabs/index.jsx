//#region Imports

import React from 'react';
import { Tab } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const CardNews = () => {
    const styles = useStyles();

    return (
        <Tab>
            <Tab.Item title='Recent' />
            <Tab.Item title='favourite' />
            <Tab.Item title='cart' />
        </Tab>
    );
};

export default CardNews;
