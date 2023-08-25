import { useState } from 'react';
import './AnnouncementsCard.css';
import { ReactComponent as Loudspeaker } from '../../assets/loudspeaker.svg';
import { ReactComponent as Microphone } from '../../assets/microphone.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';

interface CardStates {
  cardNumber: 'first' | 'second' | 'third';
}

const AnnouncementsCard = () => {
  const [announcementState, setAnnouncementState] = useState<CardStates>({
    cardNumber: 'first'
  });

  return (
    <div className='announcements-container'>
      <div className='announcements-flex-container'>
        <div
          className='announcement-card'
          onClick={() => setAnnouncementState({ cardNumber: 'first' })}
        >
          <div
            className={`icon announcement-header ${
              announcementState.cardNumber === 'first' ? 'active' : ''
            }`}
          >
            <div className='icon'>
              <Loudspeaker height='50px' width='50px' />
            </div>
            <div>ANNOUNCEMENTS</div>
          </div>
        </div>
        <div
          className='announcement-card'
          onClick={() => setAnnouncementState({ cardNumber: 'second' })}
        >
          <div
            className={`announcement-header ${
              announcementState.cardNumber === 'second' ? 'active' : ''
            }`}
          >
            <div className='icon'>
              <Microphone height='50px' width='50px' />
            </div>
            <div>PRESS RELEASES</div>
          </div>
        </div>
        <div
          className='announcement-card'
          onClick={() => setAnnouncementState({ cardNumber: 'third' })}
        >
          <div
            className={`icon announcement-header ${
              announcementState.cardNumber === 'third' ? 'active' : ''
            }`}
          >
            <div className='icon'>
              <Calendar height='50px' width='50px' />
            </div>
            <div>EVENTS</div>
          </div>
        </div>
      </div>
      <div className='announcement-card'>
        {announcementState.cardNumber === 'first' && (
          <div className='announcement-content'>
            <h3>Eid 2023</h3>
            <p>EID MUBARAK to all of you!</p>
            <p>
              AlhamduliLlaah! The new moon of Shawwaal has been sighted at
              several places in North America. Insha'Allaah EID-UL-FITR will be
              on Friday, April 21, 2023.
            </p>
            <p>
              Please read the following important announcements regarding Eid:
            </p>
            <ul>
              <li>
                Eid Salat will be at 8:30 AM on Friday, April 21, 2023. Eid
                Salat will be outside the Masjid in the Soccer field. Please
                bring "Prayer Rug" with you and dress comfortably while keeping
                in mind tomorrow's weather.
              </li>
              <li>
                Please bring two breakfast dishes to share for "Potluck
                Breakfast" after Eid Salat.
              </li>
              <li>We will also distribute Ice-Creams to the kids after Eid.</li>
              <li>
                Insha'Allaah, the "Eid Potluck Dinner" will be on Sunday, April
                23, 2023 at Carver Park, 322 W. Watauga Avenue, Johnson City, TN
                from 4:00 pm to 8:00 pm. Dinner will be at 6:00pm. Please bring
                two dishes to share. We will have several activities for the
                children which will include inflatables, Balloons and Amusement
                Show. We will also have a booth for family and portrait photos
              </li>
            </ul>
            <p>BarakAllaaho Feekom</p>
            <p>Posted on April 20, 2023 by MCNET</p>
          </div>
        )}
        {announcementState.cardNumber === 'second' && (
          <div className='announcement-content'>
            <h3>Islam Forbids Extremism</h3>
            <p>
              Anyone who is familiar with Islamic teachings knows very well that
              Islam forbids the killing of innocents.
            </p>
            <p>Allah says:</p>
            <p>
              Whosoever kills an innocent human being, it shall be as if he has
              killed all mankind, and whosoever saves the life of one, it shall
              be as if he had saved the life of all mankind.
            </p>
            <p>-- Qur'an 5:32</p>
            <p>Posted on April 2, 2018 by MCNET</p>
          </div>
        )}
        {announcementState.cardNumber === 'third' && (
          <div className='announcement-content'>
            <p>
              <b>January 1, 2023</b>
            </p>
            <p>There's a thing happening!</p>
            <p>Posted on August 22, 2023 by MCNET</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsCard;
