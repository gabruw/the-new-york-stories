//#region Imports

import { useCallback, useState } from 'react';
import useSystemContext from 'storages/system/context';
import MISC_ERROR from 'utils/constants/error/misc';
import sleep from 'utils/function/sleep';
import useReload from './useReload';

//#endregion

const initalState = {
    data: null,
    errors: null,
    success: false,
    isLoading: false
};

const useRequestState = () => {
    const { reload } = useReload();
    const { handleSnackbar } = useSystemContext();

    const [requestState, setRequestState] = useState(initalState);

    const clear = useCallback((timeout = 100) => setTimeout(() => setRequestState(initalState), timeout), []);

    const run = useCallback(
        async (callback, options) => {
            setRequestState({ ...initalState, isLoading: true, success: false });

            if (options && options.sleep) {
                sleep(options.sleepTimeout || 3000);
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

                if (responseError.status === 429) {
                    handleSnackbar(MISC_ERROR.EXCEEDED, 'RECARREGAR', reload, true, 'error');
                }

                if (options && options.autoClear) {
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
