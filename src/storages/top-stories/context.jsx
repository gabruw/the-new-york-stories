//#region Imports

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import TOP_STORIES_FIELDS from 'utils/constants/fields/top-stories';
import CONTEXT_INITIAL_STATE from 'utils/constants/type/context-initial-state';
import isInvalid from 'utils/function/isInvalid';
import useRequestState from 'utils/hooks/useRequestState';
import { getHome, getScience, getTechnology } from './services/get-data';

//#endregion

const TopStoriesContext = createContext();

const { HOME, SCIENCE, TECHNOLOGY } = TOP_STORIES_FIELDS;

const initialState = {
    [HOME]: null,
    [SCIENCE]: null,
    [TECHNOLOGY]: null,
    ...CONTEXT_INITIAL_STATE
};

export const TopStoriesContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
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

    const fetchHome = useCallback(async () => {
        const { data, errors } = await run(() => getHome());
        setState((prevState) => ({ ...prevState, errors, [HOME]: data }));
    }, [run, setState]);

    const fetchScience = useCallback(async () => {
        const { data, errors } = await run(() => getScience());
        setState((prevState) => ({ ...prevState, errors, [SCIENCE]: data }));
    }, [run, setState]);

    const fetchTechnology = useCallback(async () => {
        const { data, errors } = await run(() => getTechnology());
        setState((prevState) => ({ ...prevState, errors, [TECHNOLOGY]: data }));
    }, [run, setState]);

    return (
        <TopStoriesContext.Provider
            value={{ state, modalRef, setIsLoading, setSelected, fetchHome, fetchScience, fetchTechnology }}
        >
            {children}
        </TopStoriesContext.Provider>
    );
};

const useTopStoriesContext = () => {
    const { state, modalRef, setIsLoading, setSelected, fetchHome, fetchScience, fetchTechnology } =
        useContext(TopStoriesContext);

    return { modalRef, setIsLoading, setSelected, fetchHome, fetchScience, fetchTechnology, ...state };
};

export default useTopStoriesContext;
