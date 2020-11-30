import React from 'react';
import PropTypes from 'prop-types';


import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const WorkIntro = ({ title, subtitle, content,}) => (
  <Styled.WorkIntro>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>    
    </Container>
  </Styled.WorkIntro>
);

WorkIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  
};

export default WorkIntro;
