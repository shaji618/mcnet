import { ReactElement, SyntheticEvent } from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import { AliasesCSSProperties } from '@mui/system/styleFunctionSx/AliasesCSSProperties';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import ChaplaincyContent from '@components/Services/ChaplaincyContent';
import FuneralContent from '@components/Services/FuneralContent';
import InterfaithAdvocacyContent from '@components/Services/InterfaithAdvocacyContent';
import MatrimonialContent from '@components/Services/MatrimonialContent';
import { Services } from '@components/Services/ServicesList';
import { SERVICE_TYPES } from '@util/constants';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

const ServicesAccordion = (props: {
  expanded: Services | false;
  handleChange: (
    panel: Services
  ) => (event: SyntheticEvent, newExpanded: boolean) => void;
  onClick: (event: React.MouseEvent<HTMLElement>, panel: Services) => void;
  serviceActive: Services | false;
  sx?: AliasesCSSProperties;
}): ReactElement => {
  const { expanded, handleChange, onClick, serviceActive, sx } = props;
  return (
    <Box sx={sx}>
      <Accordion
        expanded={serviceActive === SERVICE_TYPES.CHAPLAINCY}
        onChange={handleChange(SERVICE_TYPES.CHAPLAINCY)}
      >
        <AccordionSummary
          aria-controls='chaplaincyd-content'
          id='chaplaincyd-header'
          onClick={(e): void => onClick(e, SERVICE_TYPES.CHAPLAINCY)}
        >
          <Typography variant='h5'>Chaplaincy Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChaplaincyContent />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === SERVICE_TYPES.MATRIMONIAL}
        onChange={handleChange(SERVICE_TYPES.MATRIMONIAL)}
      >
        <AccordionSummary
          aria-controls='matrimoniald-content'
          id='matrimoniald-header'
          onClick={(e): void => onClick(e, SERVICE_TYPES.MATRIMONIAL)}
        >
          <Typography variant='h5'>Matrimonial Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MatrimonialContent />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === SERVICE_TYPES.FUNERAL}
        onChange={handleChange(SERVICE_TYPES.FUNERAL)}
      >
        <AccordionSummary
          aria-controls='funerald-content'
          id='funerald-header'
          onClick={(e): void => onClick(e, SERVICE_TYPES.FUNERAL)}
        >
          <Typography variant='h5'>Funeral Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FuneralContent />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === SERVICE_TYPES.INTERFAITH}
        onChange={handleChange(SERVICE_TYPES.INTERFAITH)}
      >
        <AccordionSummary
          aria-controls='interfaithd-content'
          id='interfaithd-header'
          onClick={(e): void => onClick(e, SERVICE_TYPES.INTERFAITH)}
        >
          <Typography variant='h5'>Interfaith Advocacy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InterfaithAdvocacyContent />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ServicesAccordion;
