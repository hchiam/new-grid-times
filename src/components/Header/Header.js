import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroupRight>
            <button>
              <User size={24} />
            </button>
          </ActionGroupRight>
          <ActionGroupRightDesktop>
            <Button>SUBSCRIBE</Button>
            <a href="/">Already a subscriber?</a>
          </ActionGroupRightDesktop>
        </Row>
      </SuperHeader>
      <MainHeader>
        <StyledLogo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media screen and ${QUERIES.laptopAndUp} {
    position: absolute;
    top: 48px;
    width: 100%;
    background: transparent;
    color: var(--color-offblack);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    THIS IS A FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    /* display: block; */
  }
`;

const ActionGroupRight = styled(ActionGroup)`
  @media screen and ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const ActionGroupRightDesktop = styled(ActionGroup)`
  display: none;
  @media screen and ${QUERIES.laptopAndUp} {
    /* display: revert; */
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: center;
    position: relative;
    a {
      position: absolute;
      top: calc(100% + 8px);
      font-style: italic;
      text-decoration: underline;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media screen and ${QUERIES.laptopAndUp} {
    pointer-events: none;
  }
`;

const StyledLogo = styled(Logo)`
  @media screen and ${QUERIES.laptopAndUp} {
    pointer-events: auto;
  }
`;

export default Header;
