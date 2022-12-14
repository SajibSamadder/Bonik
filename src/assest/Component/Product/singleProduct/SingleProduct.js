import React, { useContext } from 'react'
import { useState } from 'react'
import { IncreseContext } from '../../../../App'
import { ProductData } from '../Product'
import { addProduct, addProductLS, getProduct, getProductLS, increaseUp } from '../../../Utilize/Utilize'
import OwlCarousel from 'react-owl-carousel'
import { useEffect } from 'react'
import useProducts from '../../../CoustomHooks/useProducts'
import "./SingleProduct.css"
import { Link } from 'react-router-dom'

function SingleProduct(props) {
    const [products, setProduct] = useProducts([])
    const [increase, setIncrease, search, setSearch, storeProducts, setStoreProduct, sliderProduct, setSliderProduct] = useContext(IncreseContext)
    const [findProdcut, setFindProduct] = useState([])
    useEffect(() => {
        setFindProduct(products)
    }, [products])
    useEffect(() => {
        const findProduct = products.filter(product => product.name.toLowerCase().includes(search))
        setFindProduct(findProduct)
    }, [search])
    const flashProduct = products.slice(60, 76)
    const [a, setA] = useState([])
    function productDetails(product) {
        setA([product])
    }

    return (
        <div style={{ "padding": "0 110px" }}>
            <div className="prodcut_slider_top" style={{ "display": "flex", "justifyContent": "space-between ", "cursor": "pointer" }}>
                {props.children}
                <Link to="allProduct">View All</Link>
            </div>
            <OwlCarousel className='owl-theme' loop margin={10} items={4} nav={true} navText={['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>']} dots={false}>
                {
                    flashProduct.map(product => {
                        function addProduct() {
                            addProductLS([product, setIncrease])
                            const matchProduct = storeProducts.find(storeProduct => storeProduct.id == product.id)
                            if (matchProduct) {
                                const withOutMatch = storeProducts.filter(storeProduct => storeProduct.id !== product.id)
                                console.log(product.quantity)
                                setStoreProduct([...withOutMatch, product])
                            } else {
                                product.quantity = 1
                                setStoreProduct([...storeProducts, product])
                            }
                        }
                        return (
                            <div className="items" key={product.id}>
                                <div className='product_wrapper' >
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
                                            <div className="product_view">
                                                <i className="far fa-eye" data-bs-toggle="modal" data-bs-target="#a" onClick={() => productDetails(product)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </OwlCarousel>
            <div className="modal fade" id="a">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {a.map(product => {
                            return (
                                <div className="modal_product_wrap" key={product.id}>
                                    <div className="modal_product" style={{ "display": "flex" }}>
                                        <div className="modal_product_img">
                                            <img src={product.img} alt="" />
                                        </div>
                                        <div className="modal_product_details">
                                            <h4>{product.name}</h4>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SingleProduct