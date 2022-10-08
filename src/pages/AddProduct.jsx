import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 72vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-fluid-gradient-colorful-fluid-round-banner-background-image_221896.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  font-weight: bold;
  box-shadow: -5px -5px 20px 5px red, 5px 5px 30px 5px blue;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  min-width: 91%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: Peru;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const ErrStyle = styled.p`
  color: red;
  margin: 0px;
  font-size: 12px;
  width: 90%;
`

const AddProduct = ({user}) => {

  const [errMsg,setErrMsg] = useState('');
  const postMessage = async (Title, Author, Desc, Img, Price) =>{
    const token = "Bearer "+ user.acessToken;
    await axios({
        method: 'post',
        url: "http://localhost:5000/products/add",
        headers: {token}, 
        data: {"title": Title, "author": Author, "desc": Desc, "img": Img, "price": Price }
      })
      .then((response) => {
        alert("Product Added Sucessfully");
        window.location.reload();
      }, (error) => {
        console.log(error);
        setErrMsg(error.response.data);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const Title = e.target.title.value;
    const Author = e.target.author.value;
    const Desc = e.target.desc.value;
    const Img = e.target.img.value;
    const Price = e.target.price.value;
    if(Title.length > 25){
      setErrMsg("Title must be in 25 character length")
      return;
    }
    if(Author.length > 25){
        setErrMsg("Author must be in 25 character length")
        return;
      }

    postMessage(Title, Author, Desc, Img, Price)
  }

  return (
    <Container>
      <Wrapper>
        <Title>ADD PRODUCT</Title>
        <Form  onSubmit={handleSubmit}>
          <Input id="title" name="title" placeholder="Title" />
          <Input id="author" name="author" placeholder="Author" />
          <Input id="desc" name="desc" placeholder="Description"/>
          <Input id="img" name="img" placeholder="Image Link"/>
          <Input id="price" name="price" placeholder="Price" type="number" />

          {errMsg===''? null : <ErrStyle>{errMsg}</ErrStyle>  }
          <Button type="submit">ADD PRODUCT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;