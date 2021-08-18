import React from 'react';
import {
  DiFirebase,
  DiReact,
  DiJsBadge,
  DiCss3,
  DiHtml5,
  DiGit,
  DiBootstrap,
} from 'react-icons/di';
import {
  SiNextDotJs,
  SiStyledComponents,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
} from 'react-icons/si';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>React js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNextDotJs size='3rem' />
        <ListContainer>
          <ListTitle>Next js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size='3rem' />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span>
          <DiHtml5 size='3rem' />
          <DiCss3 size='3rem' />
        </span>
        <ListContainer>
          <ListTitle>Html & CSS3</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiStyledComponents size='3rem' />
        <ListContainer>
          <ListTitle>Styled components</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size='3rem' />
        <ListContainer>
          <ListTitle>Redux</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size='3rem' />
        <ListContainer>
          <ListTitle>Tailwind</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size='3rem' />
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size='3rem' />
        <ListContainer>
          <ListTitle>Git - github</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
