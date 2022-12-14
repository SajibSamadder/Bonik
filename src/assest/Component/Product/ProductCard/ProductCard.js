import React, { useContext } from 'react'
import { useState } from 'react'
import { IncreseContext } from '../../../../App'
import { ProductData } from '../Product'
import { addProduct, addProductLS, getProduct, getProductLS, increaseUp } from '../../../Utilize/Utilize'
import SideBar from '../SideBarProduct/SideBar'
import { useEffect } from 'react'


function ProductCard() {
    const [products, setProduct] = useContext(ProductData)
    const [increase, setIncrease, search, setSearch, storeProducts, setStoreProduct] = useContext(IncreseContext)
    const [findProdcut, setFindProduct] = useState([])
    useEffect(() => {
        setFindProduct(products)
    }, [products])
    useEffect(() => {
        const findProduct = products.filter(product => product.name.toLowerCase().includes(search))
        setFindProduct(findProduct)
    }, [search])
    return (
        <div className='product_container'>
            {
                findProdcut.map(product => {
                    function addProduct() {
                        addProductLS([product, setIncrease])
                        const matchProduct = storeProducts.find(storeProduct => storeProduct.id == product.id)
                        if (matchProduct) {
                            const withOutMatch = storeProducts.filter(storeProduct => storeProduct.id !== product.id)
                            setStoreProduct([...withOutMatch, product])
                        } else {
                            product.quantity = 1
                            setStoreProduct([...storeProducts, product])
                        }
                    }
                    return (
                        <div className='product_wrapper' key={product.id}>
                            <div className="product_details">
                                <div className="product_img">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="product_text">
                                    <h6 title={product.name}>{product.name.length >= 20 ? product.name.slice(0, 25) + "..." : product.name}</h6>
                                    <div className="ratting">
                                        {product.ratings == 5 ?
                                            <div>
                                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                            </div> :
                                            product.ratings == 4 ?
                                                <div>
                                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fal fa-star"></i>

                                                </div> :
                                                product.ratings == 3 ?
                                                    <div>
                                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fal fa-star"></i><i className="fal fa-star"></i>
                                                    </div> :
                                                    product.ratings == 2 ?
                                                        <div>
                                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fal fa-star"></i><i className="fal fa-star"></i><i className="fal fa-star"></i>

                                                        </div> : product.ratings == 1 ? <div>
                                                            <i className="fas fa-star"></i><i className="fal fa-star"></i><i className="fal fa-star"></i><i className="fal fa-star"></i><i className="fal fa-star"></i>
                                                        </div> : product.ratings}
                                    </div>
                                    <div className="price">
                                        <h6>{product.price}.00$ <span><del>235.00</del></span></h6>
                                    </div>
                                    <div className='add_to_card'>
                                        <button className={increase > 0 ? "card_increase" : 'add_length'} > <i className="fal fa-minus"></i></button>
                                        <button className={increase > 0 ? "card_increase" : 'add_length'}>
                                            <span>0</span>
                                        </button>
                                        <button className='increase' onClick={addProduct}><i className="fal fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default ProductCard