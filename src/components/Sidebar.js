import React from 'react';
import './Sidebar.css';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <PeopleIcon className="sidebar-icon" />
      <HomeIcon className="sidebar-icon" />
      <BarChartIcon className="sidebar-icon" />
      <ListAltIcon className="sidebar-icon" />
      <EventNoteIcon className="sidebar-icon" />
      <PaymentIcon className="sidebar-icon" />
      {/* <SettingsIcon className="sidebar-icon" /> */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <LogoutIcon className="sidebar-icon" />
    </div>
  );
}

export default Sidebar;
