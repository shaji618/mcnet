import { FC, ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Funeral } from '@assets/svg-icons/funeral.svg';
import { ReactComponent as PrayerHands } from '@assets/svg-icons/prayerHands.svg';
import { ReactComponent as WeddingRings } from '@assets/svg-icons/wedding.svg';
import ServicesAccordion from '@components/services/ServicesAccordion';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  SERVICE_TYPES
} from '@util/constants';

export type Services = (typeof SERVICE_TYPES)[keyof typeof SERVICE_TYPES];

type IconSelectorProps = {
  active?: boolean;
  svgComponent: ReactNode;
  title: string;
};

const IconSelector: FC<IconSelectorProps> = ({
  active,
  svgComponent,
  title
}) => {
  return (
    <Stack>
      <Avatar
        className={active ? 'active' : ''}
        sx={{
          border: `1px solid ${APP_PRIMARY_COLOR}`,
          borderRadius: '50%',
          height: 150,
          width: 150,
          margin: '0 auto',
          '&:hover': {
            backgroundColor: APP_SECONDARY_COLOR,
            cursor: 'pointer'
          },
          '&.active': {
            backgroundColor: APP_SECONDARY_COLOR
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

const ServicesList: FC = () => {
  const { hash } = useLocation();

  const [serviceActive, setServiceActive] = useState<Services | false>(
    SERVICE_TYPES.CHAPLAINCY
  );

  useEffect(() => {
    if (hash) {
      setServiceActive(hash.replace('#', ''));
    }
  }, [hash]);

  const handleChange =
    (panel: Services) =>
    (
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      event: SyntheticEvent
    ) => {
      setServiceActive(serviceActive !== panel ? panel : false);
    };

  const handleClick = (
    // @ts-ignore
    event: React.MouseEvent<HTMLElement>,
    panel: Services
  ): void => {
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname);
    }

    setServiceActive(serviceActive !== panel ? panel : false);
  };

  return (
    <>
      <Stack
        direction='row'
        mt={2}
        spacing={14}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
        justifyContent='center'
      >
        <Box
          mr={1}
          onClick={(e): void => handleClick(e, SERVICE_TYPES.CHAPLAINCY)}
        >
          <IconSelector
            active={serviceActive === SERVICE_TYPES.CHAPLAINCY}
            svgComponent={<PrayerHands height='50%' width='50%' />}
            title='CHAPLAINCY'
          />
        </Box>
        <Box
          mr={1}
          onClick={(e): void => handleClick(e, SERVICE_TYPES.MATRIMONIAL)}
        >
          <IconSelector
            active={serviceActive === SERVICE_TYPES.MATRIMONIAL}
            svgComponent={<WeddingRings height='50%' width='50%' />}
            title='MATRIMONIAL SERVICES'
          />
        </Box>
        <Box
          mr={1}
          onClick={(e): void => handleClick(e, SERVICE_TYPES.FUNERAL)}
        >
          <IconSelector
            active={serviceActive === SERVICE_TYPES.FUNERAL}
            svgComponent={<Funeral height='50%' width='50%' />}
            title='FUNERAL SERVICES'
          />
        </Box>
        <Box
          mr={1}
          onClick={(e): void => handleClick(e, SERVICE_TYPES.INTERFAITH)}
        >
          <IconSelector
            active={serviceActive === SERVICE_TYPES.INTERFAITH}
            svgComponent={
              <Diversity1Icon
                sx={{ color: APP_PRIMARY_COLOR, height: '50%', width: '50%' }}
              />
            }
            title='INTERFAITH ADVOCACY'
          />
        </Box>
      </Stack>
      <ServicesAccordion
        handleChange={handleChange}
        onClick={handleClick}
        serviceActive={serviceActive}
        sx={{ mt: 2 }}
      />
    </>
  );
};

export default ServicesList;
