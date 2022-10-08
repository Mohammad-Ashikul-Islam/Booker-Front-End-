import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from '../components/Product'
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
const ProductContainer = styled.div`
    width: 30%;
    margin: 15px 22px;
    flex-wrap: wrap;
    justify-content: space-between;
`

function AllProducts() {
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
      <Title>All Products</Title>
      <Container>
      { 
        products.map((item)=>
        <ProductContainer key={item._id}>
          <Product item = {item} />
        </ProductContainer>
        )
     }
    </Container>
    </>
  )
}

export default AllProducts