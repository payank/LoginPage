import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useIntl } from 'react-intl';

const SearchbarNav = () => {
  const location = useLocation();
  const intl = useIntl();
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
      border: '1px solid gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      padding: '4px',
      marginLeft: '10px',
      cursor: 'pointer',
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
        borderRadius: '15px',
        padding: '4px 8px',
        marginLeft: '25%',
        background: 'white'
      }}>
        <SearchIcon style={{ color: '#888' }} />
        <input
          type="text"
          placeholder={intl.formatMessage({ id: 'search', defaultMessage: 'Search Function or Document' })}
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
        <IconBox icon={<ShoppingCartOutlinedIcon style={{  fontSize: '16px' }} />} />
        <IconBox icon={<StarOutlineOutlinedIcon style={{  fontSize: '16px' }} />} />
        <IconBox icon={<InfoOutlinedIcon style={{  fontSize: '16px' }} />} />
        <IconBox icon={<NotificationsOutlinedIcon style={{ fontSize: '16px' }} />} />
      </div>
    </section>
  );
};

export default SearchbarNav;
