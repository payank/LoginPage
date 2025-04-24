import React from 'react';

 import './style.css';

const RapidusHome = () => {
  return (
    <div className="rapidus-container">
      {/* <header className="rapidus-header">
       
        Wireframe(Home 1/3)
        
      </header> */}

      <div className="rapidus-main">
        <nav className="side-nav">
          <ul>
          <li className="white-box"><img src="data:image/png;base64,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" alt="Rapidus" className="logo" /></li>
            <li className="active">Home</li>
            <li className="white-box">Document</li>
            <li className="white-box">Design Portal</li>
            <li className="white-box">MPW (Shuttle)</li>
            <li className="white-box">Tapeout</li>
            <li className="white-box">Product Info & Instruction</li>
            <li className="white-box">Production & Logistic Report</li>
            <li className="white-box">Eng Data Analysis</li>
            
            <li className="white-box">Quality & Reliability</li>
            <li className="white-box">Customer Service</li>
            SETTING
            <li className="white-box">Administration</li>
          </ul>
        </nav>

        <main className="content-area">
          <section className="search-bar">
        
         
          <div className="searching">
      <img className="search-icon" src="data:image/png;base64,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"/>
      </div>
            <input type="text" placeholder="Search Function or Document" />
            <div className='header-icon'>
            <div className="icon">
  <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/cpkj9bmgebk7oco7iljn" alt="Icon" />
</div>
<div className="icon">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwntgGHiwq041i65fVbL_pSp_vu82_g3ebTSRrxzm9ZjAzeoG6wQsKiThR-I6AqSkCHY&usqp=CAU" alt="Icon" />
</div>
<div className="icon">
  <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/g3oe4f7mqmgjxzaqu30x" alt="Icon" />
</div>
<div className="icon">
  <img src="https://static.vecteezy.com/system/resources/thumbnails/033/294/065/small_2x/green-exclamation-mark-icons-in-line-style-danger-alarm-caution-risk-business-concept-hazard-warning-attention-sign-with-exclamation-mark-symbol-vector.jpg" alt="Icon" />
</div>
</div>
        
          <div className="my-online-dropdown">
          My Online
          </div>
        
          </section>

          
          {/* <a href="#" className="more">More</a> */}
          <div className="whats-new">
          <h2 className='heading'>What’s New</h2>
         <div className='card-now'>
            <div className="featured-content">
              <h3>Featured Content Name</h3>
              <p>XXXXXXXXXXX<br />XXXXXXXXXXX</p>
              Learn More
              <input type="text" className="textbox" />
            </div>
             <div className="announcement">
              <text>Rapidus Customer Portal will be unavailable from 2026/4/1 3:00 to ...</text>
              <div>
              <button className='red'>Notice</button>
              <span className='date'> 2026/1/1</span> 
              <p>XXXXXXXXXXX<br />XXXXXXXXXXX</p>
              <button className='red'>Notice</button>
              <span className='date'>2026/1/1</span> 
              </div>
            </div>
            <div className="Tanaka">
              {/* <text>Rapidus Customer Portal will be unavailable from 2026/4/1 3:00 to ...</text>
              <div>
              <button className='red'>Notice</button>
              2026/1/1
              <p>XXXXXXXXXXX<br />XXXXXXXXXXX</p>
              <button className='red'>Notice</button>
              2026/1/1
              </div> */}
            </div>
          </div>
         
            
           
          <h2 className='heading'>Favourite Function</h2>      
          <div className="fav">
       
          <div className="column">
              <div className="function-card">
              <div className="icon">
  <img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/34_1-1024.png" alt="Icon" />
</div>
                <div className='text'>
                  <strong>Document AAA</strong><br />
                  <span>Document</span>
                </div>
              </div>
              <div className="function-card">
              <div className="icon">
  <img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/34_1-1024.png" alt="Icon" />
</div>
                <div className='text'>
                  <strong>Document BBB</strong><br />
                  <span>Document</span>
                </div>
              </div>
              <div className="function-card">
              <div className="icon">
  <img src="data:image/png;base64,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" alt="Icon" />
</div>
                <div className='text'>
                  <strong>Content Name</strong><br />
                  <span>MPW (Shuttle)</span>
                </div>
              </div>
              </div>
              <div className="column">
              <div className="function-card">
              <div className="icon">
  <img src="https://media.deloitte.com/is/image/deloitte/za-fin-crime-academy-inline2?$Responsive$&fmt=webp&fit=stretch,1&wid=293&dpr=off" alt="Icon" />
</div>
                <div className='text'>
                  <strong>Content Name</strong><br />
                  <span>Design Portal</span>
                </div>
              </div>
              <div className="function-card">
              <div className="icon">
  <img src="https://media.deloitte.com/is/image/deloitte/za-fin-crime-academy-inline2?$Responsive$&fmt=webp&fit=stretch,1&wid=293&dpr=off" alt="Icon" />
</div>
                <div className='text'>
                  <strong>Content Name</strong><br />
                  <span>Design Portal</span>
                </div>
              </div>
              <div className="function-card">
              <div className="icon">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLw2wivITzuEmE_tZmpGY-2FAU8hm1Z41gt-xZM3WtwzCHV9xwTydAUWARtEp8d7dFLM&usqp=CAU" alt="Icon" />
</div>
                <div className='text'>
                  <strong>Content Name</strong><br />
                  <span>Content Name</span>
                </div>
              </div>
              </div>
            </div>
          </div>
         
        </main>

      
      </div>

      {/* <footer className="footer">
        Rapidus Confidential
      </footer> */}
    </div>
  );
};

export default RapidusHome;
