//#region Imports

import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

//#endregion

const useReload = () => {
    const route = useRoute();
    const { navigate } = useNavigation();

    const reload = useCallback(() => {
        navigate(route.name);
    }, [route]);

    return {
        reload
    };
};

export default useReload;
