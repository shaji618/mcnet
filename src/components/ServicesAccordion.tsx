import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AliasesCSSProperties } from '@mui/system/styleFunctionSx/AliasesCSSProperties';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { appSecondaryColor, appTertiaryColor } from '../util/constants';
import { SyntheticEvent } from 'react';
import { Services } from './ServicesList';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
}) => {
  const { expanded, handleChange, onClick, serviceActive, sx } = props;
  return (
    <Box sx={sx}>
      <Accordion
        expanded={serviceActive === 'chaplaincy'}
        onChange={handleChange('chaplaincy')}
      >
        <AccordionSummary
          aria-controls='chaplaincyd-content'
          id='chaplaincyd-header'
          onClick={(e) => onClick(e, 'chaplaincy')}
        >
          <Typography variant='h5'>Chaplaincy Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you need assistance with your spiritual needs, please contact the
            local hospital chaplain and ask for a Muslim chaplain. If they do
            not have a Muslim chaplain, then{' '}
            <Link to='/contact'>contact MCNET</Link> for assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'matrimonial'}
        onChange={handleChange('matrimonial')}
      >
        <AccordionSummary
          aria-controls='matrimoniald-content'
          id='matrimoniald-header'
          onClick={(e) => onClick(e, 'matrimonial')}
        >
          <Typography variant='h5'>Matrimonial Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Congratulations on your upcoming wedding! Your decision to marry is
            a spiritual covenant that is rooted in a commitment for one another.
            A wedding is always a joyous event, and as such we are much honored
            that you've chosen us to share the occasion!
          </Typography>
          <Typography>
            If you would like to be married at MCNET or request an MCNET Imam to
            officiate your wedding ceremony, please{' '}
            <Link to='/contact'>contact MCNET</Link> at (423)975-6681.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'funeral'}
        onChange={handleChange('funeral')}
      >
        <AccordionSummary
          aria-controls='funerald-content'
          id='funerald-header'
          onClick={(e) => onClick(e, 'funeral')}
        >
          <Typography variant='h5'>Funeral Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialLink
            href='https://quran.com/50?startingVerse=43'
            rel='noreferrer'
            target='_blank'
          >
            <Typography
              color={appSecondaryColor}
              fontFamily='Noto Sans Arabic, sans-serif'
              fontSize='30px'
              fontWeight='900'
              textAlign='center'
            >
              إِنَّا نَحْنُ نُحْىِۦ وَنُمِيتُ وَإِلَيْنَا ٱلْمَصِيرُ
            </Typography>
          </MaterialLink>
          <Typography mt={1} textAlign='center'>
            Verily, it is We who give life and death, and to Us is the final
            goal.
          </Typography>
          <Divider
            sx={{
              '&::before, &::after': {
                borderColor: appTertiaryColor
              },
              my: 2
            }}
          >
            <Chip
              label='The Holy Qurân: Surah Qaf, Verse 43'
              sx={{ backgroundColor: appSecondaryColor }}
            />
          </Divider>
          <Typography mb={2}>Dear brother or sister,</Typography>
          <Typography>
            We are deeply sorry for the loss of your beloved family member. We
            ask Allah SWT to forgive his or her sins and grant him or her
            paradise insha'allah.
          </Typography>
          <Typography>
            To schedule and/ or accommodate a funeral, please{' '}
            <Link to='/contact'>contact MCNET</Link> or one of the following
            people:
          </Typography>
          <List sx={{ ml: 2 }}>
            <ListItem>
              <Typography>Br. Dr. Ahmad Atiya: (423) 426-3133</Typography>
            </ListItem>
            <ListItem>
              <Typography>Br. Dr. Shahram Malik: (423) 737-5478</Typography>
            </ListItem>
          </List>
          <Typography>
            MCNET can assist with the following funeral needs:
          </Typography>
          <List sx={{ ml: 2 }}>
            <ListItem>
              <Typography>
                Inform the community about the loss; ask for duas and Janazah
                prayer timing
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Help coordinate or assist with washing of the deceased (family
                members are welcome to assist as well)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Provide{' '}
                <Box fontStyle='italic' display='inline'>
                  kafan
                </Box>{' '}
                (burial shroud), if needed
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Arrange the{' '}
                <Box fontStyle='italic' display='inline'>
                  salaatul janazah
                </Box>{' '}
                (funeral prayer) at the masjid
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Assist at the cemetery with the rituals or duaa and burial
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Continue to follow-up after the funeral if the family needs any
                assistance
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'interfaith'}
        onChange={handleChange('interfaith')}
      >
        <AccordionSummary
          aria-controls='interfaithd-content'
          id='interfaithd-header'
          onClick={(e) => onClick(e, 'interfaith')}
        >
          <Typography variant='h5'>Interfaith Advocacy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialLink
            href='https://quran.com/49?startingVerse=13'
            rel='noreferrer'
            target='_blank'
          >
            <Typography
              color={appSecondaryColor}
              fontFamily='Noto Sans Arabic, sans-serif'
              fontSize='30px'
              fontWeight='900'
              textAlign='center'
            >
              يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَـٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ
              وَجَعَلْنَـٰكُمْ شُعُوبًۭا وَقَبَآئِلَ لِتَعَارَفُوٓا۟ ۚ إِنَّ
              أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ ۚ إِنَّ ٱللَّهَ عَلِيمٌ
              خَبِيرٌۭ
            </Typography>
          </MaterialLink>
          <Typography mt={1} textAlign='center'>
            O men! Behold, We have created you all out of a male and a female,
            and have made you into nations and tribes, so that you might come to
            know one another. Verily, the noblest of you in the sight of God is
            the one who is most deeply conscious of Him. Behold, God is
            all-knowing, all-aware.
          </Typography>
          <Divider
            sx={{
              '&::before, &::after': {
                borderColor: appTertiaryColor
              },
              my: 2
            }}
          >
            <Chip
              label='The Holy Qurân: Surah Al-Hujurat, Verse 13'
              sx={{ backgroundColor: appSecondaryColor }}
            />
          </Divider>
          <Typography
            sx={{
              mb: 2,
              textAlign: 'center',
              textDecoration: `underline ${appTertiaryColor} 1px`,
              textUnderlineOffset: '0.3em'
            }}
            variant='h6'
          >
            MOSQUE ETIQUETTE
          </Typography>
          <Typography>
            MCNET is considered to be a house of God. Believers come here to
            connect themselves with God in a variety of ways. It is quite normal
            that their expressions are different, so please do not feel out of
            the place if this is your first visit to a mosque. The following are
            a few tips are noted to make you more comfortable:
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>The Mosque</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Although the term "mosque" is commonly and widely used to
                      describe the place where Muslims worship, Muslims often
                      use the term{' '}
                      <Box fontStyle='italic' display='inline'>
                        Masjid
                      </Box>
                      , the Arabic word for mosque.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>Clothing</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Clothing is expected to be modest for both men and women.
                      This means an ankle-length skirt or trousers which should
                      not be tight fitting or translucent, along with a covering
                      top. A headscarf is usually expected for women, but it is
                      optional and not a deal-breaker for anyone.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>
                      Removal of footwear
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      In order to ensure cleanliness, anyone entering the prayer
                      hall is required to remove their shoes. Shoe racks are
                      conveniently located near the entrances of the prayer
                      hall.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>
                      Separate seating for men and women
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Men and women usually pray separately. To make this more
                      convenient, there are separate entrances to the men's and
                      women's prayer halls.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>Ablution</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      In order to pray, Muslim men and women perform{' '}
                      <MaterialLink
                        href='https://en.wikipedia.org/wiki/Wudu'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <Box fontStyle='italic' display='inline'>
                          wudhu
                        </Box>
                      </MaterialLink>{' '}
                      if they have not already done so earlier or at home. This
                      is not necessary for non-Muslim visitors who do not wish
                      to join the prayer. Please don't stress if you see people
                      rushing towards to{' '}
                      <Box fontStyle='italic' display='inline'>
                        wudhu
                      </Box>{' '}
                      or ablution area to catch the prayer service on time!
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>The Prayer Hall</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Remove your shoes and enter the prayer hall quietly.
                      Muslims sit and pray on the floor in the prayer hall.
                      Chairs are available for visitors in the rear of the
                      prayer hall. If you are visiting with a group during a
                      time when prayers are taking place, please be seated
                      together toward the rear of the hall. During prayer or an
                      ongoing sermon, quiet is expected; if you need to talk or
                      receive a phone call, please step outside the prayer hall.
                      Also, it is advisable not to walk in front of the person
                      who is praying.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>Worship</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Visitors are welcome to observe prayers in progress. The
                      prayer generally lasts five to ten minutes and is led by
                      the{' '}
                      <Typography>
                        <MaterialLink
                          href='https://en.wikipedia.org/wiki/Imam'
                          rel='noreferrer'
                          target='_blank'
                        >
                          <Box fontStyle='italic' display='inline'>
                            Imam
                          </Box>
                        </MaterialLink>
                        . A few distinct notes:
                      </Typography>
                    </Typography>
                    <List sx={{ ml: 2 }}>
                      <ListItem>
                        <Typography>
                          The{' '}
                          <Box fontStyle='italic' display='inline'>
                            Imam
                          </Box>{' '}
                          leads the congregation from the front and faces
                          towards the direction of the{' '}
                          <MaterialLink
                            href='https://en.wikipedia.org/wiki/Kaaba'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <Box fontStyle='italic' display='inline'>
                              Ka'ba
                            </Box>
                          </MaterialLink>
                          , as does the rest of the congregation. The
                          congregation will form straight lines and act in
                          unison during the entire prayer and follow the motions
                          of the{' '}
                          <Box fontStyle='italic' display='inline'>
                            Imam
                          </Box>
                          .
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>
                          The{' '}
                          <Box fontStyle='italic' display='inline'>
                            Imam
                          </Box>{' '}
                          recites some portions of the prayer loudly and some
                          portions silently. His recitations are short verses of
                          the{' '}
                          <MaterialLink
                            href='https://en.wikipedia.org/wiki/Quran'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <Box fontStyle='italic' display='inline'>
                              Qur'an
                            </Box>
                          </MaterialLink>
                          , but the rest of the congregation follows his actions
                          silently. If a visitor arrives when the prayer is in
                          progress, he or she should find a place near the rear
                          wall and quietly observe the prayer.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>
                          There will be multiple bows and prostrations
                          throughout the prayer.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>
                          There are no sacred or holy objects in the masjid,
                          except copies of the{' '}
                          <Box fontStyle='italic' display='inline'>
                            Qur'an
                          </Box>{' '}
                          on bookshelves along the side walls or elsewhere in
                          the prayer hall.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>
                          Muslims do not make sacred offerings or carry out
                          blessing of food during{' '}
                          <MaterialLink
                            href='https://en.wikipedia.org/wiki/Salah'
                            rel='noreferrer'
                            target='_blank'
                          >
                            <Box fontStyle='italic' display='inline'>
                              salat
                            </Box>
                          </MaterialLink>
                          .
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography>
                          The only gestures expected of visitors are to remove
                          their shoes, act respectfully in the prayer hall, and
                          silently observe the ritual of prayer.
                        </Typography>
                      </ListItem>
                    </List>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography fontWeight={700}>Community Halls</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      The Community Halls are used for community gatherings and
                      the place where food is served. These areas are for
                      socializing and there are no requirements for removing
                      shoes and remaining quiet like in the prayer hall.
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottomColor: appTertiaryColor }}>
                    <Typography fontWeight={700}>Free of Charge</Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottomColor: appTertiaryColor }}>
                    <Typography>
                      The no cost to enter the mosque, but{' '}
                      <Link to=''>donations</Link> are highly appreciated.
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography mt={2}>
            If you would like to attend an event or want to talk to our board
            members for religious questions or for your research papers please
            don't hesitate to <Link to='/contact'>contact us</Link>!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ServicesAccordion;
