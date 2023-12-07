import React from "react";
import "./comment.css";

export const Comments = () => {
  return (
    <div className="comments">
      <div className="profile-header">
        <div className="frame">
          <div className="image">
            <img className="avatar" alt="Avatar" src="img/avatar.png" />
          </div>
          <div className="text-wrapper">travel2connect</div>
        </div>
        <img className="more" alt="More" src="more.svg" />
      </div>
      <div className="author-comment">
        <div className="div">
          <div className="image">
            <img className="avatar" alt="Avatar" src="img/avatar.png" />
          </div>
          <div className="container">
            <div className="text">
              <div className="text-wrapper-2">travel2connect Bonjour everyone!</div>
            </div>
            <div className="actions" />
          </div>
        </div>
      </div>
      <div className="user-comment">
        <div className="div">
          <div className="image">
            <img className="avatar" alt="Avatar" src="img/avatar-2.png" />
          </div>
          <div className="container">
            <div className="text">
              <p className="eceegulden-it-s-so">
                <span className="span">eceegulden </span>
                <span className="text-wrapper-3">it’s so beautiful</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments
