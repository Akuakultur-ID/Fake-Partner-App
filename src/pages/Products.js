import './../App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Products() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:2022/product')
    .then((x) => {
        console.log(x.data.data)
        setProducts(x.data.data)
    }).catch((error) => {
        console.log(error)
    })
  }, []);

  function AddCart(id){
    axios
    .post('http://localhost:2022/product/add_cart', {
      "userid": 5,
      "productid": id
    })
    .then((x) => {
        console.log(x.data.data)
        setProducts(x.data.data)
        navigate('/cart')
    }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <div className='App'>
      <div className='App-header'> 

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content">

                {/* Banner */}
                <div className="main-banner">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="header-text">
                        <h6>Berkley Indonesia</h6>
                        <h4><em>Budidaya Bahari</em><br/>Zaman Now</h4>
                        <div className="main-button">
                          <a href="browse.html">Selengkapnya</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Most Popular */}
                <div className="most-popular">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-section">
                        <h4>Products for You</h4>
                      </div>

                      {/* products section */}
                      <div className="row">

                        {/* product card */}
                        
                        {
                          products.map((item) => ( 
                            <div className="col-lg-3 col-sm-6">
                              <div className="item">
                                <img src={item.image} alt=""/>
                                <h4>{item.name}</h4>
                                <h5>Rp {item.cash}</h5>
                                <div className='row'>
                                  <div className='col-lg-7 col-sm-7'>
                                    <ul>
                                      <li>⭐ {item.rating}</li>
                                      <li>🎁 Terjual {item.sold}</li>
                                      {/* <li style={{marginTop:'10px'}}>
                                        <button type="button" className="btn btn-outline-danger btn-sm">
                                          <i className='fa fa-cart-plus'></i> Add
                                        </button>
                                      </li> */}
                                    </ul>
                                  </div>
                                  <div className='col-lg-5 col-lg-5'>
                                    <ul>
                                      <li>
                                        <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={()=>{AddCart(item.id)}}>
                                          <i className='fa fa-cart-plus'></i> Add
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>   
                          ))
                        }
                        {/* end of product card */}

                        <div className="col-lg-12">
                          <div className="main-button">
                            <a href="browse.html">Discover Popular</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved.   
                <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a>  Distributed By <a href="https://themewagon.com" target="_blank" >ThemeWagon</a></p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Products;