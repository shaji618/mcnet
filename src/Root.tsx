import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';

import MosqueStatus from '@components/MosqueStatus';
import Footer from '@layout/Footer';
import NavBar from '@layout/NavBar';
import PreNavBar from '@layout/PreNavBar';
import ScrollToTop from '@layout/ScrollToTop';
import { AboutUs } from '@pages/about-us-page';
import { ContactUs } from '@pages/contact-us-page';
import { Home } from '@pages/home-page';
import Information from '@pages/information-page';
import JummahPrayers from '@pages/jummah-prayers-page';
import NotFoundPage from '@pages/not-found-page';
import { Programs } from '@pages/programs-page';
import { Services } from '@pages/services-page';
import { SundaySchool } from '@pages/sunday-school-page';
import { UpcomingProjects } from '@pages/upcoming-projects-page';
import { PATHS } from '@util/constants';

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
            <Route path={PATHS.STATUS_PAGE} element={<MosqueStatus />} />
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
