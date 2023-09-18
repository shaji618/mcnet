import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BackButton, HomeButton } from '@layout/Buttons';
import Page from '@layout/Page';

const NotFoundPage = (): ReactElement => {
  return (
    <Page>
      <Typography textAlign='center' variant='h1'>
        404
      </Typography>
      <Typography textAlign='center'>
        That page does not seem to exist.
      </Typography>
      <Stack direction='row' justifyContent='center' mt={2} spacing={2}>
        <BackButton />
        <HomeButton />
      </Stack>
    </Page>
  );
};

export default NotFoundPage;
