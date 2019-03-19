import React, { useState } from "react";
import styled, {css} from 'styled-components';


const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
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
`

const StyledRadio = styled.div`
  display: inline-block;
  width: 14px;
  border: 1px solid darkgray;
  height: 14px;
  background: ${props => props.checked ? 'dodgerblue' : 'white'}
  border-radius: 30px;
  transition: all 150ms;
  cursor: pointer;

`


const Radio = ({ className, checked, ...props }) => (
  <RadioContainer className={className}>
    <HiddenRadio checked={checked} {...props} />
    <StyledRadio checked={checked} />
  </RadioContainer>
)

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
return(
<div>
<label>
<Radio 
    checked={checked}
    onChange={handleCheckboxChange}
/>
<span style={{ marginLeft: 8, fontSize: 14, fontFamily: 'arial' }}>Label Text</span>
</label>
</div>
);
};

export default Trial;