import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';



const Container = styled.div`
display:flex;
width: 10%;
flex-direction: ${props => (props.labelFirst ? 'row-reverse' : 'row')};
`

const Body = styled.body`
`

const Header = styled.header`
`

const Footer = styled.footer`
`


function Order () {
  return (
    <div>
        <Container labelFirst>
    <Header>Header </Header>
    <Body>Body</Body>
    <Footer>Footer</Footer>
    </Container>
    </div>
  );
}



export default Order;