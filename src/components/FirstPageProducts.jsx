import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios'

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`

const Container = styled.div`
    display: flex;
    padding: 20;
    flex-wrap: wrap;
    justify-content: space-between;
`

function FirstPageProducts() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async () =>{
      try {
        const res = await axios.get ("https://smoggy-boa-cap.cyclic.app/products/find_all" );
       setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [])

  return (
    <>
      <Title>Popular Products</Title>
      <Container>
      { 
        products.slice(6,10).map((item,key)=>
        <Product item = {item} key={item._id}/>
        )
     }
    </Container>

    <Title>Top Products</Title>
      <Container>
      { 
        products.slice(0,4).map((item,key)=>
        <Product item = {item} key={item._id}/>
        )
     }
    </Container>
    </>
  )
}

export default FirstPageProducts