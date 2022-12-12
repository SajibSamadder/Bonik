import React from 'react'
import "./product.css"
import { createContext } from 'react'
import useProducts from '../../CoustomHooks/useProducts'
import ProductCard from './ProductCard/ProductCard'
export const ProductData = createContext([])
function Product() {
    const [products, setProduct] = useProducts()
    return (
        <ProductData.Provider value={[products, setProduct]}>
            <ProductCard></ProductCard>
        </ProductData.Provider>
    )
}

export default Product