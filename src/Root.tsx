import NavBar from './layout/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home-page';
import { About } from './pages/about-page';
import { Services } from './pages/services-page';
import { Programs } from './pages/programs-page';
import { SundaySchool } from './pages/sunday-school-page';
import { Contact } from './pages/contact-page';
import PreNavBar from './layout/PreNavBar';
import { JummahPrayers } from './pages/jummah-prayers-page';
import { UpcomingProjects } from './pages/upcoming-projects-page';
import { Archive } from './pages/archive-page';
import NotFoundPage from './pages/not-found-page';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <PreNavBar />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/sunday-school' element={<SundaySchool />} />
          <Route path='/jummah-prayers' element={<JummahPrayers />} />
          <Route path='/upcoming-projects' element={<UpcomingProjects />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
