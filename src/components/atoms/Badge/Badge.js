import React from "react";
import styled, {css} from 'styled-components';



const BadgeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 2em;
    height: 2em;
    border-radius: 20px;
    padding: 2px;
    background: #75ab3f;
    color: white;
`

const Message = styled.h1`
margin: 0;
font-size: 12px;
display:flex;
align-self: center;
font-weight: bold;
`

function Badge({message}) {
    return (
            <BadgeContainer>
                <Message>{message}</Message>
            </BadgeContainer>
    )
  }


export default Badge;