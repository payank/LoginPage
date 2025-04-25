import React from 'react';
import SidebarNav from './SidebarNav';
import SearchbarNav from './SearchbarNav';
 import './style.css';

const RapidusCalculator = () => {
  return (
    <div className="rapidus-container">
      

    <div className="rapidus-main">
         <SidebarNav />
         <main className="content-area">
         <SearchbarNav/>
         </main>
          </div>
          </div>
  )
}
export default RapidusCalculator;