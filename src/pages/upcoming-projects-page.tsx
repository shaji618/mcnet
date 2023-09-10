import Grid from '@mui/material/Grid';
import ProjectCard from '../components/ProjectCard';
import Page from '../layout/Page';
import { ReactComponent as Duplex } from '../assets/svg-icons/duplex.svg';
import { ReactComponent as Construction } from '../assets/svg-icons/construction.svg';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const UpcomingProjects = () => {
  return (
    <Page headerText='UPCOMING PROJECTS'>
      <Grid container justifyContent='center' spacing={2}>
        <ProjectCard
          backContent={
            <>
              <Typography mb={2} textAlign='center'>
                We have purchased a 4.3 acre lot on Main Street, and we are
                excited to announce that construction will begin on September 1!
              </Typography>
              <Typography mt={2}>
                The intended goal of this property is a domicile for our Imam in
                one flat and a second flat that will become a rental property.
              </Typography>
            </>
          }
          fundTarget={100000}
          fundsRaised={100000}
          headerText='RENTAL PROPERTY/DUPLEX'
          image={<Duplex style={{ height: 300 }} />}
          status='GOAL MET'
        />
        <ProjectCard
          backContent={
            <>
              <Typography textAlign='center'>
                We are planning to expand the mosque to support our ever-growing
                community.
              </Typography>
              <Typography>
                We are working on the following for submission to the city:
              </Typography>
              <List>
                <ListItem>
                  <Typography>Written proposal</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Architecture</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Permits</Typography>
                </ListItem>
              </List>
            </>
          }
          fundsRaised={150000}
          fundTarget={2500000}
          headerText='MOSQUE EXTENSION'
          image={<Construction style={{ height: 300 }} />}
          status='PLANNING'
        />
      </Grid>
    </Page>
  );
};
