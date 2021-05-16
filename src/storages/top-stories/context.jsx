//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import TOP_STORIES from 'utils/constants/fields/top-stories';
import CONTEXT_INITIAL_STATE from 'utils/constants/type/context-initial-state';
import isInvalid from 'utils/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { getHome, getScience, getTechnology } from './services/get-data';

//#endregion

const TopStoriesContext = createContext();

const initialState = {
    [TOP_STORIES.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const TopStoriesContextProvider = ({ children, defaultValues }) => {
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

    const setFetch = useCallback(
        (data, errors) => setState((prevState) => ({ ...prevState, errors, [TOP_STORIES.THIS]: data })),
        [setState]
    );

    const fetchHome = useCallback(async () => {
        const { data, errors } = await run(() => getHome());
        setFetch(data, errors);
    }, [run, setFetch]);

    const fetchScience = useCallback(async () => {
        const { data, errors } = await run(() => getScience());
        setFetch(data, errors);
    }, [run, setFetch]);

    const fetchTechnology = useCallback(async () => {
        const { data, errors } = await run(() => getTechnology());
        setFetch(data, errors);
    }, [run, setFetch]);

    return (
        <TopStoriesContext.Provider
            value={{ state, setIsLoading, setSelected, fetchHome, fetchScience, fetchTechnology }}
        >
            {children}
        </TopStoriesContext.Provider>
    );
};

const useTopStoriesContext = () => {
    const { state, setIsLoading, setSelected, fetchHome, fetchScience, fetchTechnology } =
        useContext(TopStoriesContext);

    return { setIsLoading, setSelected, fetchHome, fetchScience, fetchTechnology, ...state };
};

export default useTopStoriesContext;
