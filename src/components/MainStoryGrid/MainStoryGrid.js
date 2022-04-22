import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --border: 1px solid var(--color-gray-300);
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 1rem;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 1fr 30vw;
    gap: 0 1px;
    background: var(--color-gray-300);
    > * {
      background: var(--color-gray-100);
      &:first-child {
        padding-right: 1rem;
      }
      &:nth-child(2) {
        padding-left: 1rem;
      }
    }
  }
  @media ${QUERIES.laptopAndUp} {
    background: revert;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 5fr 4fr 3fr;
    gap: 0 1px;
    > * {
      &:first-child {
        border-right: var(--border);
      }
      &:nth-child(2) {
        padding-right: 1rem;
        border-right: var(--border);
        margin-bottom: 1rem;
      }
      &:nth-child(3) {
        padding-left: 1rem;
        margin-top: -0.5rem;
      }
      &:nth-child(4) {
        margin-left: 1rem;
      }
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--color-gray-300);
  margin-bottom: 1rem;
  > * {
    background: var(--color-gray-100);
    flex: 1;
    &:not(:last-child) {
      padding-bottom: 1rem;
    }
    &:not(:first-child) {
      padding-top: 1rem;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  ${StoryList} {
    @media ${QUERIES.tabletOnly} {
      background: revert;
      flex-direction: row;
      gap: 1rem;
      > * {
        padding: 0 !important;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 1rem;
  }
`;

export default MainStoryGrid;
