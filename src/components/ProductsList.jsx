import React from 'react';
import SingleProduct from './SingleProduct';
import HomePage from './HomePage';
import styled from 'styled-components';
import ProductsDataset from './ProductsDataset'
import { useState } from 'react'


const Listofcards = styled.div`
    display: grid;
    grid-template-columns: 20rem 20rem 20rem;
    column-gap: 1.5rem;
    row-gap: 2rem;
    
`

const ProductsList = ({ filters, currentPage, itemsPerPage}) => {

  const filterProductsByPriceRange = (products, priceRange) => {
    switch (priceRange) {
      case 'below 1000':
        return products.filter((product) => product.price < 1000);
      case '1000-5000':
        return products.filter((product) => product.price >= 1000 && product.price <= 5000);
      case '5000-10000':
        return products.filter((product) => product.price > 5000 && product.price <= 10000);
      case '10000-30000':
        return products.filter((product) => product.price > 10000 && product.price <= 30000);
      case '30000 & above':
        return products.filter((product) => product.price > 30000);

      default:
        return products;
    }
  };
  
  // Create a function to check if a product matches the selected filters
  const productMatchesFilters = (product) => {
    const { category, ratings, priceRanges } = filters;

    // Ensure that category, ratings, and priceRanges are defined arrays
   

    if (
      (category.length === 0 || category.includes(product.category)) &&
      (ratings.length === 0 ||
        ratings.some((selectedRating) => product.rating >= selectedRating)
      ) &&
      (priceRanges.length === 0 ||
        priceRanges.includes('all') ||
        priceRanges.some((priceRange) => filterProductsByPriceRange([product], priceRange).length > 0))
    ) {
      return true;
    }

    return false;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
      <Listofcards>
      {ProductsDataset.filter(productMatchesFilters).slice(startIndex, endIndex).map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
      </Listofcards>
  );
}

export default ProductsList;

