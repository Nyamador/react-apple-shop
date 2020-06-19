import React from 'react';
import styled from 'styled-components';
import watch from '../images/watch.png';
import iphone from '../images/iphone11.png';
import { Link } from 'react-router-dom';

const GridWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const GridItem = styled.div`
    margin: 20px;
    text-align: center;
    border: 1px solid #282626;
    border-radius: 8px;
    padding: 12px;
`

const ProductGrid = () => {
    return (
        <GridWrapper>
            <Link to="/product/apple-watch">
                <GridItem>
                    <img src={watch} alt="Apple Watch" height="250"></img>
                </GridItem>
            </Link>

                <GridItem>
                    <img src={iphone} alt="Apple Watch" height="250"></img>
                </GridItem>
        </GridWrapper>
    )
}

export default ProductGrid;