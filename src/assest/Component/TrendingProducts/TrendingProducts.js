import React, { useContext, useEffect, useRef } from 'react'
import { IncreseContext } from '../../../App'
import AllProduct from '../Product/singleProduct/allProduct/AllProduct'
import "./trendingProducts.css"

function TrendingProducts() {
    const [increase, setIncrease, search, setSearch, storeProducts, setStoreProduct, renderProduct, setRenderProduct] = useContext(IncreseContext)
    return (
        <section className='trending_products'>
            <div className="container">
                <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                    <h2 className='product_slider_titel'>Trending Products</h2>
                    <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#trending_all">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#trending_computer">Computer</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="trending_headphone_tab" data-bs-toggle="pill" data-bs-target="#trending_headphone" >Headphone</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="trending_all">

                        <AllProduct>
                            <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                            {renderProduct.slice(20, 27)}
                        </AllProduct>
                    </div>
                    <div className="tab-pane fade" id="trending_computer" >

                        <AllProduct>
                            <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                            {renderProduct.slice(30, 37)}
                        </AllProduct>
                    </div>
                    <div className="tab-pane fade" id="trending_headphone">
                        <AllProduct>
                            <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                            {renderProduct.slice(47, 54)}
                        </AllProduct>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TrendingProducts