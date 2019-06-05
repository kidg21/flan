import React, {Fragment} from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Left = styled.div`
display: flex;
`

const Middle = styled.div`
display: flex;
`

const Right = styled.div`
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





function Bar({ id, type, firstSlot, secondSlot, thirdSlot}) {
  let barType;
  switch (type) {
    case "one":
      barType = (
        <Fragment>
          <Left>{firstSlot}</Left>
        <Right>{secondSlot}</Right>
        </Fragment>
      )
      break;
    case "two":
      barType = (
        <Fragment>
        <Left>
        {firstSlot}
        </Left>
        <Right>
        {secondSlot}
        </Right>
        </Fragment>
      )
      break;
    case "three":
      barType = (
        <Fragment>
        <Left>
            {firstSlot}
            </Left>
            <Middle>
            {secondSlot}
            </Middle>
             <Right>
             {thirdSlot}
             </Right>
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
        firstSlot={firstSlot}
        secondSlot={secondSlot}
        thirdSlot={thirdSlot}
      >
          { barType }
      </BarLayout>
  );
}
Bar.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["one", "two", "three"]),
  firstSlot: PropTypes.any,
  secondSlot: PropTypes.any,
  thirdSlot: PropTypes.any
};

export default Bar;
