import React from 'react'
import { useContext } from 'react'
import { IncreseContext } from '../../../App'
import AllProduct from '../Product/singleProduct/allProduct/AllProduct'
import { useRef, useEffect } from 'react';
import "./Watch.css"
function Watch() {
    const [increase, setIncrease, search, setSearch, storeProducts, setStoreProduct, renderProduct, setRenderProduct] = useContext(IncreseContext)
    const ref = useRef(null);
    useEffect(() => {
        const el = document.querySelectorAll('.watch .tab-content .nav-link');
        el.forEach(button => {
            button.addEventListener("click", e => {
                el.forEach(button2 => {
                    button2.classList.remove("active")
                })
                e.target.classList.add("active")
            })
        })
    }, []);
    return (
        <section className='watch'>
            <div className="watch_wrapper" style={{ "padding": "0 110px", "marginTop": "20px" }}>
                <div className="watch_left">
                    <div className="nav nav-tabs">
                        <button className="nav-link active show_border" data-bs-toggle="tab" data-bs-target="#nav-home">Home</button>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-profile" >Profile</button>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="nav-home" >
                            <div className='nav'>
                                <button className="nav-link active" id='watch-1-tab' data-bs-toggle="pill" data-bs-target="#watch-1" >Home1</button>
                                <button className="nav-link" id='watch-2-tab' data-bs-toggle="pill" data-bs-target="#watch-2">Profile</button>
                                <button className="nav-link" id='watch-3-tab' data-bs-toggle="pill" data-bs-target="#watch-3" >Messages</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" >
                            <div className='nav'>
                                <button className="nav-link" id='watch-4-tab' data-bs-toggle="pill" data-bs-target="#watch-4">Home2</button>
                                <button className="nav-link" id='watch-5-tab' data-bs-toggle="pill" data-bs-target="#watch-5">Profile</button>
                                <button className="nav-link" id='watch-6-tab' data-bs-toggle="pill" data-bs-target="#watch-6" >Messages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="watch_right">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="watch-1" aria-labelledby='watch-1-tab' >
                            <AllProduct>
                                <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                                {renderProduct.slice(50, 60)}
                            </AllProduct>
                        </div>
                        <div className="tab-pane fade" id="watch-2" aria-labelledby='watch-2-tab'>
                            <AllProduct>
                                <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                                {renderProduct.slice(20, 27)}
                            </AllProduct>
                        </div>
                        <div className=" tab-pane fade" id="watch-3" aria-labelledby='watch-3-tab'>
                            <AllProduct>
                                <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                                {renderProduct.slice(27, 32)}
                            </AllProduct>
                        </div>
                        <div className="tab-pane fade" id="watch-4" aria-labelledby='watch-4-tab'>
                            <AllProduct>
                                <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                                {renderProduct.slice(7, 32)}
                            </AllProduct>
                        </div>
                        <div className="tab-pane fade" id="watch-5" aria-labelledby='watch-5-tab'>
                            <AllProduct>
                                <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                                {renderProduct.slice(23, 32)}
                            </AllProduct>
                        </div>
                        <div className=" tab-pane fade" id="watch-6" aria-labelledby='watch-6-tab'>
                            <AllProduct>
                                <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
                                {renderProduct.slice(7, 12)}
                            </AllProduct>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Watch