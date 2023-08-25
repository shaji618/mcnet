import './Root.css';
import NavBar from './components/NavBar/NavBar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home-page';
import { About } from './pages/about-us-page';
import { Services } from './pages/services-page';
import { Programs } from './pages/programs-page';
import { SundaySchool } from './pages/sunday-school-page';
import { Contact } from './pages/contact-page';
import Footer from './components/Footer/Footer';

const Root = () => {
  return (
    <>
      <HashRouter>
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/programs' element={<Programs />} />
            <Route path='/sunday-school' element={<SundaySchool />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        //{' '}
      </HashRouter>
      <Footer />
    </>
  );
};

export default Root;
