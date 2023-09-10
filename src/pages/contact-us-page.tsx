import Page from '../layout/Page';
import ContactPicker from '../components/ContactPicker';
import ContactForm from '../components/ContactForm';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MailingListCTA from '../components/MailingListCTA';

export const ContactUs = () => {
  return (
    <Page
      headerText='GET IN TOUCH WITH US'
      headerBody='MCNET offers several lines of communication.  Reach out to us with any inquiries, comments, or concerns you might have related to MCNET activities!'
    >
      <ContactPicker />
      <Grid item container direction='row' justifyContent='center' mt={4}>
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
