import React from 'react'
import Home from "../pages/Home/Home";
import Login from "../pages/Login";

import { Route, Routes } from 'react-router-dom'
import Product from '../pages/Product';
import Register from '../pages/Register';
import ProductList from '../pages/ProductList';

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/'  element={ <Home/>}/>
                <Route path='/signIn'  element={ <Login/>}/>
                <Route path='/product'  element={ <Product/>}/>
                <Route path='/register'  element={ <Register/>}/>
                <Route path='/productList' element={<ProductList/>} />

            </Routes>
        </div>
    )
}
