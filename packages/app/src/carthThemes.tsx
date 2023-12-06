import { AppTheme } from '@backstage/core-plugin-api';
import { UnifiedTheme, UnifiedThemeOptions, createUnifiedTheme, genPageTheme, shapes, palettes, UnifiedThemeProvider } from '@backstage/theme';
import React from 'react';

import LightIcon from '@material-ui/icons/WbSunny';

const lightPageTheme = genPageTheme({ colors: ['#3f51b5', '#f50057'], shape: shapes.round });

function createCustomBaseTheme(palette: UnifiedThemeOptions['palette']): UnifiedTheme {
    return createUnifiedTheme({
        palette: {
            ...palette,
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
}

const { dark: customDark, light: customLight } = palettes;

const customLightTheme = createCustomBaseTheme({
    ...customLight,
});
const customDarkTheme = createCustomBaseTheme({
    ...customDark,
});

export const carthThemes: AppTheme[] = [
    {
        id: 'light-theme',
        title: 'Carth Light Theme',
        variant: 'light',
        icon: <LightIcon />,
        Provider: ({ children }) => <UnifiedThemeProvider theme={customLightTheme} children={children} />,
    },
    {
        id: 'dark-theme',
        title: 'Carth Dark Theme',
        variant: 'dark',
        Provider: ({ children }) => <UnifiedThemeProvider theme={customDarkTheme} children={children} />,
    },
];
