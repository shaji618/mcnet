import { FC } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MaterialLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import BodySubHeader from '@layout/BodySubheader';
import {
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR,
  PATHS
} from '@util/constants';

const InterfaithAdvocacyContent: FC = () => {
  return (
    <>
      <MaterialLink
        href='https://quran.com/49?startingVerse=13'
        rel='noreferrer'
        target='_blank'
      >
        <Typography
          color={APP_SECONDARY_COLOR}
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
        O men! Behold, We have created you all out of a male and a female, and
        have made you into nations and tribes, so that you might come to know
        one another. Verily, the noblest of you in the sight of God is the one
        who is most deeply conscious of Him. Behold, God is all-knowing,
        all-aware.
      </Typography>
      <Divider
        sx={{
          '&::before, &::after': {
            borderColor: APP_TERTIARY_COLOR
          },
          my: 2
        }}
      >
        <Chip
          label='The Holy Qurân: Surah Al-Hujurat, Verse 13'
          sx={{ backgroundColor: APP_SECONDARY_COLOR }}
        />
      </Divider>
      <BodySubHeader variant='h6'>MOSQUE ETIQUETTE</BodySubHeader>
      <Typography>
        MCNET is considered to be a house of God. Believers come here to connect
        themselves with God in a variety of ways. It is quite normal that their
        expressions are different, so please do not feel out of the place if
        this is your first visit to a mosque. The following are a few tips are
        noted to make you more comfortable:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>The Mosque</Typography>
              </TableCell>
              <TableCell>
                <Typography component='div'>
                  Although the term "mosque" is commonly and widely used to
                  describe the place where Muslims worship, Muslims often use
                  the term{' '}
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
                  Clothing is expected to be modest for both men and women. This
                  means an ankle-length skirt or trousers which should not be
                  tight fitting or translucent, along with a covering top. A
                  headscarf is usually expected for women, but it is optional
                  and not a deal-breaker for anyone.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Removal of footwear</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  In order to ensure cleanliness, anyone entering the prayer
                  hall is required to remove their shoes. Shoe racks are
                  conveniently located near the entrances of the prayer hall.
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
                <Typography component='div'>
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
                  if they have not already done so earlier or at home. This is
                  not necessary for non-Muslim visitors who do not wish to join
                  the prayer. Please don't stress if you see people rushing
                  towards to{' '}
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
                  Remove your shoes and enter the prayer hall quietly. Muslims
                  sit and pray on the floor in the prayer hall. Chairs are
                  available for visitors in the rear of the prayer hall. If you
                  are visiting with a group during a time when prayers are
                  taking place, please be seated together toward the rear of the
                  hall. During prayer or an ongoing sermon, quiet is expected;
                  if you need to talk or receive a phone call, please step
                  outside the prayer hall. Also, it is advisable not to walk in
                  front of the person who is praying.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight={700}>Worship</Typography>
              </TableCell>
              <TableCell>
                <Typography component='div'>
                  Visitors are welcome to observe prayers in progress. The
                  prayer generally lasts five to ten minutes and is led by the{' '}
                  <Typography component='div'>
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
                    <Typography component='div'>
                      The{' '}
                      <Box fontStyle='italic' display='inline'>
                        Imam
                      </Box>{' '}
                      leads the congregation from the front and faces towards
                      the direction of the{' '}
                      <MaterialLink
                        href='https://en.wikipedia.org/wiki/Kaaba'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <Box fontStyle='italic' display='inline'>
                          Ka'ba
                        </Box>
                      </MaterialLink>
                      , as does the rest of the congregation. The congregation
                      will form straight lines and act in unison during the
                      entire prayer and follow the motions of the{' '}
                      <Box fontStyle='italic' display='inline'>
                        Imam
                      </Box>
                      .
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component='div'>
                      The{' '}
                      <Box fontStyle='italic' display='inline'>
                        Imam
                      </Box>{' '}
                      recites some portions of the prayer loudly and some
                      portions silently. His recitations are short verses of the{' '}
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
                      progress, he or she should find a place near the rear wall
                      and quietly observe the prayer.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>
                      There will be multiple bows and prostrations throughout
                      the prayer.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component='div'>
                      There are no sacred or holy objects in the masjid, except
                      copies of the{' '}
                      <Box fontStyle='italic' display='inline'>
                        Qur'an
                      </Box>{' '}
                      on bookshelves along the side walls or elsewhere in the
                      prayer hall.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component='div'>
                      Muslims do not make sacred offerings or carry out blessing
                      of food during{' '}
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
                      The only gestures expected of visitors are to remove their
                      shoes, act respectfully in the prayer hall, and silently
                      observe the ritual of prayer.
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
                  The Community Halls are used for community gatherings and the
                  place where food is served. These areas are for socializing
                  and there are no requirements for removing shoes and remaining
                  quiet like in the prayer hall.
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderBottomColor: APP_TERTIARY_COLOR }}>
                <Typography fontWeight={700}>Free of Charge</Typography>
              </TableCell>
              <TableCell sx={{ borderBottomColor: APP_TERTIARY_COLOR }}>
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
        members for religious questions or for your research papers please don't
        hesitate to <Link to={PATHS.CONTACT_US_PAGE}>contact us</Link>!
      </Typography>
    </>
  );
};

export default InterfaithAdvocacyContent;
