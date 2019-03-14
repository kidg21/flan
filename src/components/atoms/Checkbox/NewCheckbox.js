import React, {useState} from 'react';
import styled, { css } from 'styled-components';

export const Checkbox = () => {
const colors = ["green", "blue"];
const boxColors=colors.length;

const [color, setColor] = useState("green");

const changeColor = () => {
    const index = Math.floor(Math.random() * boxColors);
    const pickedColor = colors[index];
    setColor(pickedColor);
};
    return (
  <div
  style={{ backgroundColor: color}}>
    <h2 style={{color: 'white'}}>will this work </h2>    
    <br/>
    <h2 onClick={changeColor}>maybe</h2>
  </div>
  );
 };

 export default Checkbox;