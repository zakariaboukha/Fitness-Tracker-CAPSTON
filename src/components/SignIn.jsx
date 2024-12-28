// src/components/SignIn.jsx
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.6);

  &:hover {
    background-color: rgb(41, 169, 205);
    box-shadow: 0 0 15px rgba(41, 169, 205, 0.8);
  }
`;

const SmallText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;

  a {
    color: rgb(76, 134, 175);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignIn({ switchToSignUp }) {
  return (
    <FormContainer>
      <div>
      <Title>Welcome to FitTrack</Title>
      <SmallText>Register</SmallText>
      </div>
      
      <form>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </form>
      <SmallText>
        Don't have an account? <a href="#" onClick={switchToSignUp}>Register here</a>
      </SmallText>
    </FormContainer>
  );
}

export default SignIn;