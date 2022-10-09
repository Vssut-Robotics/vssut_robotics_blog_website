import React from 'react';
import HomePage from './pages/HomePage';
import Single from './pages/single/Single';
import TopBar from './Topbar/Topbar';
import Write from './pages/Write/Write';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
     <Route exact path="/" element={<TopBar />} />
     <Route path="/home" element={<HomePage />} />

     <Route path="/settings" element={<SettingsPage />} />
     <Route path="/single" element={<Single />} />
     <Route path="/write" element={<Write />} />



     
      </Routes>
     

    </Router>
     </>
  );
}

export default App;
