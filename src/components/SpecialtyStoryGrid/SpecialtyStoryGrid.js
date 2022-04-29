import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper key={data.id}>
              <MiniStory key={data.id} {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --border: 1px solid var(--color-gray-300);
  display: grid;
  gap: 48px;
  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
    grid-template-columns: minmax(0px, auto);
  }
  @media ${QUERIES.desktopAndUp} {
    gap: 0;
    grid-template-columns: 1fr minmax(0px, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.desktopAndUp} {
    padding-right: 1rem;
    border-right: var(--border);
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 1rem;
  --min: min(200px, 100%);
  --max: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(var(--min), var(--max)));
`;

const SportsSection = styled.section`
  @media ${QUERIES.desktopAndUp} {
    padding-left: 1rem;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 1rem;
  --min: min(200px, 100%);
  --max: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(var(--min), var(--max)));
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    overflow: auto;
  }
`;

const MiniStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    /* width: 220px; won't work to force the width */
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
