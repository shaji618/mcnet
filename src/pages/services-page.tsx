import { FC } from 'react';
import Box from '@mui/material/Box';

import ServicesList from '@components/services/ServicesList';
import Page from '@layout/Page';

export const Services: FC = () => {
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
