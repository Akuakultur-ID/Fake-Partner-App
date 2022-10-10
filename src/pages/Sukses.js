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
                <div className="main-banner-sukses">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="header-text">
                        <h6>Berkley Indonesia</h6>
                        <h4><em>Pembayaran DP</em><br/>Sukses</h4>
                        <div className="main-button">
                          <a href="browse.html">Selengkapnya</a>
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