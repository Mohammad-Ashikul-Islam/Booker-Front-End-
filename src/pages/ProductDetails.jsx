import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';

const Container = styled.div`
    width: 90%;
    display: flex;
    position: relative;
  `;
const Title = styled.h2`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  `
const Author = styled.h3`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  `

const Image = styled.img`
    width: 30%;
    height: 60vh;
    margin: 20px;
    z-index: 2;
  `;
const InfoContainer = styled.div`
    width: 60%;
    margin: 20px;
    font-size: 25px;
    font-weight: 500;
`
  
const Price = styled.p`
    margin: 20px 20px 0px 20px;
    font-size: 25px;
    font-weight: bold;
  `
const Desc = styled.p`
    margin: 20px;
    font-size: 20px;
`
const QuantityContainer =  styled.p`
    display = flex;
    width: 40%;
    padding: 15px 20px;
    font-weight: bold;
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
`

const Button = {
  "width": "40%",
  "border": "none",
  "padding": "15px 20px",
  "backgroundColor": "teal",
  "color": "white",
  "cursor": "pointer",
  "fontWeight": "bold",
  "fontSize": "20px",
  "marginLeft": "15px"
}

const quantityButton = {
    "backgroundColor": "white",
    "border": "1px solid gray",
    "color": "black",
    "cursor": "pointer",
    "fontWeight": "bold",
    "fontSize": "20px",
  }

const ProductDetails = ({user}) => {
    const location = useLocation();
    const receivedProduct = location.state.name;
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(1);

    const handlePlus = () =>{
        if(quantity === 5) return;
        setQuantity(quantity+1); 
    }

    const handleMinus = ()  =>{
        if(quantity === 1) return;
        setQuantity(quantity-1);
    }
    
    const postMessage = async () =>{
        const token = "Bearer " + user.acessToken;
        await axios({
            method: 'post',
            url: "http://localhost:5000/carts/add",
            headers: {token}, 
            data: {"username": user.username, "productname": receivedProduct.title, "author": receivedProduct.author, "img": receivedProduct.img, "price": receivedProduct.price ,"quantity": quantity }
          })
          .then((response) => {
            alert("Product Added To Cart Sucessfully!")
          }, (error) => {
            console.log(error);
          });
      }

    const handleCartClick = () => {
        if(!user){
            navigate("/signin")
        }
        else{
            postMessage();
        }
    }

    return (
        <>
            <Title>{receivedProduct.title}</Title>
            <Author>Author: {receivedProduct.author}</Author>
            <Container>
                <Image src={receivedProduct.img}></Image>
                <InfoContainer>
                    <Desc>{receivedProduct.desc}</Desc>
                    <Price>Price: ${receivedProduct.price}</Price>
                    <QuantityContainer>
                        Quantity: &nbsp; &nbsp;
                        <button style={quantityButton} onClick={handleMinus}>-</button>
                        &nbsp; &nbsp;
                        <span>{quantity}</span>
                        &nbsp; &nbsp;
                        <button style={quantityButton} onClick={handlePlus}>+</button>
                    </QuantityContainer>
                    <button style={Button} onClick={handleCartClick}>
                        <AddShoppingCartIcon/>
                        Add to Cart
                    </button> 
                </InfoContainer>               
            </Container>
            
        </>
    );
};

export default ProductDetails;