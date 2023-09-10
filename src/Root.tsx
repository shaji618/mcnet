import NavBar from './layout/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home-page';
import { AboutUs } from './pages/about-us-page';
import { Services } from './pages/services-page';
import { Programs } from './pages/programs-page';
import { SundaySchool } from './pages/sunday-school-page';
import { ContactUs } from './pages/contact-us-page';
import PreNavBar from './layout/PreNavBar';
import { JummahPrayers } from './pages/jummah-prayers-page';
import { UpcomingProjects } from './pages/upcoming-projects-page';
import Information from './pages/information-page';
import NotFoundPage from './pages/not-found-page';
import Footer from './layout/Footer';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <PreNavBar />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/information' element={<Information />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/sunday-school' element={<SundaySchool />} />
          <Route path='/jummah-prayers' element={<JummahPrayers />} />
          <Route path='/upcoming-projects' element={<UpcomingProjects />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Root;
