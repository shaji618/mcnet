import { FC } from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import ContactForm from '@components/ContactForm';
import ContactPicker from '@components/ContactPicker';
import MailingListCTA from '@components/MailingListCTA';
import Page from '@layout/Page';

export const ContactUs: FC = () => {
  return (
    <Page
      childrenBoxSx={{ display: 'grid', justifyItems: 'center' }}
      headerText='GET IN TOUCH WITH US'
      headerBody='MCNET offers several lines of communication.  Reach out to us with any inquiries, comments, or concerns you might have related to MCNET activities!'
    >
      <ContactPicker />
      <Grid
        container
        direction='row'
        display='grid-inline'
        justifyItems='center'
        mt={4}
      >
        <Grid item mr={2} width='48%'>
          <ContactForm />
        </Grid>
        <Grid item>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item ml={2} width='48%'>
          <MailingListCTA />
        </Grid>
      </Grid>
    </Page>
  );
};
