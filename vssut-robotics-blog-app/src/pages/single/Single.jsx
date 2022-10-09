import React from 'react';
import './single.css';
import Sidebar from './../../sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';

const Single = () => {
  return (
    <div className="single">
        {/* posts */}
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default Single