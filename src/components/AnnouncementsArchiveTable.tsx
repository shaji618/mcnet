import Typography from '@mui/material/Typography';
import ArchiveTable, { IRow } from '../layout/ArchiveTable';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import { appTertiaryColor } from '../util/constants';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';

const AnnouncementsArchiveTable = (props: { boxSx?: SxProps }) => {
  const rows: IRow[] = [
    {
      columnOneData: 'Eid 2023',
      columnTwoData: 'April 20, 2023',
      expand: {
        child: (
          <>
            <Typography>EID MUBARAK to all of you!</Typography>
            <Typography>
              AlhamduliLlaah! The new moon of Shawwaal has been sighted at
              several places in North America. Insha'Allaah EID-UL-FITR will be
              on Friday, April 21, 2023.
            </Typography>
            <Typography>
              Please read the following important announcements regarding Eid:
            </Typography>
            <List sx={{ ml: 2 }}>
              <ListItem>
                <Typography>
                  Eid Salat will be at 8:30 AM on Friday, April 21, 2023. Eid
                  Salat will be outside the Masjid in the Soccer field. Please
                  bring "Prayer Rug" with you and dress comfortably while
                  keeping in mind tomorrow's weather.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Please bring two breakfast dishes to share for "Potluck
                  Breakfast" after Eid Salat.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  We will also distribute Ice-Creams to the kids after Eid.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Insha'Allaah, the "Eid Potluck Dinner" will be on Sunday,
                  April 23, 2023 at Carver Park, 322 W. Watauga Avenue, Johnson
                  City, TN from 4:00 pm to 8:00 pm. Dinner will be at 6:00pm.
                  Please bring two dishes to share. We will have several
                  activities for the children which will include inflatables,
                  Balloons and Amusement Show. We will also have a booth for
                  family and portrait photos
                </Typography>
              </ListItem>
            </List>
            <Typography>BarakAllaaho Feekom</Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'Ramadan 2023',
      columnTwoData: 'September 9, 2023',
      expand: {
        child: (
          <>
            <Typography>
              Ramadan Mubarak!! The first day of Ramadan will be on Thursday
              03/23/2023 Insha'Allah.
            </Typography>
            <Typography>Assalamo Alaikum Dear Brothers and Sisters,</Typography>
            <Typography>
              Insha'Allaah the first day of fasting will be on Thursday, March
              23rd, 2023. We will have regular five-time daily Salah at the
              Masjid. The first Taraveeh prayer will be tomorrow (Wednesday,
              March 22nd) after Isha. May Allaah SobhanaHo wa Ta'alaa bless all
              of us during this blessed month and accept our fasting and our
              prayers.
            </Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'Eid 2022',
      columnTwoData: 'May 1, 2022',
      expand: {
        child: (
          <>
            <Typography>
              Eid will be on Monday 05-02-2022 and Salat at 8:00AM outside.
            </Typography>
            <Typography>
              Assalaamo Alaikum Dear Brothers and Sisters, There were no
              positive moon sighting reports anywhere throughout the United
              States. Therefore, Ramadan will complete its cycle of 30 days and
              Shawwal 1st (Eid-ul-Fitr) will be on Monday, May 2nd.
            </Typography>
            <Typography>We wish Eid Mubarak to all of you.</Typography>
            <Typography>
              Insha'Allaah we will perform the Eid Salat at 8:00 AM outside.
              Please do not forget to bring a prayer rug with you.
            </Typography>
            <Typography>
              Please bring two breakfast dishes with you (one for brothers and
              one for sisters). We will also have an ice-cream truck for the
              kids.
            </Typography>
            <Typography>May Allaah bless you all!</Typography>
            <Typography>BarakAllaaho Feekom,</Typography>
            <Typography>MCNET</Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'Ramadan 2022',
      columnTwoData: 'April 1, 2022',
      expand: {
        child: (
          <Typography>
            Ramadan Mubarak!! The first day of Ramadan is on Saturday 4/02/2021
            Insha'Allah.
          </Typography>
        )
      }
    },
    {
      columnOneData: 'Jumuah Salah - COVID19',
      columnTwoData: 'July 10, 2020',
      expand: {
        child: (
          <>
            <Typography>Assalamu Alaikom Dear brothers and sisters,</Typography>
            <Typography>
              CDC recommendedmeasures during masjid attendance to avoid an
              outbreak of COVID-19 in our community.
            </Typography>
            <Typography>These measures are the following, Please</Typography>
            <List sx={{ ml: 2 }}>
              <ListItem>
                <Typography>
                  Bring and wear your own mask at all times.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Make sure you have your Wudu at home & only use Masjid
                  bathrooms for emergency.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Place your shoes on the rack outside the Masjid. Do NOT enter
                  with shoes on.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Maintain social distancing of 6 feet at all times, even during
                  the salah.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Avoid hugging or shaking hands.</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Turn on the UV air cleaner when you enter the prayer hall and
                  turn it off after every one has left.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  No need to bring your own sajjadah as the masjid is been
                  disinfected by UV light prior to the salah.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  If there is no space in the prayer hall then you may use the
                  other rooms prepared for the salah and if those rooms are
                  occupied, we will not be able to accommodate you and please do
                  not join the prayer. For this reason we recommend you come
                  early to have a place.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  If you are feeling ill, have fever or coughing please do not
                  come to the masjid till you feel fully recovered with a week
                  of no symptoms.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Stay in your spot during the khutbah, salah and Sunnah
                  afterwards.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Children younger than 10 and elderly to avoid attending the
                  Salah.
                </Typography>
              </ListItem>
            </List>
            <Typography>
              We ask Allah SWT to protect us alland guide us to the right
              decision for our community.
            </Typography>
            <Typography>MCNET shura</Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'CoronaVirus Updates Info',
      columnTwoData: 'March 26, 2020',
      expand: {
        child: (
          <>
            <Typography>Assalamu Alaikom Dear brothers and sisters,</Typography>
            <Typography>
              We hope that you are all doing well and in good state of health
              and Eman insha'allah.
            </Typography>
            <Typography>
              Last few days we have witnessed more widespread infection in our
              region. Although this was totally expected, nevertheless it was
              something we were hoping to avoid. As such we will continue to
              suspend our Jumuah prayer as well as daily prayer till further
              notice. We will continue to give you weekly updates on shura
              decisions in regard to our prayers and rituals insha'allah.
            </Typography>
            <Typography>
              Brothers and sisters as Muslims, we are expected to follow the
              Sunnah of our beloved prophet Muhammad Sallalahu Alaihi Wa Sallam
              as he said "If you hear of an outbreak of plague in a land, do not
              enter it; but if the plague breaks out in a place while you are in
              it, do not leave that place."
            </Typography>
            <Typography>Sahih al-Bukhari 5728</Typography>
            <Typography fontFamily='Noto Sans Arabic, sans-serif'>
              حَدَّثَنَا حَفْصُ بْنُ عُمَرَ، حَدَّثَنَا شُعْبَةُ، قَالَ
              أَخْبَرَنِي حَبِيبُ بْنُ أَبِي ثَابِتٍ، قَالَ سَمِعْتُ
              إِبْرَاهِيمَ بْنَ سَعْدٍ، قَالَ سَمِعْتُ أُسَامَةَ بْنَ زَيْدٍ،
              يُحَدِّثُ سَعْدًا عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ "‏
              إِذَا سَمِعْتُمْ بِالطَّاعُونِ بِأَرْضٍ فَلاَ تَدْخُلُوهَا،
              وَإِذَا وَقَعَ بِأَرْضٍ وَأَنْتُمْ بِهَا فَلاَ تَخْرُجُوا مِنْهَا
              ‏"‏‏.‏ فَقُلْتُ أَنْتَ سَمِعْتَهُ يُحَدِّثُ سَعْدًا وَلاَ
              يُنْكِرُهُ قَالَ نَعَمْ‏.‏
            </Typography>
            <Typography>
              The guidelines that are practiced today by major health
              organizations are almost entirely inline with the teachings of our
              prophet Sallalahu Alaihi Wa Sallam.
            </Typography>
            <Typography>
              In addition to taking the necessary precautions, our beloved
              prophet sallalahu Alaihi Wa Sallam, taught that both blessings and
              trials are from Allah, and they are an opportunity to become
              closer to Him. He advised to seek Allah's protection in all
              matters, and then to accept His decree.
            </Typography>
            <Typography>
              One of the supplications he would say was, "In the name of Allah,
              Who with His Name nothing can cause harm in the earth nor in the
              heavens, and He is the All-Hearing, the All-Knowing".
            </Typography>
            <Typography>
              Messenger of Allah said: â€œHe who recites this supplication
              'Bismillahil-ladhi la yadurru ma'as-mihi shai'un fil-ardi wa la
              fis-sama'i, wa Huwas-Sami'ul-'Alim' three times every morning and
              evening nothing will harm him.'
            </Typography>
            <Typography>
              [Abu Dawud and At- Tirmidhi] Book 16, Hadith 50{' '}
            </Typography>
            <Typography>
              Here is a link, for a list of important Athkar/Supplications you
              can learn and recite in your daily lives{' '}
              <Link
                href='https://sunnah.com/riyadussaliheen/16'
                rel='noreferrer'
                target='_blank'
              >
                https://sunnah.com/riyadussaliheen/16
              </Link>
            </Typography>
            <Typography>
              We ask Allah SWT to protect our entire community and all
              communities around us and to preserve our health and well-being.
            </Typography>
            <Typography>Jazakum Allahu khairan,</Typography>
            <Typography>MCNET Shura</Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'Community Support',
      columnTwoData: 'March 23, 2020',
      expand: {
        child: (
          <>
            <Typography>
              {' '}
              Assalamu alaikum Dear brothers and sisters,
            </Typography>
            <Typography>
              The Messenger of Allah (ï·º) said, "The believers in their mutual
              kindness, compassion and sympathy are just like one body. When one
              of the limbs suffers, the whole body responds to it with
              wakefulness and fever".
            </Typography>
            <Typography fontFamily='Noto Sans Arabic, sans-serif'>
              حَدَّثَنَا أَبُو نُعَيْمٍ، حَدَّثَنَا زَكَرِيَّاءُ، عَنْ عَامِرٍ،
              قَالَ سَمِعْتُهُ يَقُولُ سَمِعْتُ النُّعْمَانَ بْنَ بَشِيرٍ،
              يَقُولُ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ "‏ تَرَى
              الْمُؤْمِنِينَ فِي تَرَاحُمِهِمْ وَتَوَادِّهِمْ وَتَعَاطُفِهِمْ
              كَمَثَلِ الْجَسَدِ إِذَا اشْتَكَى عُضْوًا تَدَاعَى لَهُ سَائِرُ
              جَسَدِهِ بِالسَّهَرِ وَالْحُمَّى ‏"‏‏.‏
            </Typography>
            <Typography>[ Al-Bukhari and Muslim] Book 1, Hadith 224</Typography>
            <Typography>
              In our community, if there are any brothers/sisters who may be
              affected by this pandemic financially due to job loss:
            </Typography>
            <Typography>
              Please email us back with your request and your personal
              information (name, phone number) and we will in sha Allah try our
              best to use all resources we have to assist you and your family.
            </Typography>
            <Typography>
              If you have any questions or require any assistance, please do not
              hesitate to contact us.
            </Typography>
            <Typography>
              We ask Allah SWT to preserve our health, cure the ill and turn
              this calamity into a blessing for our community and all
              communities around us.
            </Typography>
            <Typography>Jazakum Allahu khairan,</Typography>
            <Typography>MCNET</Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'CoronaVirus Jumuah - 20th March, 2020',
      columnTwoData: 'March 20, 2020',
      expand: {
        child: (
          <>
            <Typography>Assalamu Alaikom Dear brothers and sisters,</Typography>
            <Typography>
              We hope you and your families are doing well inshaâ€™allah.
            </Typography>
            <Typography>
              Although no new cases of coronavirus have been diagnosed, close to
              our region, over the last week (except for the one in Sullivan
              county) as of now, we need to assume that we will eventually have
              more cases in Tri-City region. As such, we will need to take all
              possible precautionary measures to avoid spread of infection in
              our community.
            </Typography>
            <Typography>
              Following the recommendations of the CDC, our local infectious
              disease specialists and our Islamic scholars permission,Â Shura
              has decided NOT to perform Salat Al-jumuah this coming Friday
              3/20/2020. We will provide weekly notice regarding future Jumuah
              prayers.
            </Typography>
            <Typography>
              We recommend all community members stay home as much as possible
              and avoid going out,Â especially to crowded areas, to avoid
              acquiring the disease. Our bi-weekly classes will also beÂ
              cancelled till further notice insha'allah.
            </Typography>
            <Typography>
              This is a time that we can spend with our families, listen to
              Quraan, do lots of Dhikr and an opportunity for learning from
              reliable Islamic online resources.
            </Typography>
            <Typography>
              As for daily prayers such as Fajr and Ishaa, we are still praying
              at the masjid as congregations are small and only younger people
              are attending. We however strongly encourage the following:
            </Typography>
            <List sx={{ ml: 2 }}>
              <ListItem>Only young and healthy people to attend.</ListItem>
              <ListItem>
                If you have any symptoms of cold and congestion, please stay at
                home till you fully recover.
              </ListItem>
              <ListItem>
                Make every effort to make Wudu (ablution) at home to avoid
                congestion in the bathroom area.
              </ListItem>
              <ListItem>
                Make your stay at the masjid short and try to leave as soon as
                prayer is over.
              </ListItem>
              <ListItem>
                Bring your own prayer rug as there are recent data suggesting
                the virus may stay alive for longer period on surfaces than
                thought originally.
              </ListItem>
              <ListItem>
                Bring hand sanitizer with you if you have one and wash your
                hands with soap and water frequently.
              </ListItem>
            </List>
            <Typography>
              We ask Allah SWT to preserve our health, cure the ill and turn
              this calamity into a blessing for our community and all
              communities around us.
            </Typography>
            <Typography>MCNET</Typography>
          </>
        )
      }
    },
    {
      columnOneData: 'CoronaVirus Elderly & Special Needs',
      columnTwoData: 'March 19, 2020',
      expand: {
        child: (
          <>
            <Typography>Assalamu Alaikom Dear brothers and sisters,</Typography>
            <Typography>
              With each calamity, Allah SWT brings wonderful opportunity for
              good deeds for people with good intentions. As we have been aware,
              the elderly have been strongly advised to stay home during this
              critical time and may not have the means to easily move outside.
            </Typography>
            <Typography>
              In our community, if there are any brothers/sisters who may be
              elderly and living alone that might require help and assistance
              with grocery shopping/medication pickup etc.
            </Typography>
            <Typography>
              Please email us back with your request and your personal
              information (name, phone number, address) and we will insha'allah
              try our best to use all resources we have to assist you and your
              family.
            </Typography>
            <Typography>
              If you have any questions or require any assistance, please do not
              hesitate to contact us.
            </Typography>
            <Typography>
              We ask Allah SWT to preserve our health, cure the ill and turn
              this calamity into a blessing for our community and all
              communities around us.
            </Typography>
            <Typography>MCNET</Typography>
          </>
        )
      }
    }
  ];

  return (
    <Box sx={{ ...props.boxSx }}>
      <Typography
        sx={{
          textAlign: 'center',
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '0.3em'
        }}
        variant='h4'
      >
        ANNOUNCEMENTS ARCHIVE
      </Typography>
      <ArchiveTable
        rows={rows}
        columnOneHeader={'Title'}
        columnTwoHeader={'Date'}
      />
    </Box>
  );
};

export default AnnouncementsArchiveTable;
