import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({match}) => {
    let {slug} = useParams();

     return(
         <div>
             Product {slug}
         </div>
     )
}

export default ProductPage;