import "./singlepost.css";

import React from "react";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlepostwrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlepostTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlepostedit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlepostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author: <b>Silpa</b>
          </span>
          <span className="singlepostDate">1 hour ago </span>
        </div>
        <p className="singlepostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos officia hic id. Nisi sunt tempora inventore, ea qui
          aperiam dignissimos laboriosam at veritatis asperiores voluptatum
          ipsum quis perspiciatis maiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos officia hic id. Nisi sunt tempora inventore, ea qui
          aperiam dignissimos laboriosam at veritatis asperiores voluptatum
          ipsum quis perspiciatis maiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos officia hic id. Nisi sunt tempora inventore, ea qui
          aperiam dignissimos laboriosam at veritatis asperiores voluptatum
          ipsum quis perspiciatis maiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos officia hic id. Nisi sunt tempora inventore, ea qui
          aperiam dignissimos laboriosam at veritatis asperiores voluptatum
          ipsum quis perspiciatis maiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos officia hic id. Nisi sunt tempora inventore, ea qui
          aperiam dignissimos laboriosam at veritatis asperiores voluptatum
          ipsum quis perspiciatis maiores?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
