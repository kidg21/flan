import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, shadows } from "../../base/Variables/Variables";

const StandardCheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
  align-items: inherit;
`;

const StandardCheckboxInput = styled.input.attrs({ type: "checkbox" })`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey_40};
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  -webkit-appearance: none;
  &:checked {
    background-color: ${colors.success};
    box-shadow: ${shadows.checkedShadow};
  }
  &:focus {
    outline: none;
  }
`;

const StandardCheckboxLabel = styled.label`
  user-select: none;
  font-size: small;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.25rem;
  cursor: pointer;
`;

const StandardCheckbox = ({ checked, ...props }) => (
  <StandardCheckboxContainer>
    <StandardCheckboxInput id={props.id} checked={checked} {...props} />
    <StandardCheckboxLabel for={props.id}>{props.label}</StandardCheckboxLabel>
  </StandardCheckboxContainer>
);

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? "salmon" : "papayawhip")}
  border-radius: 3px;
  transition: all 150ms;
  
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

// class Trial extends React.Component {
//     // state = { checked: false }
//     // handleCheckboxChange = event =>
//     //   this.setState({ checked: event.target.checked })
//     // render() {
//       return (
//         <div>
//           <label>
//             <Checkbox
//               checked={this.state.checked}
//               onChange={this.handleCheckboxChange}
//             />
//             <span>Label Text</span>
//           </label>
//         </div>
//       )
//     }
//   }

//   export default Trial;

const Trial = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = event => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <span style={{ marginLeft: 8, fontSize: 14, fontFamily: "arial" }}>
          Label Text
        </span>
      </label>
    </div>
  );
};

StandardCheckbox.defaultProps = {
  id: "1",
  label: "Checkbox Label"
  // right: "Right Command"
};

StandardCheckbox.propTypes = {
  /** This is the Left nav command. */
  id: PropTypes.string,
  /** This is nav Title.  It is required. */
  label: PropTypes.string.isRequired
  /** This is the Right nav command. */
  // right: PropTypes.string
};

export default Trial;
export { StandardCheckbox };
