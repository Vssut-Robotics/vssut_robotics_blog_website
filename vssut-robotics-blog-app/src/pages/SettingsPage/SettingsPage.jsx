import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './settingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <Sidebar />
        </div>
    </div>
  )
}

export default SettingsPage