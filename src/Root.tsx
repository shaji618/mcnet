import NavBar from './layout/NavBar';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import { Home } from './pages/home-page';
import { AboutUs } from './pages/about-us-page';
import { Services } from './pages/services-page';
import { Programs } from './pages/programs-page';
import { SundaySchool } from './pages/sunday-school-page';
import { ContactUs } from './pages/contact-us-page';
import PreNavBar from './layout/PreNavBar';
import JummahPrayers from './pages/jummah-prayers-page';
import { UpcomingProjects } from './pages/upcoming-projects-page';
import Information from './pages/information-page';
import NotFoundPage from './pages/not-found-page';
import Footer from './layout/Footer';
import { PATHS } from './util/constants';
import ScrollToTop from './layout/ScrollToTop';
import { ReactElement } from 'react';

const Root = (): ReactElement => {
  return (
    <>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <BrowserRouter>
        <PreNavBar />
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={PATHS.INFORMATION_PAGE} element={<Information />} />
            <Route path={PATHS.ABOUT_US} element={<AboutUs />} />
            <Route path={PATHS.SERVICES_PAGE} element={<Services />} />
            <Route path={PATHS.PROGRAMS_PAGE} element={<Programs />} />
            <Route path={PATHS.SUNDAY_SCHOOL_PAGE} element={<SundaySchool />} />
            <Route
              path={PATHS.JUMMAH_PRAYERS_PAGE}
              element={<JummahPrayers />}
            />
            <Route
              path={PATHS.UPCOMING_PROJECTS_PAGE}
              element={<UpcomingProjects />}
            />
            <Route path={PATHS.CONTACT_US_PAGE} element={<ContactUs />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
      {/* </HashRouter> */}
    </>
  );
};

export default Root;
