import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Icon from "atoms/Icon";
import Switch from "atoms/Switch";
import IconBlock from "blocks/IconBlock";

// style={{ fontFamily: "arial", fontWeight: 400, fontSize: "12px" }}

// const blockStyle = {
//   width: "60px",
//   color: "lightgrey"
// };

// const LayerStyle = {
//   flex: "auto",
//   paddingLeft: "1.5em"
// };

const Left = styled.div`
display: flex;
`

const Middle = styled.div`
display: flex;
`

const Right = styled.div`
display: flex;
`


// const LayerLeft = styled.div`
//   display: flex;
// `;

/////Navigation consts
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





function Bar({ id, onePart, twoParts, threeParts, firstSlot, secondSlot, thirdSlot}) {
  return (
      <BarLayout
        id={id}
        firstSlot={firstSlot}
        onePart={onePart}
        twoParts={twoParts}
        threeParts={threeParts}
        secondSlot={secondSlot}
        thirdSlot={thirdSlot}
      >
          { onePart ? <Left>{firstSlot}</Left>: 
          twoParts ? (
            <Left>
            {firstSlot}
            </Left>
          ) : threeParts ? (
            <Left>
            {firstSlot}
            </Left>
          ) : null}
        { threeParts ? (
          <Middle>
            {secondSlot}
            </Middle>
          ) : null}
        { onePart ? <Right>{secondSlot}</Right> :
        threeParts ? (
          <Right>
          {thirdSlot}
          </Right>
        ) : twoParts ? (
          <Right>
          {secondSlot}
          </Right>
        ) : null}
      </BarLayout>
  );
}
Bar.propTypes = {
  id: PropTypes.string,
  onePart: PropTypes.bool,
  twoParts: PropTypes.bool,
  threeParts: PropTypes.bool,
  firstSlot: PropTypes.any,
  secondSlot: PropTypes.any,
  thirdSlot: PropTypes.any
};

export default Bar;
