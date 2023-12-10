import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProductById } from "../../api/ProductDetail";
import ItemProductDetails from "./ItemProductDetails";
import "./ProductDetails.css";
import GetProductAlike from "../getProductAlike/getProductAlike";
import useRegisterProductDetails from '../../hooks/Details/useRegisterProductDetails'

const ProductDetails = () => {
    const [searchParams] = useSearchParams();

    const currentId = searchParams.get('id');

    const {products,setProducts,loading,setLoading} = useRegisterProductDetails()

    useEffect(() => {
        const fetch = async () => {
            try {
                const results = await getProductById(currentId);
                setProducts(results)
            } catch (error) {
                console.log(error);
            }finally {
                setLoading(false)
            }
        }
        fetch();
    },[])

    return (
        <div className="m-auto w-[1200px] rounded-md">
            {loading ? <div>
                ...Loading
            </div>
            : products != [] ? <ItemProductDetails items={products}/> : <div>No Results</div>   
        }
            <GetProductAlike/>
            
        </div>
    );
};

export default ProductDetails;