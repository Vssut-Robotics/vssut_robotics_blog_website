import React from 'react';
import HomePage from './pages/HomePage';
import Single from './pages/single/Single';
import TopBar from './Topbar/Topbar';
import Write from './pages/Write/Write';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
// import Post from './Post/Post';


function App() {
  const user = false;
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<TopBar />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />}/>
        <Route path="/write" element={user ? <Write /> : <Register/>}/>
        <Route path="/settings" element={user ? <SettingsPage /> : <Register />}/>
        <Route path="/post/:postId" element={<Single />}/>

      </Routes>
    </Router>
     </>
  );
}

export default App;
