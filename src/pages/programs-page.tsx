import { ReactElement } from 'react';
import ProgramSelectMenu from '../components/Programs/ProgramSelectMenu';
import Page from '../layout/Page';

export const Programs = (): ReactElement => {
  return (
    <Page
      headerBody='MCNET provides a number of classes and/or programs; please see below.'
      headerText='PROGRAMS'
    >
      <ProgramSelectMenu />
    </Page>
  );
};
