import AnnouncementsArchiveTable from '../components/AnnouncementsArchiveTable';
import PressReleasesArchiveTable from '../components/PressReleasesArchiveTable';
import Page from '../layout/Page';
import { HashLink } from 'react-router-hash-link';

export const Information = () => {
  return (
    <Page
      headerBody={
        <HashLink smooth to='/information#press-releases'>
          Click here to jump to see press releases .
        </HashLink>
      }
      headerText='INFORMATION'
    >
      <AnnouncementsArchiveTable boxSx={{ mb: 2 }} />
      <PressReleasesArchiveTable />
    </Page>
  );
};

export default Information;
