import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../util/constants';
import { ReactElement } from 'react';

const MCNETHistory = (): ReactElement => {
  return (
    <>
      <Typography>
        The Muslim Community of North Eastern Tennessee (MCNET) traces its
        origin to 1984. You might not remember that the first Apple Macintosh
        personal computer and 24/7 coverage of cable TV was introduced that
        year. American universities also started to expand, establishing
        computer science and other technical disciplines, enticing many foreign
        students. Even the US Diplomatic relationship with Muslim countries was
        strengthened by offering student exchange programs in these areas. In
        response to that academic growth, five Muslim graduate students came to{' '}
        <Link href='https://www.etsu.edu/' rel='noreferrer' target='_blank'>
          Eastern Tennessee State University (ETSU)
        </Link>
        . Among them: Khalid Badamere, Syed Badamere and Faisal Badamere were
        from Iraq; Br. Jalal was from Iran; Dr. Anwar was from Syria;
        Additionally, Br. Ahmed Atiya, recently graduated from the University of
        Memphis came to Johnson City with to begin his first job as a
        pharmacist.
      </Typography>
      <Typography mt={2}>
        The locals knew very little of Islam or Muslims; the presence of any
        <Box fontStyle='italic' display='inline'>
          should
        </Box>{' '}
        have been out of question. Such unfamiliarity was not unusual in the{' '}
        <Link
          href='https://en.wikipedia.org/wiki/Bible_Belt'
          rel='noreferrer'
          target='_blank'
        >
          Bible Belt
        </Link>
        , but the lives of those young Muslim students became unthinkable
        without a mosque. So they started renting an apartment on Greenwood
        Drive, Johnson City, Tennessee for $50 to use as a temporary space for
        their Friday prayers, kick-starting the unofficial establishment of
        MCNET.
      </Typography>
      <Typography mt={2}>
        As more Muslim students enrolled in ETSU, it became a fertile campus for
        the local MSA (Muslim Student Association) chapter. Some of the
        obligatory Islamic activities (e.g. Ramadan prayers and{' '}
        <Box fontStyle='italic' display='inline'>
          <Link
            href='https://en.wikipedia.org/wiki/Iftar'
            rel='noreferrer'
            target='_blank'
          >
            Iftar
          </Link>
        </Box>
        ), Eid celebrations or facilitating charity for the community, were
        organized by the MSA, but they were confined to a small and shared room
        located in ETSU's Mathematics building. All the while, those early
        pioneers had were growing their families. The presence of{' '}
        <Link href='https://www.etsu.edu/com/' rel='noreferrer' target='_blank'>
          Quillen College of Medicine
        </Link>
        , one of the two state-sponsored residency programs in Tennessee, also
        welcomed several Muslim medical professional families. Occasional events
        at MSA failed to fulfill the comprehensive role of religion in their
        lives. For Muslims, faith is the primary facet to shape their families
        by encompassing all events from birth to marriage to funeral ceremony;
        the necessity of a mosque became vital.
      </Typography>
      <Typography mt={2}>
        These Muslim families did not come to make a quick fortune and return to
        their home country but to settle down in Johnson City. Playing an active
        role in society through their professions and having children enrolled
        in local schools fostered a quick assimilation into the city's culture.
        Yet they felt incomplete without the active presence of faith. So, some
        of the local Muslims proactively took the responsibility of establishing
        a mosque to bring the blessing of faith to the community. In addition to
        the early pioneers, Dr. Fazle Nasim Khan, Taneem Aziz, Atif Atyia, and
        Ahemed Wattad joined the effort. The first constitution plan was drafted
        by Dr. Khan; MCNET was officially established as a non-profit faith
        organization in Washington County of Johnson City in 1992. Thus, without
        any physical address, an Islamic center continued to develop quietly and
        formally. Participation grew quickly from 8-10 people to over 75
        brothers and sisters. A Sunday school for children was also established
        in the same small room. During the holidays from ETSU, Eid and/or Friday
        prayer services took place in the basement of Br. Ahmed Atiya or in the
        racquetball court of his apartment complex. Different programs were
        undertaken to comprehensively ingrain faith into people's lives.
      </Typography>
      <Typography mt={2}>
        As Muslim community continued to grow, they lost their temporary place,
        as the shared, small room was demolished to construct a parking lot. The
        community answered the call with commitment and sincerity; none of the
        activities stopped, as they raised $8k within two days, totalling $14K
        in funding to allow the of purchase their first prayer hall on Division
        Street in Johnson City in 1994. This hall was only 700 square feet, not
        enough to accommodate the growing community. It was renovated and
        redesigned to a new footprint of 1400 square feet, consisting of
        separate prayer space for men and women and 2 class rooms for Sunday
        school. It became MCNET's home base to expand its programs and community
        outreach in the Tri-Cities area until 2008.
      </Typography>
      <Typography mt={2}>
        After 9/11, other faith groups and neighbors confirmed their solidarity
        with the local Muslim community. They invited MCNET leaders to talk on
        behalf of the Muslims and Islam to increase their familiarity. With
        joint collaboration, interfaith engagement became a day-to-day event.
        Additionally, MCNET strives to embrace faith more spontaneously to
        individual piety for communal prosperity. They proactively worked on a
        larger vision for the community and purchased a property of three acres
        on the Antioch Road in 1997.
      </Typography>
      <Typography mt={2}>
        With due diligence, adjacent lands were acquired, making today's campus
        a total of eight acres. Although they planned to build a multi-purpose
        community center of 3400 square feet, the growth of the community
        obliged them to commit to building a 9600-square-foot structure. Call it
        a divine blessing or merely coincidence, but the financial commitments
        for this unexpected expansion were met by its members in a very short
        time. The construction of the new facility began with only $116K, but
        the remaining necessary funds totaling $600K were raised within only six
        months. There were several anonymous donations up to $30K, not from any
        organization with preset agendas, but from local individuals and
        visitors. People contributed generously only to help the faith flourish
        within their families and future generations.
      </Typography>
      <Typography mt={2}>
        Today, MCNET provides year-round services for more than 500 local
        Muslims. New and existing programs continuously widen its outreach and
        evangelizes the teaching of sharing, sacrificing and standing by not
        only for the community or country, but for all of humanity. See our
        programs <NavLink to={PATHS.PROGRAMS_PAGE}>here</NavLink>.
      </Typography>
    </>
  );
};

export default MCNETHistory;
