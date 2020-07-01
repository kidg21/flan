/* eslint-disable security/detect-object-injection */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useRef, useMemo } from "react";
import PropTypes from "prop-types";
import Bar from "layout/Bar";
import Text from "base/Typography";
import Button from "atoms/Button";
import Grid from "layout/Grid";
import TextInput from "atoms/TextInput";
import Icon from "atoms/Icon";
import styled from "styled-components";
import List, { ListItem } from "blocks/List";
import { getGuid } from "helpers";
import ResultContainer from "./Results.jsx";

// const SearchContainer = styled.div`


const Box1 = styled.div`
background-color: yellow;
position: relative;
min-width: 22rem;
height: max-content;
`;

const Box2 = styled.div`
background-color: blue;
top: 3.6rem;
left: 1.5rem;
min-width: 22.2rem;
position: fixed;
height: 5rem;
`;

const FlexDiv = styled.div`
display: block;
`;




function Dummy({

}) {


  return (
          <Box1><TextInput/>
          <Box2>dkfjs</Box2>
          </Box1>
  );
}



export default Dummy;
