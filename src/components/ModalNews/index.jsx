//#region Imports

import COLOR from 'assets/styles/color';
import ButtonLink from 'components/ButtonLink';
import AppModal from 'containers/AppModal';
import React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useTopStoriesContext from 'storages/top-stories/context';
import TOP_STORIES_FIELDS from 'utils/constants/fields/top-stories';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.GRAY;
const { TITLE, ABSCTRACT, SHORT_URL } = TOP_STORIES_FIELDS;

const ModalContent = () => {
    const styles = useStyles();
    const { selected } = useTopStoriesContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selected[TITLE]}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.abstract}>{selected[ABSCTRACT]}</Text>

            <View style={styles.bottom}>
                <ButtonLink
                    iconRight
                    type='clear'
                    url={selected[SHORT_URL]}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    icon={() => <Icon name='arrow-right' size={15} color={DARKEST} />}
                >
                    Leia mais
                </ButtonLink>
            </View>
        </View>
    );
};

const ModalNews = () => {
    const styles = useStyles();
    const { modalRef, selected, setSelected } = useTopStoriesContext();

    return (
        <AppModal ref={modalRef} containerStyle={styles.modalAppContainer} onClose={() => setSelected()}>
            {selected && <ModalContent />}
        </AppModal>
    );
};

export default ModalNews;
