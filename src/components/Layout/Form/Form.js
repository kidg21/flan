import React from 'react'
import styled from 'styled-components'
//import Button from './Button/NewButton'


const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  max-width: 800px;
  text-align: center;
  border: 1px solid #ddd;
  padding-top: 0px;
  padding-bottom: 10px;
  color: black;
  background: white;
`;

const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.5em;
  color: black;
  background-color: white;
`;


const Input = styled.input`
  font-size: 1.45em;
  border: 1px solid #ddd;
`;


  export default class SignupForm extends React.Component {

    signUp = (e) => {
      const email = new FormData(e.target).get('email');
      e.preventDefault();
      console.log(`New signup from ${email}`);
    }
  
    render() {
      return (
        <Form onSubmit={this.signUp}>
          <Title>
            Sign up to my newsletter
          </Title>
          <Input type="email" name="email" />
        </Form>
      );
    }
  }