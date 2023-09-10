import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { appPrimaryColor, appSecondaryColor } from '../util/constants';
import { ReactComponent as PrayerHands } from '../assets/svg-icons/prayerHands.svg';
import { ReactComponent as WeddingRings } from '../assets/svg-icons/wedding.svg';
import { ReactComponent as Funeral } from '../assets/svg-icons/funeral.svg';
import { ReactNode, SyntheticEvent, useState } from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ServicesAccordion from './ServicesAccordion';

export type Services = 'chaplaincy' | 'matrimonial' | 'funeral' | 'interfaith';

const IconSelector = (props: {
  active?: boolean;
  svgComponent: ReactNode;
  title: string;
}) => {
  const { active, svgComponent, title } = props;

  return (
    <Stack>
      <Avatar
        className={active ? 'active' : ''}
        sx={{
          border: `1px solid ${appPrimaryColor}`,
          borderRadius: '50%',
          height: 150,
          width: 150,
          margin: '0 auto',
          '&:hover': {
            backgroundColor: appSecondaryColor,
            cursor: 'pointer'
          },
          '&.active': {
            backgroundColor: appSecondaryColor
          }
        }}
      >
        {svgComponent}
      </Avatar>
      <Typography
        mt={2}
        variant='h4'
        flexWrap='wrap'
        textAlign='center'
        width={200}
      >
        {title.toUpperCase()}
      </Typography>
    </Stack>
  );
};

const ServicesList = () => {
  const [serviceActive, setServiceActive] = useState<Services | false>(
    'chaplaincy'
  );

  const [expanded, setExpanded] = useState<Services | false>('chaplaincy');

  const handleChange =
    (panel: Services) =>
    (
      // @ts-ignore
      event: SyntheticEvent,
      newExpanded: boolean
    ) => {
      setExpanded(newExpanded ? panel : false);
      setServiceActive(serviceActive !== panel ? panel : false);
    };

  const handleClick = (
    // @ts-ignore
    event: React.MouseEvent<HTMLElement>,
    panel: Services
  ) => {
    setExpanded(expanded === panel ? false : panel);
    setServiceActive(serviceActive !== panel ? panel : false);
  };

  return (
    <>
      <Stack direction='row' mt={2} spacing={14} justifyContent='center'>
        <Box mr={1} onClick={(e) => handleClick(e, 'chaplaincy')}>
          <IconSelector
            active={serviceActive === 'chaplaincy'}
            svgComponent={<PrayerHands height='50%' width='50%' />}
            title='CHAPLAINCY'
          />
        </Box>
        <Box mr={1} onClick={(e) => handleClick(e, 'matrimonial')}>
          <IconSelector
            active={serviceActive === 'matrimonial'}
            svgComponent={<WeddingRings height='50%' width='50%' />}
            title='MATRIMONIAL SERVICES'
          />
        </Box>
        <Box mr={1} onClick={(e) => handleClick(e, 'funeral')}>
          <IconSelector
            active={serviceActive === 'funeral'}
            svgComponent={<Funeral height='50%' width='50%' />}
            title='FUNERAL SERVICES'
          />
        </Box>
        <Box mr={1} onClick={(e) => handleClick(e, 'interfaith')}>
          <IconSelector
            active={serviceActive === 'interfaith'}
            svgComponent={
              <Diversity1Icon
                sx={{ color: appPrimaryColor, height: '50%', width: '50%' }}
              />
            }
            title='INTERFAITH ADVOCACY'
          />
        </Box>
      </Stack>
      <ServicesAccordion
        expanded={expanded}
        handleChange={handleChange}
        onClick={handleClick}
        serviceActive={serviceActive}
        sx={{ mt: 2 }}
      />
    </>
  );
};

export default ServicesList;
