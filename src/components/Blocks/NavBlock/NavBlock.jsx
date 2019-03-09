import React, { createContext, useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors, shadows } from "../../base/Variables/Variables";
// import colors from "../../base/Colors";

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
  padding: .25rem 1rem;
  box-shadow: ${shadows.dropShadow};
  ${props =>
    (props.dark ||
      props.greyDark ||
      props.anchor ||
      props.success ||
      props.warning ||
      props.alert) &&
    css`
      color: ${colors.grey_light};
      box-shadow: ${shadows.lightBorderShadow};
      a {
        color: ${colors.grey_light};
      }
    `}
  ${(
    // 'Dark' background
    props
  ) =>
    props.dark &&
    css`
      ${"" /* background-color: ${colors.grey_dark}; */}
      background-color: ${props => colors.grey_dark};
    `}
  ${(
    // 'Dark Grey' background
    props
  ) =>
    props.greyDark &&
    css`
      background-color: ${colors.grey_60};
    `}
  ${(
    // 'Anchor' background
    props
  ) =>
    props.anchor &&
    css`
      background-color: ${colors.anchor};
    `}
  ${(
    // 'Success' background
    props
  ) =>
    props.success &&
    css`
      background-color: ${colors.success};
    `}
  ${(
    // 'Warning' background
    props
  ) =>
    props.warning &&
    css`
      background-color: ${colors.warning};
    `}
  ${(
    // 'Alert' background
    props
  ) =>
    props.alert &&
    css`
      background-color: ${colors.alert};
    `}
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
    /* @include ellipsis; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    margin: 0;
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
    /* @include ellipsis; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    margin: 0;
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
    /* @include ellipsis; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    margin: 0;
  }
  > a:not(:first-of-type) > i {
    padding-left: 1.5rem;
  }
`;

const NavTitle = createContext();
const LeftCommand = createContext();
const RightCommand = createContext();

function NavBlock(props) {
  const title = useContext(NavTitle);
  const left = useContext(LeftCommand);
  const right = useContext(RightCommand);
  // const [title, setTitle] = useState("Title Goes Here");
  // const [left, setLeft] = useState(props.left);
  // const [title, setTitle] = useState(props.title);
  // const [right, setRight] = useState(props.right);
  // const [title, setTitle] = useState('Welcome to React Hooks');
  // useEffect(() => {
  //   setTitle(" useEffect Hook In Effect ");
  // });
  const clickLeft = () => {
    // setTitle(" Clicked Left ");
  };
  const clickTitle = () => {
    // setTitle(" Title Goes Here ");
  };
  const clickRight = () => {
    // setTitle(" Clicked Right ");
  };
  return (
    <React.Fragment>
      <OuterBlock dark>
        <LeftBlock hide>
          <a className="command-item" onClick={clickLeft}>
            {/* <i className="command-icon fa fa-chevron-left" /> */}
            {/* <FontAwesomeIcon icon="chevron-left" /> */}
            {/* The following is equivalent to the one above */}
            {/* <FontAwesomeIcon icon={["fas", "chevron-left"]} />
              <FontAwesomeIcon icon={["fal", "chevron-left"]} />
              <FontAwesomeIcon icon={["fab", "apple"]} />
              <FontAwesomeIcon icon={["fal", "acorn"]} size="2x" />
              <FontAwesomeIcon icon={["fal", "boxing-glove"]} size="lg" />
              <FontAwesomeIcon icon={["far", "boxing-glove"]} size="lg" />
              <FontAwesomeIcon icon={["fas", "boxing-glove"]} size="lg" /> */}
            {/* <h6 className="command-name">{props.left}</h6> */}
            <h6 className="command-name">{left}</h6>
          </a>
        </LeftBlock>
        <CenterBlock>
          {/* <h5 onClick={clickTitle}>{title}</h5> */}
          <h5>{title}</h5>
          {/* <h5>{value}</h5> */}
          {/* <h5 id="title">{props.title}</h5> */}
          {/* <h5 id="title">This is a functional Component</h5> */}
        </CenterBlock>
        <RightBlock>
          <div className="block-right">
            <a className="command-item align-right" onClick={clickRight}>
              {/* <h6 className="command-name">Right</h6> */}
              {/* <h6 className="command-name">{props.right}</h6> */}
              <h6 className="command-name">{right}</h6>
              {/* <i className="command-icon fa fa-chevron-right" /> */}
              {/* <FontAwesomeIcon icon="chevron-right" />
                <FontAwesomeIcon icon={["fas", "chevron-right"]} />
                <FontAwesomeIcon icon={["fal", "chevron-right"]} />
                <FontAwesomeIcon icon={["far", "bell"]} />
                <FontAwesomeIcon icon={["far", "bookmark"]} />
                <FontAwesomeIcon icon={["far", "code"]} />
                <FontAwesomeIcon icon={["far", "highlighter"]} /> */}
            </a>
          </div>
        </RightBlock>
      </OuterBlock>
    </React.Fragment>
  );
}

NavBlock.defaultProps = {
  left: "Left Command",
  title: "This Is The Default Title",
  right: "Right Command"
};

NavBlock.propTypes = {
  /** This is the Left nav command. */
  left: PropTypes.string,
  /** This is nav Title.  It is required. */
  title: PropTypes.string.isRequired,
  /** This is the Right nav command. */
  right: PropTypes.string
};

export default NavBlock;
// export { value, NavTitle };
export { NavTitle, LeftCommand, RightCommand };
