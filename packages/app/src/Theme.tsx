import { createTheme, genPageTheme, lightTheme, shapes, } from '@backstage/theme';

const pageTheme = genPageTheme({ colors: ['#3f51b5', '#f50057'], shape: shapes.round });

const myTheme = createTheme({
    palette: {
        ...lightTheme.palette,
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
        banner: {
            info: '#3f51b5',
            error: '#f44336',
            text: '#343b58',
            link: '#565a6e',
        },
        errorBackground: '#8c4351',
        warningBackground: '#8f5e15',
        infoBackground: '#343b58',
        navigation: {
            background: '#343b58',
            indicator: '#8f5e15',
            color: '#d5d6db',
            selectedColor: '#ffffff',
        },
    },
    defaultPageTheme: 'home',
    // fontFamily: 'Comic Sans MS',
    /* below drives the header colors */
    pageTheme: {
        home: pageTheme,
        documentation: pageTheme,
        tool: pageTheme,
        service: pageTheme,
        website: pageTheme,
        library: pageTheme,
        other: pageTheme,
        app: pageTheme,
        apis: pageTheme,
    },
});

export default myTheme;