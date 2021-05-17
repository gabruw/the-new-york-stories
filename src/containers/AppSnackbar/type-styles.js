//#region Imports

import useStyles from './styles';

//#endregion

const useTypeStyles = (type) => {
    const styles = useStyles();

    const typeStyles = {
        error: styles.error,
        default: styles.default
    };

    return [styles.listItems, typeStyles[type]];
};

export default useTypeStyles;
