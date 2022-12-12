import React, { useContext, useEffect, useState } from 'react'
import { IncreseContext } from '../../../../App'
import useProducts from '../../../CoustomHooks/useProducts'
import { addProductLS, getProductLS } from '../../../Utilize/Utilize'

import "../SideBarProduct/sideBard.css"
function SideBar({ storeProducts }) {
    const [products, setProduct] = useProducts()
    const [increase] = useContext(IncreseContext)
    const [storeProduct, setStoreProduct] = storeProducts
    useEffect(() => {
        const getProductList = getProductLS()
        const storedProdcut = []
        for (const addProduct in getProductList) {
            const exist = products.find(product => product.id === addProduct)
            if (exist) {
                exist.quantity = getProductList[addProduct]
                storedProdcut.push(exist)
            }
        }
        setStoreProduct([...storedProdcut])
    }, [products])
    function targetProductQuantity(product) {
        addProductLS([product])
    }
    return (
        <div className="offcanvas offcanvas-end" id="offcanvasRight">
            <div className="select_item" style={{ padding: "20px 30px" }}>
                <h4>{increase} item</h4>
            </div>
            {
                storeProduct.map(product => {

                    return (
                        <div className='stoer_prodeuct_wrapper' key={product.id}>
                            <div className="add_to_card">
                                <button className="increase" onClick={() => targetProductQuantity(product)}><i className="fal fa-plus"></i></button>
                                <button className="card_increase"><span>{product.quantity}</span></button>
                                <button className={product.quantity == 1 ? "select-none" : "card_increase"}> <i className="fal fa-minus"></i></button>
                            </div>
                            <div className="stoer_prodcut_img">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="stoer_prodcut_details">
                                <h6 title={product.name}>{product.name.length >= 15 ? product.name.slice(0, 15) + "..." : product.name}</h6>
                                <p style={{ color: "rgb(125, 135, 156)", fontSize: "10px" }}>{product.price}.00 x {product.quantity}</p>
                                <h5 style={{ color: "rgb(233, 69, 96)", fontSize: "14px", fontWeight: 600 }}>${product.price * product.quantity}.00</h5>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar