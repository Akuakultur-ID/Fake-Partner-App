import './../App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Carts() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [uuid1, setUuid1] = useState("");
  useEffect(() => {
    axios
    .get('http://localhost:2022/product/cart')
    .then((x) => {
        console.log(x.data.data)
        setProducts(x.data.data)
    }).catch((error) => {
        console.log(error)
    })
  }, []);

  async function submitPay(x){
    await axios
    .post('http://localhost:2022/ocbc/transfer/submit', {
      "uuid": x.data.data.transactionUUID,
      "pass": "123123",
      "onboarding_token": "557482bf-4346-4d6b-8f9e-72e466669d34"
    })
    .then((x) => {
      console.log(x)
      navigate('/sukses')
    }).catch((error) => {
        console.log(error)
    })
  }

  function Bayar(item){
    console.log(item)
    axios
    .post('http://localhost:2022/ocbc/transfer/inquiry', {
      "accountNumber": "10031312042820220925045312",
      "transferAmount": item,
      "paymentDetail": "Pembayaran DP Akuakultur",
      "onboarding_token": "557482bf-4346-4d6b-8f9e-72e466669d34"
    })
    .then(async(x) => {
      await setUuid1(x.data.data)
      await submitPay(x)
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
                
                {/* Library */}
                <div className="gaming-library">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>Your Cart</h4>
                    </div>

                    {
                      products.map((item) => ( 
                        <div className="item">
                          <ul>
                            <li><img src={item.image} alt="" className="templatemo-item"/></li>
                            <li><h4>{item.name}</h4><span>Terjual {item.sold}</span></li>
                            <li><h4>Date Added</h4><span>{item.createdAt.split('T')[0]}</span></li>
                            <li><h4>Cash Rp {item.cash}</h4><span>DP Rp {item.dp}</span></li>
                            <li><h4>Rating {item.rating}</h4><span>Cicilan {item.kaliCicil } x Rp {item.nominalCicil}</span></li>
                            <li><div className="main-border-button"
                            onClick={()=>{Bayar(item.dp)}}
                            >
                              <a href>💰 Bayar</a>
                            </div></li>
                          </ul>
                        </div>
                      ))
                    }

                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <a href="profile.html">View Your Library</a>
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

export default Carts;