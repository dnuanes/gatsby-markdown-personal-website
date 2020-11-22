import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import MeetBanner from 'components/MeetBanner';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

const ExperiencePage: React.FC = () => (
  <Layout>
    <SEO title="Meet" />
    <MeetBanner />
    <Experience />
    <hr />
    <Education />
    {/* <hr />
    <Skills /> */}
  </Layout>
);

export default ExperiencePage;
