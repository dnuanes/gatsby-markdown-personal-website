import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';

const WorkPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <Posts />
    </Layout>
  );
};

export default WorkPage;
