import ProgramSelectMenu from '../components/ProgramSelectMenu';
import Page from '../layout/Page';

export const Programs = () => {
  return (
    <Page headerBody='MCNET provides a number of classes and/or programs; please see below.' headerText='PROGRAMS'>
      <ProgramSelectMenu />
    </Page>
  );
};
