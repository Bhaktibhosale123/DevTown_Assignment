import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 1rem;
    width: 100%;
    background-color: rgb(214, 234, 251);
    overflow: hidden;
    animation: loadCard 0.4s ease-out;
    z-index: 0;
    height: 25rem;
    border: 0.02rem solid rgb(191, 194, 193);
    text-align: center;
    align-items: center;
`
const H2 = styled.h2`
    font-style:oblique ;
    margin-left: 20px;
    font-size: 1.3rem;
 `
const PriceAndRating = styled.div`
     display:flex;
     gap: 5rem;
`
 const Description = styled.p`
    padding: 0px 20px 0px 20px;
 `
 const Price = styled.span`
    font-style:oblique ;
    margin-left: 20px;
    font-size: 1.3rem;
    font-weight: bold;
 `
 const Image = styled.img`
 position: relative;
flex-shrink: 0;
user-select: none;
height: 15.5rem;
width: 80%;
border-radius: 10px;
 `
 const Rating = styled.span`
 font-size: 1rem;
 `
const SingleProduct = ({product}) => {
  
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <H2>{product.name}</H2>
      <Description>{product.description}</Description>
      <PriceAndRating>
      <Price>Rs.{product.price}</Price>
      <Rating>Ratings : {product.rating}</Rating>
      </PriceAndRating>
    </Card>

    
  );
};

export default SingleProduct;