import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-card">
        <div className="icon-container">
          <ShoppingCartIcon className="overview-icon1" />
        </div>
        <div>
          <p>Total Orders</p>
          <h3>75</h3>
        </div>
      </div>
      <div className="overview-card">
        <div className="icon-container">
          <LocalShippingIcon className="overview-icon2" />
        </div>
        <div>
          <p>Total Delivered</p>
          <h3>70</h3>
        </div>
      </div>
      <div className="overview-card">
        <div className="icon-container">
          <CancelIcon className="overview-icon3" />
        </div>
        <div>
          <p>Total Cancelled</p>
          <h3>5</h3>
        </div>
      </div>
      <div className="overview-card">
        <div className="icon-container">
          <MonetizationOnIcon className="overview-icon4" />
        </div>
        <div>
          <p>Total Revenue</p>
          <h3>$12k</h3>
        </div>
      </div>
    </div>
  );
}

export default Overview;
