import React from 'react';
import Helmet from 'react-helmet';
import DetailLayout from '../../layout/DetailLayout';
import DashboardNew from '../../components/Dashboard';

const DashboardPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zen Life: Dashboard</title>
      </Helmet>
      <DetailLayout>
        <DashboardNew />
      </DetailLayout>
    </>
  );
};

export default DashboardPage;
