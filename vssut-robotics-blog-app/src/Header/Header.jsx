import React from 'react';
import "./Header.css";


const header = () => {
  return (
    <div className="header">
        <div className="headerTitle">
          <span className="headerTitleSmall">Robotics Society</span>
          <span className="headerTitleLarge">Blog</span>
        </div>
        <img className="headerImage" src="https://thumbs.dreamstime.com/b/happy-new-year-concept-digital-trends-robot-hand-touch-icon-full-modernity-advanced-technology-artificial-intelligence-ai-233995299.jpg" alt=""/>
    </div>
  )
}

export default header