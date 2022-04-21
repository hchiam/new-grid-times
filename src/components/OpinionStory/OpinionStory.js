import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <InfoWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </InfoWrapper>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  grid-template: "InfoWrapper Avatar";
  grid-template-columns: 1fr auto;

  display: grid;
  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
  @media ${QUERIES.laptopAndUp} {
    display: grid;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: Avatar;

  margin-left: 1rem;
  @media ${QUERIES.tabletAndUp} {
    margin-left: revert;
  }
  @media ${QUERIES.laptopAndUp} {
    margin-left: 1rem;
  }
`;

const InfoWrapper = styled.div`
  grid-area: InfoWrapper;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
