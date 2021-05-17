//#region Imports

import React, { createContext, useCallback, useContext, useState } from 'react';
import SYSTEM_FIELDS from 'utils/constants/fields/system';
import SNACKBAR_INITIAL_STATE from 'utils/constants/type/snackbar-initial-state';

//#endregion

const SystemContext = createContext();

const { SNACKBAR } = SYSTEM_FIELDS;

const initialState = {
    [SNACKBAR]: SNACKBAR_INITIAL_STATE
};

export const SystemContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const handleSnackbar = useCallback(
        (text, actionText, action, visibility = false, type = 'default') =>
            setState((prevState) => ({
                ...prevState,
                [SNACKBAR]: { text, action, actionText, visibility, type }
            })),
        [setState]
    );

    return <SystemContext.Provider value={{ state, handleSnackbar }}>{children}</SystemContext.Provider>;
};

const useSystemContext = () => {
    const { state, handleSnackbar } = useContext(SystemContext);

    return { handleSnackbar, ...state };
};

export default useSystemContext;
