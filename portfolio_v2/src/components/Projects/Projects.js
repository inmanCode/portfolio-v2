import React from 'react';
import Tilt from 'react-tilt';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({
          id,
          image,
          title,
          description,
          tags,
          source,
          visit,
          deployed,
          noVid,
        }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>{' '}
            <Tilt className='Tilt'>
              <CardInfo>{description}</CardInfo>{' '}
            </Tilt>
            <div>
              <TitleContent>Tech</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>{' '}
              <UtilityList>
                <ExternalLinks href={source} target='_blank'>
                  Code
                </ExternalLinks>
                {!noVid ? (
                  <ExternalLinks href={visit} target='_blank'>
                    {deployed ? `${deployed}` : 'Demo'}
                  </ExternalLinks>
                ) : null}
              </UtilityList>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
