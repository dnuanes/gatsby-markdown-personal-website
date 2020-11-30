import React from 'react';
import PropTypes from 'prop-types';


import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const MeetIntro = ({ title, subtitle, content,}) => (
  <Styled.MeetIntro>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>    
    </Container>
  </Styled.MeetIntro>
);

MeetIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  
};

export default MeetIntro;
