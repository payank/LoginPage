import React from 'react';
import SidebarNav from './SidebarNav';
import SearchbarNav from './SearchbarNav';
 import './style.css';
import DocumentRapidus from './RapidusDocument/DocumentRapidus';

const RapidusCalculator = () => {
  return (
    <div className="rapidus-container">
      

    <div className="rapidus-main">
         <SidebarNav />
         <main className="content-area">
         <SearchbarNav/>
         <DocumentRapidus/>
         </main>
          </div>
          </div>
  )
}
export default RapidusCalculator;