import { Box } from '@mui/material';
import ServicesList from '../components/Services/ServicesList';
import Page from '../layout/Page';
import { ReactElement } from 'react';

export const Services = (): ReactElement => {
  return (
    <Page
      headerText='MCNET SERVICES'
      headerBody={
        <>
          MCNET provides a number of services for our{' '}
          <Box fontStyle='italic' display='inline'>
            Ummah
          </Box>
          .{'  '}
          Please see below for further information.
        </>
      }
    >
      <ServicesList />
    </Page>
  );
};
