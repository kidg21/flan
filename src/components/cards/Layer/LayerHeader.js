import React from "react"
import styled, { css } from "styled-components"
import propTypes from "prop-types"
import Icon from "base/Icons"
import Results from "../../atoms/Label/Results"

const Container = styled.div`
  display: flex;
  line-height: 2;
  justify-content: flex-end;
  padding-right: 0.7em;
  padding-top: 5px;
`

const HeaderLayout = styled.div`
  align-items: flex-end;
  font-size: 20px;
  display: grid;
  padding: .25em .6em .8em .8em;
  border-bottom: 0.25px solid #EAEDED;
  grid-template-columns: 10% 70% 20%;

  grid-template-rows: 2rem;
  grid-template-areas: "left center right";
  box-shadow: 0 0 0px rgba(0, 0, 0, .08);
}
 `

const Left = styled.div`
  justify-content: flex-start;
  grid-area: left;
  display: flex;
  cursor: pointer;
`

const CardTitle = styled.div`
  justify-content: left;
  align-self: text-bottom;
  grid-area: center;
  display: inline;
`

const Right = styled.div`
  justify-content: flex-end;
  line-height: normal;
  vertial-align: bottom;
  grid-area: right;
  display: flex;
  cursor: pointer;
`

const defaultProps = {
  navProps: { nameProp: ["far", "angle-left"], colorProp: "dimgray" },
  iconProps: { nameProp: ["far", "ellipsis-v"], colorProp: "dimgray" },
  numberProp: { resultsProp: "0" },
  exitProps: { nameProp: ["fal", "times"], colorProp: "dimgray" }
}

const LayerHeader = ({ title, layer, ...props }) => {
  return (
    <div>
      <Container>
        <Icon {...props.exitProps} />
      </Container>
      <HeaderLayout>
        <Left>
          <Icon {...props.navProps} />
        </Left>
        <CardTitle>
          <h4 style={{ margin: 0 }}>{title}</h4>
        </CardTitle>
        <Right>
          <Icon {...props.iconProps} />
        </Right>
      </HeaderLayout>
    </div>
  )
}

LayerHeader.defaultProps = defaultProps
export default LayerHeader