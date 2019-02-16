import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../Layout/Card/Card";
import CardSection from "../../Layout/Card/CardSection";

const OuterBlock = styled.div`
  /* Max Characters: Title-18, Command-8, Icons-3 */
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 2rem;
    grid-template-areas: "left center right";
  }
  display: flex; /* IE 11 fallback */
  flex: auto; /* IE 11 fallback */
  align-items: center;
  text-align: center;
  justify-items: center;
`;
const LeftBlock = styled.div`
  grid-area: left;
  text-align: left;
  display: flex;
  /* display: ${props => (props.hide ? "none" : "flex")}; */
  @supports (display: grid) {
    padding-right: 0; /* disable fallback */
  }
  flex: 1 0 25%; /* IE 11 fallback */
  padding-right: 0.25rem; /* IE 11 fallback */
  justify-content: flex-start;
  > * {
    justify-content: space-between;
  }
  width: 100%;
  > * {
    margin: 0;
    @include ellipsis;
    align-items: center;
  }
  a > h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  > a:not(:first-of-type) > i {
    padding-left: 1.5rem;
  }
`;
const CenterBlock = styled.div`
  grid-area: center;
  text-align: center;
  padding: 0 0.5rem;
  display: flex;
  flex: 1 0 50%; /* IE 11 fallback */
  flex: auto; /* IE 11 fallback */
  justify-content: center;
  > * {
    justify-content: space-evenly;
  }
  width: 100%;
  > * {
    margin: 0;
    @include ellipsis;
    align-items: center;
  }
  a > h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  > a:not(:first-of-type) > i {
    padding-left: 1.5rem;
  }
`;
const RightBlock = styled.div`
  grid-area: right;
  text-align: right;
  display: flex;
  @supports (display: grid) {
    padding-left: 0; /* disable fallback */
  }
  flex: 1 0 25%; /* IE 11 fallback */
  padding-left: 0.25rem; /* IE 11 fallback */
  justify-content: flex-end;
  > * {
    justify-content: space-between;
  }
  width: 100%;
  > * {
    margin: 0;
    @include ellipsis;
    align-items: center;
  }
  a > h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  > a:not(:first-of-type) > i {
    padding-left: 1.5rem;
  }
`;

function NavBlock() {
  const [title, setTitle] = useState('Title Goes Here');
  const clickLeft = () => {
    setTitle(' Clicked Left ');
  };
  const clickRight = () => {
    setTitle(' Clicked Right ');
  };
  return (
    <Card>
      <CardSection>
        <OuterBlock>
          <LeftBlock hide>
            <a className="command-item" onClick={clickLeft}>
              <i className="command-icon fa fa-chevron-left" />
              <h6 className="command-name">Left</h6>
            </a>
          </LeftBlock>
          <CenterBlock>
            <h6>{title}</h6>
          </CenterBlock>
          <RightBlock>
            <div className="block-right">
              <a className="command-item align-right" onClick={clickRight}>
                <h6 className="command-name">Right</h6>
                <i className="command-icon fa fa-chevron-right" />
              </a>
            </div>
          </RightBlock>
        </OuterBlock>
      </CardSection>
    </Card>
  );
};

export default NavBlock;
