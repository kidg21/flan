import React, { Fragment } from "react";
import styled from "styled-components";
import Icon from "atoms/Icon";
import PropTypes from "prop-types";
import Avatar from "atoms/Avatar";
import Title, { Description } from "base/Typography";


const StepItem = styled.li`
float: left;
display: flex;
align-items: baseline;
justify-content: left;
padding-left: 1rem;
padding: 0.5rem;
width: 100%;
color: ${(props) => { return props.active ? props.theme.palette.primary : props.isSelected ? props.theme.palette.secondary : props.theme.text.primary; }};
&:before {
    content: "Step " counter(step) ". ";
    counter-increment: step;
    padding-right: .5rem;
    font-weight: 600;
}

`;


const Container = styled.ul`
display: flex;
list-style: none;
counter-reset: step;
align-items: flex-start;
width: 100%;
justify-content: space-between;
z-index: 1;
${StepItem}:first-child {
    border-radius: 3rem 0 0 3rem;
    }};
  }
  ${StepItem}:last-child {
    border-radius: 0 3rem 3rem 0;
    }};
  }
    `;


const ItemContainer = styled.div`
display: flex;
flex-direction: column;
`;

// const mainContent = (
//     <React.Fragment>
//       <Title text={text} disabled={disabled} />
//       {description ? (<Description text={description} disabled={disabled} />
//       ) : null}
//     </React.Fragment>
//   );


function NewStep({
    id, active, text, description, isSelected,
}) {
    return (
        <StepItem active={active} isSelected={isSelected}>
            <ItemContainer>
                <Title text={text} />
                {description ? (<Description text={description} />
                ) : null}
            </ItemContainer>
        </StepItem >

    );
}


function NewProgressBar({
    id, children,
}) {
    return (
        <Container>
            {children}
        </Container>
    );
}

NewStep.propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool,
    text: PropTypes.string,
    isSelected: PropTypes.bool,
};

NewProgressBar.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
};

NewStep.defaultProps = {
    id: null,
    active: false,
    text: null,
    isSelected: false,
};

NewProgressBar.defaultProps = {
    id: null,
    children: null,
};

export { NewProgressBar as default, NewStep };
