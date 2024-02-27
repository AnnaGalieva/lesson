import React from "react";
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { productid } = useParams();
    const product = products.find(p => p.id === parseInt(productid, 4));

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductDetail;