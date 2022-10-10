import React, { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"
import Spinner from './images/spinner.gif'

const Products = lazy(() => import('./pages/Products'))
const Carts = lazy(() => import('./pages/Carts'))
const Sukses = lazy(() => import('./pages/Sukses'))
const NotFound = lazy(() => import('./pages/NotFound'))

function Loading () {
  return (
    <img alt="spinner" src={Spinner} style={{
      width: "5%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)"
    }}/>
  )
}

function App() {
  return (
    <>
      {/* Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                    <img src="assets/images/logo2.png" style={{width: '50%'}} alt=""/>
                </a>
                <div className="search-input">
                  <form id="search" action="#">
                    <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                <ul className="nav">
                  <li><a href="/product">Products</a></li>
                  <li><a href="/cart">Cart</a></li>
                  <li><a href>Samba <img src="assets/images/profile-header.jpg" alt=""/></a></li>
                </ul>   
                <a className='menu-trigger'>
                    <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    
      <Router>
        <Suspense fallback={<Loading/>}>

          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/logint">Login</Link>
              </li>
            </ul>
          </nav> */}
        
          <Routes>
            <Route index element={<Navigate to="/product" />} />
            <Route path="product" element={<Products />} />
            <Route path="cart" element={<Carts />} />
            <Route path="sukses" element={<Sukses />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </Suspense>
      </Router>
    </>
  );
}

export default App;
