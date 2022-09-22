import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        
        {/* Preloader */}
        <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

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
                      <li><a href="index.html" className="active">Home</a></li>
                      <li><a href="browse.html">Browse</a></li>
                      <li><a href="details.html">Details</a></li>
                      <li><a href="streams.html">Streams</a></li>
                      <li><a href="profile.html">Profile <img src="assets/images/profile-header.jpg" alt=""/></a></li>
                  </ul>   
                  <a className='menu-trigger'>
                      <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header> 

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
                        {/* <h4><em>Most Popular</em> Right Now</h4> */}
                      </div>

                      {/* products section */}
                      <div className="row">

                        {/* product card */}
                        <div className="col-lg-3 col-sm-6">
                          <div className="item">
                            <img src="assets/images/popular-01.jpg" alt=""/>
                            <h4>Produk Pakan Ikan Nomor Satu Di Dunia</h4>
                            <h5>Rp 900.000</h5>
                            <div className='row'>
                              <div className='col-lg-7 col-sm-7'>
                                <ul>
                                  <li>⭐ 4.8 / 5.0</li>
                                  <li>🎁 Terjual 12</li>
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
                                    <button type="button" className="btn btn-outline-danger btn-sm">
                                      <i className='fa fa-cart-plus'></i> Add
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
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
                
                {/* Library */}
                <div className="gaming-library">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4><em>Your Gaming</em> Library</h4>
                    </div>
                    <div className="item">
                      <ul>
                        <li><img src="assets/images/game-01.jpg" alt="" className="templatemo-item"/></li>
                        <li><h4>Dota 2</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>24/08/2036</span></li>
                        <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                      </ul>
                    </div>
                    <div className="item">
                      <ul>
                        <li><img src="assets/images/game-02.jpg" alt="" className="templatemo-item"/></li>
                        <li><h4>Fortnite</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>22/06/2036</span></li>
                        <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button"><a href="#">Donwload</a></div></li>
                      </ul>
                    </div>
                    <div className="item last-item">
                      <ul>
                        <li><img src="assets/images/game-03.jpg" alt="" className="templatemo-item"/></li>
                        <li><h4>CS-GO</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>21/04/2036</span></li>
                        <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                      </ul>
                    </div>
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

export default App;
