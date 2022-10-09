import React from 'react';
import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="
            https://th.bing.com/th/id/OIP.H8yKt_5ot0vnR6-FYvmjhAHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7
            " alt="" className="singlePostImage" />
            <h1 className="singlePostTitle">Single Post Title
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Name: <b>Sangram</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi eius quia laboriosam perferendis aliquid! Saepe ipsam quia praesentium et magni ipsa a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam esse quam ullam suscipit harum qui itaque accusamus excepturi natus hic facere dolorum, ratione quae porro corrupti dignissimos, fugiat recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt autem doloremque dolorem libero odit maxime. Aspernatur natus officia, pariatur sint ducimus iste nesciunt, maiores numquam tempora repellendus vitae ea.</p>
        </div>
    </div>
  )
}

export default SinglePost