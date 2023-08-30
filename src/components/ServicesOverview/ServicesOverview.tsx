import React, { useState } from 'react';
import './ServicesOverview.css';
import { ReactComponent as Chaplain } from '../../assets/chaplain.svg';
import { ReactComponent as Funeral } from '../../assets/funeral.svg';
import { ReactComponent as Wedding } from '../../assets/wedding.svg';

const ServicesOverview = () => {
  const [serviceChoice, setServiceChoice] = useState<
    'chaplain' | 'funeral' | 'wedding'
  >('chaplain');

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          textDecoration: 'underline #ffdd40 3px',
          textUnderlineOffset: '10px'
        }}
      >
        MCNET SERVICES
      </h1>
      <p style={{ textAlign: 'center' }}>
        MCNET provides a number of services for our <i>Ummah</i>. Please see
        below for further information.
      </p>
      <div id='services-container'>
        <div id='services-icons-container'>
          <div
            className='service-icon'
            onClick={() => setServiceChoice('chaplain')}
          >
            <Chaplain height='150px' width='150px' />
            <div
              className={`service-icon-header ${
                serviceChoice === 'chaplain' ? 'active' : ''
              }`}
            >
              CHAPLAINCY
            </div>
          </div>
          <div
            className='service-icon'
            onClick={() => setServiceChoice('funeral')}
          >
            <Funeral height='150px' width='150px' />
            <div
              className={`service-icon-header ${
                serviceChoice === 'funeral' ? 'active' : ''
              }`}
            >
              FUNERAL SERVICES
            </div>
          </div>
          <div
            className='service-icon'
            onClick={() => setServiceChoice('wedding')}
          >
            <Wedding height='150px' width='150px' />
            <div
              className={`service-icon-header ${
                serviceChoice === 'wedding' ? 'active' : ''
              }`}
            >
              MATRIMONIAL SERVICES
            </div>
          </div>
        </div>
        <div id='services-content'>
          {serviceChoice === 'chaplain' && (
            <>
              <h2>CHAPLAINCY SERVICES</h2>
              <p>
                If you need assistance with your spiritual needs, please contact
                the local hospital chaplain and ask for a Muslim chaplain. If
                they do not have a Muslim chaplain, then<a> contact MCNET</a>{' '}
                for assistance.
              </p>
            </>
          )}
          {serviceChoice === 'funeral' && (
            <>
              <h2>FUNERAL SERVICES</h2>
              <a href='https://quran.com/50?startingVerse=43' target='_blank'>
                <h3 style={{ textAlign: 'center' }}>
                  إِنَّا نَحْنُ نُحْىِۦ وَنُمِيتُ وَإِلَيْنَا ٱلْمَصِيرُ
                </h3>
                <h3 style={{ textAlign: 'center' }}>
                  Verily it is we who give life and death; and to us is the
                  final goal.
                </h3>
                <h3 style={{ textAlign: 'center' }}>The Holy Qurân 50:43</h3>
              </a>
              <p>Dear brother or sister,</p>
              <p>
                We are deeply sorry for the loss of your beloved family member.
                We ask Allah SWT to forgive his or her sins and grant him or her
                paradise insha'allah.
              </p>
              <p>
                To contact the MCNET Funeral Services to schedule and/ or
                accommodate a funeral, please contact one of the following
                people:
              </p>
              <ul>
                <li>Br. Dr. Ahmad Atiya: (423) 426-3133</li>
                <li>Br. Dr. Shahram Malik: (423) 737-5478</li>
              </ul>
              <p>MCNET can assist with the following funeral needs:</p>
              <ul>
                <li>
                  Inform the community about the loss; ask for duas and Janazah
                  prayer timing
                </li>
                <li>
                  Help coordinate or assist with washing of the deceased (family
                  members are welcome to assist as well)
                </li>
                <li>
                  Provide <i>kafan</i> (burial shroud), if needed
                </li>
                <li>
                  Arrange the <i>salaatul janazah</i> (funeral prayer) at the
                  masjid
                </li>
                <li>
                  Assist at the cemetery with the rituals or duaa and burial
                </li>
                <li>
                  Continue to follow-up after the funeral if the family needs
                  any assistance
                </li>
              </ul>
            </>
          )}
          {serviceChoice === 'wedding' && (
            <>
              <h2>MATRIMONIAL SERVICES</h2>
              <h3>MCNET Marriage Procedure</h3>
              <p>
                Congratulations on your upcoming wedding! Your decision to marry
                is a spiritual covenant that is rooted in a commitment for one
                another. A wedding is always a joyous event, and as such we are
                much honored that youâ€™ve chosen us to share the occasion!
              </p>
              <p>
                If you would like to be married at MCNET or request an MCNET
                Imam to officiate your wedding ceremony, please contact MCNET at
                (423)975-6681.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ServicesOverview;
