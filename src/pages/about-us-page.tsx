import Box from '@mui/material/Box';
import MCNETHistory from '../components/MCNETHistory';
import Shura from '../components/Shura';
import Page from '../layout/Page';
import Typography from '@mui/material/Typography';
import { APP_PRIMARY_COLOR, PATHS } from '../util/constants';
import { HashLink } from 'react-router-hash-link';
import BodySubHeader from '../layout/BodySubheader';
import { ReactElement } from 'react';
import Button from '@mui/material/Button';

const SHURA_ANCHOR_ID = 'shura';

export const AboutUs = (): ReactElement => {
  return (
    <>
      <Page
        headerText='OUR STORY'
        headerBody={
          <Button sx={{ mr: 2 }} variant='outlined'>
            <HashLink
              smooth
              style={{ color: APP_PRIMARY_COLOR }}
              to={`${PATHS.ABOUT_US}#${SHURA_ANCHOR_ID}`}
            >
              Click here to jump to see the members of our board, the{' '}
              <Box display='inline' fontStyle='italic'>
                Shura
              </Box>
            </HashLink>
          </Button>
        }
      >
        <MCNETHistory />
        <Box id={SHURA_ANCHOR_ID} height='1px' width='1px' />
        <BodySubHeader variant='h3'>
          THE{' '}
          <Box display='inline' fontStyle='italic'>
            SHURA
          </Box>
        </BodySubHeader>
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
