import { FC } from 'react';

import ProgramSelectMenu from '@components/programs/ProgramSelectMenu';
import Page from '@layout/Page';

export const Programs: FC = () => {
  return (
    <Page
      headerBody='MCNET provides a number of classes and/or programs; please see below.'
      headerText='PROGRAMS'
    >
      <ProgramSelectMenu />
    </Page>
  );
};
