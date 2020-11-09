import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import RegBanner from 'components/ResBanner';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <RegBanner />
    <Experience />
    <hr />
    <Education />
    {/* <hr />
    <Skills /> */}
  </Layout>
);

export default ResumePage;
