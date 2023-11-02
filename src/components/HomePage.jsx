import React, { useEffect } from 'react'
import ProductsList from './ProductsList'
import styled from 'styled-components';
import { useState } from 'react'
import ProductsDataset from './ProductsDataset';


const Section = styled.div`
    display: flex;
    padding: 4rem;
    
`
const MainSection = styled.div`
background-color: aliceblue;
`
const H1 = styled.h1`
font-size: 3rem;
text-align: center;
padding-top: 3rem;
`

const Filters = styled.div`
    width: 25%;
    height: 40rem;
    border: 0.02rem solid rgb(191, 194, 193);
    border-radius: 1.5rem;
    padding: 2rem;
    background-color: white;
`

const H4 = styled.h4`
    font-size: 1.3rem;
    margin: 0 0 16px;
`

const HR = styled.hr`
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgb(191, 194, 193);
    margin: 24px 0px;
`

const CategoryType = styled.div`
    display:flex;
    flex-direction: column;

`
const Input = styled.input`
    height: 1rem;
    width: 1rem;
    margin: 0 10px 0 0;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid rgb(13, 122, 95);
`

const Type = styled.p`
    margin: 0 0 16px;
    font-family: Helvetica,sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: rgb(26, 30, 29);
`
const Productsdiv = styled.div`
    width: 75%;
    margin-left: 2rem;
`
const Optionswrapper = styled.div`
     display:flex;
     gap: 10px
`

const Button = styled.button`
--bg: #000;
  --hover-bg: #ff90e8;
  --hover-text: #000;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
  &:hover {
  transform: translate(-0.25rem,-0.25rem);
  background: rgb(6, 102, 186);
  box-shadow: 0.25rem 0.25rem var(--bg);
  }
`
const Navigation = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:5rem;
margin-top:2rem;
`
const itemsPerPage = 6;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    ratings: [],
    priceRanges: [],
  });


  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters };

    // Update the filters based on the filter type
    if (filterType === 'category') {
      if (newFilters.category.includes(value)) {
        // Remove the category filter if it's already selected
        newFilters.category = newFilters.category.filter((c) => c !== value);
      } else {
        // Add the category filter if it's not selected
        newFilters.category.push(value);
      }
    } else if (filterType === 'rating') {
      if (newFilters.ratings.includes(value)) {
        // Remove the star rating filter if it's already selected
        newFilters.ratings = newFilters.ratings.filter((r) => r !== value);
      } else {
        // Add the star rating filter if it's not selected
        newFilters.ratings.push(value);
      }
    } else  if (filterType === 'priceRange') {
      if (newFilters.priceRanges.includes(value)) {
        newFilters.priceRanges = newFilters.priceRanges.filter((p) => p !== value);
      } else {
        newFilters.priceRanges.push(value);
      }
    }

    // Update the state with the new filters
    setFilters(newFilters);
    setCurrentPage(1);
  };


  return (
    <>
    <MainSection>
    <H1>OUR PRODUCTS</H1>
        <Section>
            <Filters>
              <H4>Category</H4>
              <CategoryType>
              <Optionswrapper>
                <Input type="checkbox"
                  onChange={() => handleFilterChange('category', 'Clothing')}
                checked={filters.category.includes('Clothing')}
                />
                <Type>Clothing</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox"
                  onChange={() => handleFilterChange('category', 'Household Appliances')}
                checked={filters.category.includes('Household Appliances')}/>
                <Type>Household Appliances</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox"
                  onChange={() => handleFilterChange('category', 'Electronics')}
                checked={filters.category.includes('Electronics')}/>
                <Type>Electronics</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox"
                  onChange={() => handleFilterChange('category', 'Beauty Products')}
                checked={filters.category.includes('Beauty Products')}/>
                <Type>Beauty Products</Type>
                </Optionswrapper>
              </CategoryType>

              <HR></HR>

              <H4>Ratings</H4>
              <CategoryType>
              <Optionswrapper>
                <Input  type="checkbox"
                onChange={() => handleFilterChange('rating', 5)}
                checked={filters.ratings.includes(5)} />
                <Type>5 </Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                  onChange={() => handleFilterChange('rating', 4)}
                checked={filters.ratings.includes(4)} 
                />
                <Type>4 & above</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                  onChange={() => handleFilterChange('rating', 3)}
                checked={filters.ratings.includes(3)} 
                />
                <Type>3 & above</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                  onChange={() => handleFilterChange('rating', 2)}
                checked={filters.ratings.includes(2)} 
                />
                <Type>2 & above</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                  onChange={() => handleFilterChange('rating', 1)}
                checked={filters.ratings.includes(1)} 
                />
                <Type>1 & above</Type>
                </Optionswrapper>
              </CategoryType>

              <H4>Price</H4>
              <CategoryType>
              <Optionswrapper>
                <Input type="checkbox" 
                onChange={() => handleFilterChange('priceRange', 'below 1000')}
                checked={filters.priceRanges.includes('below 1000')}
                />
                <Type>below 1000 </Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                  onChange={() => handleFilterChange('priceRange', '1000-5000')}
                checked={filters.priceRanges.includes('1000-5000')}
                />
                <Type>1000-5000</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                 onChange={() => handleFilterChange('priceRange', '5000-10000')}
                checked={filters.priceRanges.includes('5000-10000')}
                />
                <Type>5000-10000</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                onChange={() => handleFilterChange('priceRange', '10000-30000')}
                checked={filters.priceRanges.includes('10000-30000')}
                />
                <Type>10000-30000</Type>
                </Optionswrapper>
                <Optionswrapper>
                <Input type="checkbox" 
                 onChange={() => handleFilterChange('priceRange', '30000 & above')}
                checked={filters.priceRanges.includes('30000 & above')}
                />
                <Type>30000 & above</Type>
                </Optionswrapper>
              </CategoryType>
            </Filters>
            <Productsdiv>
            <ProductsList filters={filters} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Navigation>
        <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= ProductsDataset.length}
        >
          Next
        </Button>
      </Navigation>

            </Productsdiv>
        </Section>
        </MainSection>
    </>
  )
}

export default HomePage