import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/colorful-books-picture-id471896548?k=20&m=471896548&s=170667a&w=0&h=nYbdwLhAOsxheLYpXDi6vcSdzHOh1h6DpZoQfnc6syo=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  font-weight: bold;
  background-color: white;
  border: 1px solid gray;
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
`;

const Title = styled.h1`
  font-size: 24px;
  ffont-weight: bold;
`;

const Form = styled.form`
  display: flex;
  font-weight: bold;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
`;

const LinkStyle = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const LintkText = {
  "textDecoration": "none",
  "color": "black",
}

const ErrStyle = styled.p`
  color: red;
  margin: 5px 0px;
  font-size: 12px;
`

const Login = ({user, setUser}) => {

  const [errMsg,setErrMsg] = useState('');

  const postMessage = async (formUsername, formPassword) =>{
    await axios({
        method: 'post',
        url: "http://localhost:5000/auth/login",
        headers: {}, 
        data: {"username": formUsername, "password": formPassword}
      })
      .then((response) => {
        localStorage.setItem('Data', JSON.stringify(response.data));
        const date = Date.now();
        localStorage.setItem('CreateTime',date.toString());
        setUser(response.data);
      }, (error) => {
        console.log(error);
        setErrMsg(error.response.data);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUsername = e.target.username.value;
    const formPassword = e.target.password.value;
    postMessage(formUsername, formPassword)
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input id="username" name="username" placeholder="Username" />
          <Input id="password" name="password" placeholder="Password" type='password' />
          {errMsg===''? null : <ErrStyle>{errMsg}</ErrStyle>  }
          <Button type="submit">LOGIN</Button>
          <Link to = '/register' style={LintkText}>
            <LinkStyle>CREATE A NEW ACCOUNT?</LinkStyle>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;