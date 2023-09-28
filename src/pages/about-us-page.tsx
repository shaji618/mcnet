import { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HashLink } from 'react-router-hash-link';

import MCNETHistory from '@components/MCNETHistory';
import Shura from '@components/Shura';
import BodySubHeader from '@layout/BodySubheader';
import Page from '@layout/Page';
import { APP_PRIMARY_COLOR, PATHS } from '@util/constants';

const SHURA_ANCHOR_ID = 'shura';

export const AboutUs: FC = () => {
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
