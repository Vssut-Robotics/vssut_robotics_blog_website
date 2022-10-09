import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <div className="post">
        <img className="postImg" src="https://th.bing.com/th/id/OIP.YolNqhFm2tLhVVMqaAQ0JQHaEK?w=297&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            </div>
        
        <span className="postTitle">
            Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
        A enim aut veniam quas ipsa molestias cupiditate, nostrum recusandae sequi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt aliquid. Voluptate ad expedita excepturi.<br />
         Autem earum consectetur dignissimos? Quaerat ratione ullam commodi assumenda minima eaque 
         <br />reprehenderit eos illum totam!
        </p>


    </div>
  )
}

export default Post