import {
  HomePageToolkit,
  HomePageStarredEntities,
  TemplateBackstageLogoIcon,
  WelcomeTitle,
} from '@backstage/plugin-home';
import { Content, InfoCard, Page, } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import {
  SearchContextProvider,
} from '@backstage/plugin-search-react';
import { AnnouncementsCard, NewAnnouncementBanner } from '@k-phoen/backstage-plugin-announcements';
import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { configApiRef, useApi } from '@backstage/core-plugin-api';

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none'
  }
}));


export const HomePage = () => {

  const classes = useStyles();
  const configApi = useApi(configApiRef);
  const appTitle = configApi.getOptionalString('app.title') || 'Backstage';
  const title = `Home | ${appTitle}`;

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <SearchContextProvider >
      <Page themeId="home">
        <Content>
          <WelcomeTitle language={["English"]} />
          <Grid container justifyContent="center" spacing={6}>
            <Grid container item xs={12} justifyContent='center'>
              <HomePageSearchBar
                InputProps={{ classes: { root: classes.searchBarInput, notchedOutline: classes.searchBarOutline } }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
              <Grid item xs={12} md={6}>
                <NewAnnouncementBanner />
              </Grid>
              <Grid item md={6}>
                <AnnouncementsCard max={3} />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  tools={[
                    { url: 'https://portal.azure.com', label: 'Azure Portal', icon: <TemplateBackstageLogoIcon />, },
                    { url: 'https://www.google.com', label: 'Google', icon: <TemplateBackstageLogoIcon />, },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title="Composable Section">
                  <div style={{ height: 370 }} />
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
}