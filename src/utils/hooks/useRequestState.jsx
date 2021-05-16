//#region Imports

import { useCallback, useState } from 'react';
import MISC_ERROR from 'utils/constants/error/misc';
import sleep from 'utils/function/sleep';

//#endregion

const initalState = {
    data: null,
    errors: null,
    success: false,
    isLoading: false
};

const useRequestState = () => {
    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const run = useCallback(
        async (callback, options) => {
            setRequestState({ ...initalState, isLoading: true, success: false });

            if (options?.sleep) {
                sleep(options?.sleepTimeout || 3000);
            }

            let response = null;
            try {
                const { data } = await callback();

                response = {
                    ...initalState,
                    success: true,
                    data: data.results
                };
            } catch (error) {
                const responseError = error && error.response;

                if (options?.autoClear) {
                    clear(5000);
                }

                response = {
                    ...initalState,
                    errors: responseError && responseError.data ? responseError.data.fault : MISC_ERROR.UNKNOW
                };
            }

            setRequestState(response);
            return response;
        },
        [clear]
    );

    return {
        run,
        clear,
        requestState
    };
};

export default useRequestState;
