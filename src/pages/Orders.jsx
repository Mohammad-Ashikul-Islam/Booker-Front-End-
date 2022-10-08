import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0px 5px 5px 5px;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-top: 0px ;
`;

const OrderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkslategray;
    margin: 10px 10vw;
    padding: 20px;
    color: white;
    font-weight: 500;
    word-wrap: break-word;
    border: 2px dashed deeppink;
`

const ItemContainer = styled.div`
    
` 

const Item = styled.div`
    
`

const EmptyOrder = styled.div`
  height: 45vh;
  weight: 50vw;
  margin-top: 17vh;
  aligh-items: center;
  justify-content: center;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: firebrick;
`
const Button = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 15px 20px;
    background-color: firebrick;
    color: GhostWhite;
    font-weight: 900;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`
const Status = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 15px 20px;
    background-color: LightCyan;
    color: Purple;
    font-weight: 900;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
const Amount = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 10px 20px;
    background-color: khaki;
    color: DarkMagenta;
    font-weight: 900;
    border: 1px dashed salmon;
    border-radius: 5px;
`

const EmptySpace = styled.button`
margin-top: 12px;
width: 100%;
padding: 15px 20px;
background-color: darkslategray;
color: darkslategray;
font-weight: 900;
border: none;
`

const Orders = ({user}) => {

    const [userOrders,setUserOrders] = useState();
  
    useEffect(()=>{
      const getUserOrders = async () => {
        const token = "Bearer " + user.acessToken;
        await axios({
          method: 'get',
          url: `http://localhost:5000/orders/find/${user.username}`,
          headers: {token}, 
        })
        .then((response) => {
          if((response.data).length===0) setUserOrders(null);
          else setUserOrders(response.data) 
        }, (error) => {
          console.log(error);
        });
      }
      getUserOrders();
    },[])

    const handleCancelOrder = async (order) => {
        const result = window.confirm(`Do You Really Want To Delete Order No: ${order._id}?`)
        if(!result) return;
        const token = "Bearer " + user.acessToken;
        await axios({
            method: 'put',
            url: `http://localhost:5000/orders/update/${order._id}`,
            headers: {token},
            data: {
                Status: "Canceled"
            }
        }).then((response) => {
            alert(`Order No: ${order._id} Has Been Canceled!`);
            window.location.reload(); 
          }, (error) => {
            console.log(error);
          });
    }

    return (

    <Container>
        {userOrders?
        <>
        <Title>YOUR ORDERS</Title>         
        {
            userOrders.map((order) =>
            <Wrapper key={order._id}> 
                <OrderContainer>
                    <ItemContainer>
                        <Item>Order ID: {order._id}</Item>
                        <Item>Products:</Item>
                        {
                            order.elements.map((item) => 
                            <Fragment key={item._id}>
                                <Item>{item.productname} - x{item.quantity}
                                </Item>
                            </Fragment>
                            ) 
                        }
                        <Item>Address: {order.address}</Item>
                        <Item>Phone: {order.phone}</Item>
                        <Item>Order Date: {order.createdAt.slice(0,10)}</Item>
                    </ItemContainer>
                    <ItemContainer><Amount>$ {order.amount} </Amount></ItemContainer>
                    <ItemContainer><Status type='disabled'> {order.status} </Status></ItemContainer>
                    {order.status==='Pending'?<ItemContainer><Button onClick={()=>handleCancelOrder(order)}>Cancel Order</Button></ItemContainer>
                    : <ItemContainer><EmptySpace>Cancel Order</EmptySpace></ItemContainer>
                    // <ItemContainer><Button type='disabled' style={{"cursor": "default"}}>Cancel Order</Button></ItemContainer>    
                }
                </OrderContainer>
            </Wrapper>
            )
        }
        </>
        :
        <EmptyOrder>You Didn't Order Anything Yet! </EmptyOrder>
    }  
    </Container>
    );
};

export default Orders;
