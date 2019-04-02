import React, { useState } from "react";
import styled from 'styled-components';
 

const SwitchContainer = styled.div`
position: relative;
display: inline-block;
vertical-align: middle;
`
const HiddenSwitch = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`


const Circle = styled.div`
  position: absolute;
  z-index: 1;
  background: ${props => props.checked ? 'white' : 'white'}
  border: ${props => props.checked ? '1px solid #75ab3f' : '1px solid darkgray'};
  border-radius: 40px;
  width: 15px;
  line-height: normal;
  height: 15px;
  transition: transform 300ms ease-in-out;
  transform: ${props => props.checked ? 'translateX(14px)' : 'translateX(0px)'}; 

`



const StyledSwitch = styled.div`
  width: 30px;
  display: block;
  vertical-align: center;
  height: 17px;
  border-radius: 20px;
  border: ${props => props.checked ? '1px solid #94d850' : '1px solid darkgray'};
  background-image: ${props => props.checked ? 'linear-gradient(#75ab3f, #94d850);' : 'white'};
  transition: .4s ease;
  cursor: pointer;
  
`

// const Fill = styled.div`
//   display:inline-block;
//   position:relative;
//   padding:20px;
//   cursor:pointer;
//   background:#e1e1e1;  
//   color:white; 
//   z-index:0;

// &:before {
//   content: "";
//   position: absolute;
//   z-index:-1;
//   top: 0;  left: 0;  right: 0;  bottom: 0;
//   background: #2098d1;
//   transform: scaleX(0);
//   transform-origin: 0 50%;
//   transition: transform .3s ease-out;
// }

// &:hover:before{
//   transform: scaleX(1);
// }
// `

 


const Switch = ({ className, checked, ...props }) => (
  <SwitchContainer className={className}>
    <HiddenSwitch checked={checked} {...props} />
    <StyledSwitch checked={checked}>
    <Circle checked={checked} {...props}/>
    </StyledSwitch>
  </SwitchContainer>
)


const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);
};
return(
  <div>
    <label>
        <Switch
        checked={checked}
        onChange={handleCheckboxChange}
        >
        </Switch>
        </label>
         </div>
      );
    };
   
  export default Toggle;