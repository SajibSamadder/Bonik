
import './App.css';
import './assest/css/deffult.css';
import Header from './assest/Component/Header/Header';
import Product from './assest/Component/Product/Product';
import { useState } from 'react';
import { createContext } from 'react';
import { getProductLS } from './assest/Utilize/Utilize';
import Banner from './assest/Component/Banner/Banner';

import { Route, Routes } from 'react-router-dom';
import Dashbord from './assest/Component/Dashbord/Dashbord';
import SideBar from './assest/Component/Product/SideBarProduct/SideBar';
import SingleProduct from './assest/Component/Product/singleProduct/SingleProduct';
import AllProduct from './assest/Component/Product/singleProduct/allProduct/AllProduct';
import Watch from './assest/Component/Watch/Watch';
import useProducts from './assest/CoustomHooks/useProducts'
import { useEffect } from 'react';
import TrendingProducts from './assest/Component/TrendingProducts/TrendingProducts';
export const IncreseContext = createContext(0)


function App() {
  let addProductLength = getProductLS()
  const [search, setSearch] = useState("")
  const [increase, setIncrease] = useState(Object.keys(addProductLength).length)
  const [storeProducts, setStoreProduct] = useState([])
  const [products, setProduct] = useProducts([])
  const [renderProduct, setRenderProduct] = useState([])
  useEffect(() => {
    setRenderProduct([...products])
  }, [products])

  return (
    <IncreseContext.Provider value={[increase, setIncrease, search, setSearch, storeProducts, setStoreProduct, renderProduct, setRenderProduct]}>
      <div className="App" >
        <Header></Header>
        <Routes>
          <Route path='/' element={
            <div className='product_slider'>
              <Banner></Banner>
              <SingleProduct><h2 className='product_slider_titel'>Flash Deals</h2></SingleProduct>
              <TrendingProducts></TrendingProducts>
              <Watch></Watch>
            </div>
          }></Route>
          <Route path='/product' element={<Product></Product>}></Route>
          <Route path='/allProduct' element={
            <AllProduct>
              <h2 className='product_slider_titel' style={{ "textAlign": "center", "padding": "50px 0" }}>Flash Deals</h2>
              {renderProduct.slice(60, 76)}
            </AllProduct>
          }></Route>
          <Route path='/dashbored' element={<Dashbord></Dashbord>}></Route>

        </Routes>
        <SideBar storeProducts={[storeProducts, setStoreProduct]}></SideBar>

      </div>

    </IncreseContext.Provider>

  );
}

export default App;
