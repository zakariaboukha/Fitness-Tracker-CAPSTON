import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoimage from '../../utils/images/logo.png';
import Authimage from '../../utils/images/Authimage.jpeg';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${Authimage});
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  position: absolute;
  width: 150px;
  top: 30px;
  left: 60px;
  z-index: 10;
  @media (max-width: 700px) {
    width: 80px;
    top: 10px;
    left: calc(50% - 40px);
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
  @media (max-width: 700px) {
    margin: 1rem;
    padding: 1rem;
  }
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
    border-color: rgb(76, 145, 175);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: rgb(76, 155, 175);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(76, 153, 175, 0.6); /* Adding glow effect */

  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
    box-shadow: 0 0 15px rgb(255, 0, 8); /* Enhanced glow effect on hover */
  }
`;

const SmallText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: rgb(76, 155, 175);
  font-size: 0.9rem;

  a {
    color: rgb(69, 99, 197);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignIn = ({ switchToSignUp, handleLogin }) => (
  <FormContainer>
    <Title>Welcome to FitTrack 👋</Title>
    <SmallText>Login</SmallText>
    <form onSubmit={handleLogin}>
      <Input type="email" placeholder="Email" required name="email" />
      <Input type="password" placeholder="Password" required name="password" />
      <Button type="submit">Login</Button>
    </form>
    <SmallText>
      Don't have an account? <a href="#" onClick={switchToSignUp}>Register here</a>
    </SmallText>
  </FormContainer>
);

const SignUp = ({ switchToSignIn, handleSignUp }) => (
  <FormContainer>
    <Title>Welcome to FitTrack 👋</Title>
    <SmallText>Register</SmallText>
    <form onSubmit={handleSignUp}>
      <Input type="text" placeholder="Username" required name="username" />
      <Input type="email" placeholder="Email" required name="email" />
      <Input type="password" placeholder="Password" required name="password" />
      <Button type="submit">Sign Up</Button>
    </form>
    <SmallText>
      Already have an account? <a href="#" onClick={switchToSignIn}>Login here</a>
    </SmallText>
  </FormContainer>
);

function Authentication() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const switchToSignUp = () => setIsSignIn(false);
  const switchToSignIn = () => setIsSignIn(true);

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/dashboard"); // Navigate to Navbar page
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    alert("Registration successful! Please log in.");
    switchToSignIn();
  };

  return (
    <Container>
      <Logo src={logoimage} alt="Logo" />
      {isSignIn ? (
        <SignIn switchToSignUp={switchToSignUp} handleLogin={handleLogin} />
      ) : (
        <SignUp switchToSignIn={switchToSignIn} handleSignUp={handleSignUp} />
      )}
    </Container>
  );
}

export default Authentication;
