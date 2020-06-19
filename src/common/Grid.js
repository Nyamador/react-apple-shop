import React from 'react';
import styled from 'styled-components';
import watch from '../images/watch.png';
import iphone from '../images/iphone11.png';
import airpods from '../images/airpods.png';
import { Link } from 'react-router-dom';

const GridWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
`;

const GridItem = styled.div`
	margin: 10px;
	text-align: center;
	border: 1px solid #282626;
	border-radius: 8px;
	padding: 12px;
`;

const ProductGrid = () => {
	return (
		<GridWrapper>
            <Link to='/products/airpods'>
			<GridItem>
				<img src={airpods} alt='Airpods' height='250'></img>
			</GridItem>
            </Link>

			<Link to='/products/apple-watch'>
				<GridItem>
					<img src={watch} alt='Apple Watch' height='250'></img>
				</GridItem>
			</Link>

            <Link to='/products/iphone'>
			<GridItem>
				<img src={iphone} alt='Iphone' height='250'></img>
			</GridItem>
            </Link>

		</GridWrapper>
	);
};

export default ProductGrid;
