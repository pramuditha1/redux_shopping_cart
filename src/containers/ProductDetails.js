import React, {useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {image, title, category, description} = product;

    const {productId} = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();

        //clean up selected product
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);


    return (
    <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
            <div className="ui placeholder segment">
                <div><img src={image} /></div>
                <div>{image}</div> 
                <div>{title}</div> 
                <div>{category}</div> 
                <div>{description}</div>
            </div>
        )}
        
    </div>)
}

export default ProductDetails;