import { useState } from 'react';
import './ProgramsEducationOverview.css';
import { ReactComponent as Youth } from '../../assets/chaplain.svg'; // Placeholders
import { ReactComponent as Adult } from '../../assets/chaplain.svg';
import { ReactComponent as Sister } from '../../assets/chaplain.svg';
import { ReactComponent as Event } from '../../assets/calendar.svg';
import { ReactComponent as WeekendQuran } from '../../assets/chaplain.svg';
import { ReactComponent as ISNET } from '../../assets/chaplain.svg';
import { ReactComponent as Other } from '../../assets/chaplain.svg';



const ProgramsOverview = () => {
  const [programChoice, setProgramChoice] = useState<
    'youth' | 'adult' | 'sister' | 'event' | 'weekend-quran' | 'isnet' | 'other'
  >('youth');

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          textDecoration: 'underline #ffdd40 3px',
          textUnderlineOffset: '10px'
        }}
      >
        MCNET PROGRAMS & EDUCATION
      </h1>
      <p style={{ textAlign: 'center' }}>
        MCNET <i>programs and education</i>
      </p>
      <div id='programs-container'>
        <div id='programs-icons-container'>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('youth')}
          >
            <Youth height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'youth' ? 'active' : ''
              }`}
            >
              YOUTH PROGRAM
            </div>
          </div>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('adult')}
          >
            <Adult height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'adult' ? 'active' : ''
              }`}
            >
              ADULT PROGRAM
            </div>
          </div>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('sister')}
          >
            <Sister height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'sister' ? 'active' : ''
              }`}
            >
              SISTER(S) PROGRAM
            </div>
          </div>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('event')}
          >
            <Event height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'event' ? 'active' : ''
              }`}
            >
              EVENTS (??)
            </div>
          </div>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('weekend-quran')}
          >
            <WeekendQuran height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'weekend-quran' ? 'active' : ''
              }`}
            >
              WEEKEND QURAN CLASS
            </div>
          </div>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('isnet')}
          >
            <ISNET height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'isnet' ? 'active' : ''
              }`}
            >
              ISNET PROGRAM
            </div>
          </div>
          <div
            className='program-icon'
            onClick={() => setProgramChoice('other')}
          >
            <Other height='150px' width='150px' />
            <div
              className={`program-icon-header ${
                programChoice === 'other' ? 'active' : ''
              }`}
            >
              OTHER CLASSES
            </div>
          </div>
        </div>
        <div id='program-content'>
          {programChoice === 'youth' && (
            <>
              <h2>YOUTH PROGRAM</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
          {programChoice === 'adult' && (
            <>
              <h2>ADULT PROGRAM</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
          {programChoice === 'sister' && (
            <>
              <h2>SISTER(S) PROGRAM</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
          {programChoice === 'event' && (
            <>
              <h2>EVENTS</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
          {programChoice === 'weekend-quran' && (
            <>
              <h2>WEEKEND QURAN CLASS</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
          {programChoice === 'isnet' && (
            <>
              <h2>ISNET PROGRAM</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
          {programChoice === 'other' && (
            <>
              <h2>OTHER CLASSES</h2>
              <p>
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler filler filler filler filler filler filler
                filler filler filler filler filler filler.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgramsOverview;
