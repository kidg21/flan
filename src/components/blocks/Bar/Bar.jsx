import React, {Fragment} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Slot = styled.div`
display: flex;
`
const BarLayout = styled.div`
  align-items: flex;
  vertical-align: center;
  display: flex;
  font-weight:600;
  justify-content: space-between;
  padding: .5em 1.5em 0.5em .5em;
  // border-bottom: 0.25px solid #eaeded;
  // box-shadow: 0 0 0px rgba(0, 0, 0, 0.08);
`;


function Bar({ id, type, left, middle, right, onClick}) {
  let barType;
  switch (type) {
    case "one":
      barType = (
        <Fragment>
          <Slot>{left}</Slot>
        <Slot>{right}</Slot>
        </Fragment>
      )
      break;
    case "two":
      barType = (
        <Fragment>
        <Slot>
        {left}
        </Slot>
        <Slot>
        {right}
        </Slot>
        </Fragment>
      )
      break;
    case "three":
      barType = (
        <Fragment>
        <Slot>
            {left}
            </Slot>
            <Slot>
            {middle}
            </Slot>
             <Slot>
             {right}
             </Slot>
           </Fragment>
      );
      break;
   default:
      break;
      }
  return (
      <BarLayout
        id={id}
        type={type}
        left={left}
        middle={middle}
        right={right}
        onClick={onClick}
      >
          { barType }
      </BarLayout>
  );
}
Bar.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["one", "two", "three"]),
  left: PropTypes.any,
  middle: PropTypes.any,
  right: PropTypes.any,
  onClick: PropTypes.func
};

export default Bar;
