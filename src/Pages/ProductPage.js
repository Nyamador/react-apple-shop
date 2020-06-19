import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import watch from '../images/watch.png';
import iphone from '../images/iphone11.png';
import airpods from '../images/airpods.png';

const ImageContainer = styled.div`
	text-align: center;
	height: auto;
`;

const ProductDescription = styled.section`
	background-color: #141414;
	height: 50vh;
	border-top-left-radius: 60px;
	border-top-right-radius: 60px;
    padding: 40px;
    margin-top: 10px;
`;

const Button = styled.button`
	background-color: #1770e6;
	border: none;
	outline: none;
	border-radius: 20px;
	padding: 12px;
	width: 60%;
	color: white;
`;

const ProductPage = () => {
    let { slug } = useParams();

	return (
		<>
			<ImageContainer>
                {
                   slug === 'apple-watch' 
                   ? <img src={watch} title='Apple Watch' alt="Apple Watch" height="300"/>
                   : (
                       slug === 'iphone' 
                       ?<img src={iphone} title='iphone' alt="Iphone" height="300"/> 
                       : <img src={airpods} title='Airpods' alt="Airpods" height="300"/> 
                   )
                }

				
			</ImageContainer>
			<ProductDescription>
				<div className='flex-row'>
					<h1>Apple Watch</h1>

					<h3 style={{marginLeft: 'auto'}}>$ 249</h3>
				</div>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis tenetur possimus asperiores cupiditate. Unde voluptate ipsam quaerat consequuntur, provident doloremque ex a, maxime optio tenetur accusantium eius est corporis.
                    </p>
				<Button>Pre-order</Button>
			</ProductDescription>
		</>
	);
};

export default ProductPage;
