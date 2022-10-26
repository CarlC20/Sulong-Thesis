// @mui
import { Container, Grid } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections

import {
  HomeWelcome,
  HomeTotalCommitments,
  HomeFunctionRatio,
  HomeRedirection,
} from '../../sections/@sulong-dashboard/dashboard/home';

import { RequestType } from '../../sections/@sulong-dashboard/dashboard/request';
import { ReservationType } from '../../sections/@sulong-dashboard/dashboard/reservation';
import { ReportType } from '../../sections/@sulong-dashboard/dashboard/report';
// ----------------------------------------------------------------------

export default function DashboardHome() {
  const { user } = useAuth();
  const { themeStretch } = useSettings();

  return (
    <Page title="Dashboard">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <HomeWelcome displayName={user?.displayName} />
          </Grid>

          {/* Announcement Module TODO */}
          <Grid item xs={12} md={7}>
            <HomeRedirection displayName={user?.displayName} />
          </Grid>

          <Grid item xs={12} md={4}>
            <RequestType />
          </Grid>

          <Grid item xs={12} md={4}>
            <ReservationType />
          </Grid>

          <Grid item xs={12} md={4}>
            <ReportType />
          </Grid>

          <Grid item xs={12} md={6}>
            <HomeTotalCommitments />
          </Grid>

          <Grid item xs={12} md={6}>
            <HomeFunctionRatio />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
