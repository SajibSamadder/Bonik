import React, { useEffect, useState } from 'react'

function useProducts() {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(product => setProduct(product))
    }, [])
    return [products, setProduct]
}

export default useProducts