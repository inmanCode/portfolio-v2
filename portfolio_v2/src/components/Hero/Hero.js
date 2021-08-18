import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
        <br />
        My name is Aymane.
      </SectionTitle>
      <SectionText>
        I am a front-end developer, living in Italy, I enjoy building beautiful
        & functional websites, learning and looking for challenges everyday.
        <br />
        <q>To know is to know that you know nothing.</q> - Socrates -
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
