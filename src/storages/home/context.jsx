//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import SEARCH from 'utils/constants/type/search';
import isInvalid from 'utils/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { getTopStories } from './services/get-data';

//#endregion

const HomeContext = createContext();

const initialState = {
    [SEARCH.TOP_STORIES]: null,
    ...CONTEXT_INITIAL_STATE
};

export const HomeContextProvider = ({ children, defaultValues }) => {
    const { run, requestState } = useRequestState();
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    useEffect(() => {
        setIsLoading(requestState.isLoading);
    }, [requestState]);

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading: isInvalid(isLoading) ? !prevState.isLoading : isLoading
            })),
        [setState]
    );

    const setSelected = useCallback(
        (selected = null) =>
            setState((prevState) => ({ ...prevState, selected, hasSelected: Boolean.apply(selected) })),
        [setState]
    );

    const fetchTopStories = useCallback(async () => {
        const { data, errors } = await run(() => getTopStories());
        setState((prevState) => ({ ...prevState, errors, [SEARCH.TOP_STORIES]: data }));
    }, [run, setState]);

    return (
        <HomeContext.Provider value={{ state, setIsLoading, setSelected, fetchTopStories }}>
            {children}
        </HomeContext.Provider>
    );
};

const useHomeContext = () => {
    const { state, setIsLoading, setSelected, fetchTopStories } = useContext(HomeContext);

    return { setIsLoading, setSelected, fetchTopStories, ...state };
};

export default useHomeContext;
