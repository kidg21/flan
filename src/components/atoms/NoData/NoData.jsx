import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "Variables";
import SmallNoData from "./SmallNoData.png";


const image = {
    src: SmallNoData,
    alt: 'NoDataFound',
    maxWidth: '30px',
    maxHeight: '30px'
};


const Container = styled.div`
display: inline-block;
`

function NoData({id}) {
return (
    <Container
    id={id}>
<img src={image.src} alt={image.alt}/>
    </Container>
);
}

export default NoData;