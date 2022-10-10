import './../App.css';

function NotFound() {
  return (
    <div className='App'>
      <div className='App-header'>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content">

                {/* Banner */}
                <div className="notfound-banner">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="header-text">
                        <h6>Berkley Indonesia</h6>
                        <h4><em>HTTP 404</em><br/>Not Found</h4>
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

export default NotFound;