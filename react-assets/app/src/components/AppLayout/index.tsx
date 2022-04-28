import React from 'react';
import GeneralLayout from '../../layout/GeneralLayout';
import { AppBarComponentBottom, AppBarComponentTop } from '../AppBar';
import LayoutProvider from './context/LayoutProvider';

const AppLayout: React.FC = ({ children }) => {
  return (
    <LayoutProvider>
      <GeneralLayout>
        <AppBarComponentTop />
        <AppBarComponentBottom />
        <GeneralLayout.Content>
          <>{children}</>
        </GeneralLayout.Content>
      </GeneralLayout>
    </LayoutProvider>
  );
};

export default AppLayout;
