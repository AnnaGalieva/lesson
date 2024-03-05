import React from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { productid } = useParams();
    const product = products.find(p => p.id === parseInt(productid, 4));

    return (
        <div>
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <p>{products.price}</p>
        </div>
    )
}
export default ProductDetail;