import { createUnifiedTheme, genPageTheme, palettes, shapes, } from '@backstage/theme';

const lightPageTheme = genPageTheme({ colors: ['#3f51b5', '#f50057'], shape: shapes.round });

export const myLightTheme = createUnifiedTheme({
    palette: {
        ...palettes.light,
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
        home: lightPageTheme,
        documentation: lightPageTheme,
        tool: lightPageTheme,
        service: lightPageTheme,
        website: lightPageTheme,
        library: lightPageTheme,
        other: lightPageTheme,
        app: lightPageTheme,
        apis: lightPageTheme,
    },
});

const darkPageTheme = genPageTheme({ colors: ['#3f51b5', '#2c387e'], shape: shapes.round });

export const myDarkTheme = createUnifiedTheme({
    palette: {
        ...palettes.light,
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
        home: darkPageTheme,
        documentation: darkPageTheme,
        tool: darkPageTheme,
        service: darkPageTheme,
        website: darkPageTheme,
        library: darkPageTheme,
        other: darkPageTheme,
        app: darkPageTheme,
        apis: darkPageTheme,
    },
});