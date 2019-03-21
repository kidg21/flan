import React from "react";
import styled, {css} from 'styled-components';
import Icon from "../Icon/Icon";


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
const successProps = {
    nameProp: ["fas", "check"],
    colorProp: "white",
};

const warningProps = {
    nameProp: ["fas", "exclamation"],
    colorProp: "white",
};

const errorProps = {
    nameProp: ["fas", "times"],
    colorProp: "white",
};

const infoProps = {
    nameProp: ["fas", "info"],
    colorProp: "white",
};


function IconBadge() {
    return (
            <BadgeContainer>
                <Icon {...successProps}/>
            </BadgeContainer>
    )
  }


export default IconBadge;