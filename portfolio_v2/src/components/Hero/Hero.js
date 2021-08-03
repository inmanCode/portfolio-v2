import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>lorem ipsum dolor sit amet, consectetur</SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://www.youtube.com/watch?v=OPaLnMw2i_0')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
