import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SearchbarNav = () => {
  const location = useLocation();
  let title = '';

  if (location.pathname === "/rapidusHome") {
    title = "Dashboard";
  } else if (location.pathname === "/rapidusCalculator") {
    title = "DesignPortal";
  } else if (location.pathname === "/rapidusDocument") {
    title = "Document";
  } else {
    title = "Demo";
  }

  const IconBox = ({ icon }) => (
    <div style={{
      width: '28px',
      height: '28px',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      padding: '4px',
      marginLeft: '10px'
    }}>
      {icon}
    </div>
  );

  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      background: '#f5f5f5'
    }}>
    
      <div style={{ flex: '1' }}>
        <h1 style={{ margin: 0 }}>{title}</h1>
      </div>

   
      <div style={{
        flex: '2',
        display: 'flex',
        // alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '4px 8px',
        margin: '0 20px',
        background: 'white'
      }}>
        <SearchIcon style={{ color: '#888' }} />
        <input
          type="text"
          placeholder="Search Function or Document"
          style={{
            border: 'none',
            outline: 'none',
            marginLeft: '8px',
            width: '100%',
            fontSize: '14px'
          }}
        />
      </div>

      
      <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
        <IconBox icon={<ShoppingCartIcon style={{ color: 'black', fontSize: '16px' }} />} />
        <IconBox icon={<StarIcon style={{ color: 'black', fontSize: '16px' }} />} />
        <IconBox icon={<InfoIcon style={{ color: 'black', fontSize: '16px' }} />} />
        <IconBox icon={<NotificationsIcon style={{ color: 'black', fontSize: '16px' }} />} />
      </div>
    </section>
  );
};

export default SearchbarNav;
