import {
  HomePageToolkit,
  HomePageCompanyLogo,
  HomePageStarredEntities,
  WelcomeTitle,
} from '@backstage/plugin-home';
import { Content, Page, InfoCard } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import {
  SearchContextProvider,
} from '@backstage/plugin-search-react';
import { AnnouncementsCard, NewAnnouncementBanner } from '@k-phoen/backstage-plugin-announcements';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import LogoFull from '../Root/LogoFull';
import CloudIcon from '@material-ui/icons/Cloud';
import AzureDevOpsIcon from '../Root/logo/AzureDevOpsIcon';

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

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
}));

export const HomePage = () => {

  const classes = useStyles();
  const { container } = useLogoStyles();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <WelcomeTitle language={["en"]} />
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<LogoFull />}
            />
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
                    {url: 'https://portal.azure.com', label: 'Azure Portal', icon: <CloudIcon />},
                    {url: 'https://dev.azure.com', label: 'Azure DevOps', icon: <AzureDevOpsIcon />},

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