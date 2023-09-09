import Box from '@mui/material/Box';
import MCNETHistory from '../components/MCNETHistory';
import Shura from '../components/Shura';
import Page from '../layout/Page';
import Typography from '@mui/material/Typography';
import { appTertiaryColor } from '../util/constants';
import { HashLink } from 'react-router-hash-link';

export const About = () => {
  return (
    <>
      <Page
        headerText='OUR STORY'
        headerBody={
          <HashLink smooth to='/about#shura'>
            Click here to jump to see the members of our board, the{' '}
            <Box display='inline' fontStyle='italic'>
              Shura
            </Box>
            .
          </HashLink>
        }
      >
        <MCNETHistory />
        <Box id='shura' height='1px' width='1px' />
        <Typography
          mt={2}
          sx={{
            textAlign: 'center',
            textDecoration: `underline ${appTertiaryColor} 1px`,
            textUnderlineOffset: '0.3em'
          }}
          variant='h3'
        >
          THE{' '}
          <Box display='inline' fontStyle='italic'>
            SHURA
          </Box>
        </Typography>
        <Typography component='div' mb={3} mt={3} textAlign='center'>
          The{' '}
          <Box display='inline' fontStyle='italic'>
            Shura
          </Box>{' '}
          is our board, elected individuals who make decisions on MCNET's
          behalf.
        </Typography>
        <Shura />
      </Page>
    </>
  );
};
