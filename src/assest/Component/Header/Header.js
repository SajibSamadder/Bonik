import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IncreseContext } from '../../../App'
import logo from '../../Img/logo.svg'
import './Header.css'
function Header() {
    const [increase, setIncrease, search, setSearch, storeProducts, setStoreProduct] = useContext(IncreseContext)
    function search_text(e) {
        setSearch(e.target.value)
    }
    return (
        <header className='header'>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="manu">
                <div className="search_box">
                    <div className="form-group">
                        <input type="text" onChange={search_text} className="form-control" placeholder="Search Your Product"></input>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="product">Product</Link>
                        </li>
                        <li>
                            <Link to="dashbored">Dashbored</Link>
                        </li>
                        <li><a href="#">contuct</a></li>

                        <li><a href="#">log in</a></li>
                        <li className='shoping_card' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                            <i className="fal fa-cart-arrow-down"></i>
                            <span className='shoping_length'>{increase}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header