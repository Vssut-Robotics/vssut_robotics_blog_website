import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import './settingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img src="https://th.bing.com/th/id/OIP.mOXMnfRzzCFeiJNIdCmsQgHaFO?w=228&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
              </div>
              <label>Username</label>
              <input type="text" placeholder="Enter Name" />
              <label>Email</label>
              <input type="email" placeholder="Enter Email" />
              <label>Password</label>
              <input type="password" placeholder="Enter Password" />
              <button className="settingsSubmit">Update</button>
            </form>

        </div>
        <Sidebar />
    </div>



  )
}

export default SettingsPage