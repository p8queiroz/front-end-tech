import React from 'react';
import Helmet from 'react-helmet';
import Notebook from '../../components/Notebook';
import DetailLayout from '../../layout/DetailLayout';

const NotebookPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zen Sou: Afirmações Positivas</title>
      </Helmet>
      <DetailLayout alignItems="flex-start" justifyContent="center" data-testid="notebook-page">
        <Notebook />
      </DetailLayout>
    </>
  );
};

export default NotebookPage;
