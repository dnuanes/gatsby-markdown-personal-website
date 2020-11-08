import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank"  href="https://www.linkedin.com/in/dnuanes/">
          LinkedIn
        </Styled.Link>
        <Styled.Link
          href="https://github.com/dnuanes"
          rel="noreferrer noopener"
          target="_blank"
        >
         Github
        </Styled.Link>
        {/* <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </Styled.Link> */}
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
