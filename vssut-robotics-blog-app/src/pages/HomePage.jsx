import React from 'react';
import './HomePage.css';
import Header from '../../src/Header/Header';
import Posts from '../../src/posts/Posts';
import Sidebar from '../../src/sidebar/Sidebar';


const HomePage = () => {
  return (
    <>
    <Header />
    <div className="home">
      <Posts />
      <Sidebar />
    </div>
    </>
  )
}

export default HomePage