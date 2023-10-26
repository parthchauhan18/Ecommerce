import React from 'react';
import "./Newslatter.css";
import { Send } from '@mui/icons-material';


export default function NewsLetter() {
    return (
      <div className="newsLetterComponent">
        <h1 className="title">NewsLetter</h1>
        <div className="desc">
          Get timely updates from your favorite products.
        </div>
        <div className="inputContainer">
          <input
            placeholder="Write your email"
            type="text"
            className="input"
            name=""
            id=""
          />
          <button className="sendBtn">
            <Send/>
          </button>
        </div>
      </div>
    );
  }