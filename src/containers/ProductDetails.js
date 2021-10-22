import React, {useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetails = () => {
    const {productId} = useParams();
    console.log(productId);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err);
        })
    }
    return (
    <div>
        <h1>ProductDetails</h1>
    </div>)
}

export default ProductDetails;