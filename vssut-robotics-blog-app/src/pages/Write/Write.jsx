import React from 'react';
import './write.css';

const Write = () => {
  return (
    <div className="write">
        <img className="writeImage" src="https://th.bing.com/th/id/OIP.H8yKt_5ot0vnR6-FYvmjhAHaEK?w=311&h=180&c=7&r=0&o=5&pid=1.7" alt=""/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus" />
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell Your Story..." type="text" className="writeInput writeText" ></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}

export default Write