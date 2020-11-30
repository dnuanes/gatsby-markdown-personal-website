import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';
import WorkBanner from 'components/WorkBanner';

const WorkPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <WorkBanner />
      <Posts />
    </Layout>
  );
};

export default WorkPage;
