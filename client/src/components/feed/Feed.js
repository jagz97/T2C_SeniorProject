import React from 'react'
import { useWindowWidth } from '../../breakpoints'
import './feed.css'


const Feed = () => {
    const screenWidth = useWindowWidth();

    return (
      <div
        className="feed"
        style={{
          backgroundColor:
            (screenWidth >= 1024 && screenWidth < 1928) || screenWidth < 1024
              ? "#ffffff"
              : screenWidth >= 1928
              ? "#f2f2ff"
              : undefined,
        }}
      >
        <div
          className="iphone-pro-max"
          style={{
            backgroundColor:
              (screenWidth >= 1024 && screenWidth < 1928) || screenWidth < 1024
                ? "#ffffff"
                : screenWidth >= 1928
                ? "#f2f2ff"
                : undefined,
            height:
              screenWidth < 1024
                ? "2529px"
                : screenWidth >= 1024 && screenWidth < 1928
                ? "3712px"
                : screenWidth >= 1928
                ? "2780px"
                : undefined,
            overflow: screenWidth < 1024 ? "hidden" : undefined,
            position: screenWidth >= 1928 ? "relative" : undefined,
            width:
              screenWidth < 1024
                ? "430px"
                : screenWidth >= 1024 && screenWidth < 1928
                ? "1024px"
                : screenWidth >= 1928
                ? "1928px"
                : undefined,
          }}
        >
          {((screenWidth >= 1024 && screenWidth < 1928) || screenWidth < 1024) && (
            <div
              className="group-6"
              style={{
                height: screenWidth < 1024 ? "1004px" : screenWidth >= 1024 && screenWidth < 1928 ? "2521px" : undefined,
                position: screenWidth >= 1024 && screenWidth < 1928 ? "relative" : undefined,
                width: screenWidth < 1024 ? "433px" : undefined,
              }}
            >
              {screenWidth < 1024 && (
                <div className="overlap">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="title">
                        <div className="text-wrapper">My Feed</div>
                      </div>
                    </div>
                    <img className="instagram-post-web" alt="Instagram post web" src="/img/instagram-post-web-2.png" />
                  </div>
                  <div className="frame">
                    <div className="overlap-group-wrapper">
                      <div className="div">
                        <div className="rectangle" />
                        <img className="vector" alt="Vector" src="/img/vector-2.svg" />
                        <div className="text-wrapper-2">Profile</div>
                      </div>
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap-2">
                        <img className="SMS" alt="Sms" src="/img/sms-1.png" />
                        <div className="text-wrapper-3">Chat</div>
                      </div>
                    </div>
                    <div className="div-wrapper">
                      <div className="overlap-3">
                        <div className="rectangle-2" />
                        <img className="literature" alt="Literature" src="/img/literature-1.png" />
                        <div className="text-wrapper-4">Booking</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
  
              {screenWidth >= 1024 && screenWidth < 1928 && (
                <>
                  <div className="group-2">
                    <div className="title-wrapper">
                      <div className="title-2">
                        <div className="text-wrapper-5">My Feed</div>
                      </div>
                    </div>
                    <img className="img" alt="Instagram post web" src="/img/instagram-post-web-3.png" />
                    <div className="square-x">
                      <div className="example">
                        <div className="element">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                        </div>
                        <div className="element">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                        </div>
                        <div className="element">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                        </div>
                        <div className="element">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                        </div>
                        <div className="element">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                        </div>
                        <div className="element">
                          <div className="rectangle-3" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-4" />
                          <div className="rectangle-5" />
                        </div>
                        <div className="text-wrapper-6">picture</div>
                      </div>
                      <div className="actions">
                        <div className="actions-2">
                          <img className="comments" alt="Like" src="/img/like-2.svg" />
                          <div className="comments" />
                          <div className="space" />
                        </div>
                        <div className="text-wrapper-7">19 likes</div>
                      </div>
                    </div>
                    <div className="frame-2">
                      <p className="add-a-comment">
                        <span className="span">Add a comment…</span>
                      </p>
                      <div className="frame-3" />
                      <div className="frame-4">
                        <div className="text-wrapper-8">Post</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-5">
                    <div className="group-3">
                      <div className="overlap-group-2">
                        <img className="vector" alt="Vector" src="/img/vector-3.svg" />
                        <div className="text-wrapper-9">Profile</div>
                      </div>
                    </div>
                    <div className="group-3">
                      <div className="overlap-group-2">
                        <img className="SMS-2" alt="Sms" src="/img/sms-1.png" />
                        <div className="text-wrapper-10">Chat</div>
                      </div>
                    </div>
                    <div className="group-4">
                      <div className="overlap-4">
                        <div className="rectangle-6" />
                        <img className="literature-2" alt="Literature" src="/img/literature-1.png" />
                        <div className="text-wrapper-11">Booking</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
  
          {screenWidth >= 1928 && (
            <>
              <div className="overlap-5">
                <div className="top-nav-bar-wrapper">
                  <div className="top-nav-bar">
                    <div className="nav-bar">
                      <div className="nav-elements">
                        <div className="text-wrapper-12">Home</div>
                        <div className="text-wrapper-13">Profile</div>
                        <div className="text-wrapper-14">Services</div>
                        <div className="search">
                          <div className="overlap-group-3">
                            <div className="ellipse" />
                            <img className="line" alt="Line" src="/img/line-3.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="sign-in">
                        <div className="group-5">
                          <div className="overlap-group-4">
                            <div className="text-wrapper-15">Login</div>
                          </div>
                        </div>
                      </div>
                      <div className="active-indicator" />
                    </div>
                    <div className="logo">
                      <div className="travel-connect">Travel2connect</div>
                    </div>
                  </div>
                </div>
                <div className="title-3">
                  <div className="text-wrapper-16">My Feed</div>
                </div>
                <img className="tempimagejbglxr" alt="Tempimagejbglxr" src="/img/tempimagejbglxr-2.png" />
                <div className="top-nav-bar-wrapper">
                  <div className="top-nav-bar">
                    <div className="nav-bar">
                      <div className="nav-elements">
                        <div className="text-wrapper-12">Home</div>
                        <div className="text-wrapper-13">Profile</div>
                        <div className="text-wrapper-14">Services</div>
                        <div className="search">
                          <div className="overlap-group-3">
                            <div className="ellipse" />
                            <img className="line" alt="Line" src="/img/line-3.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="sign-in">
                        <div className="group-5">
                          <div className="overlap-group-5">
                            <div className="text-wrapper-15">Login</div>
                          </div>
                        </div>
                      </div>
                      <div className="active-indicator" />
                    </div>
                    <div className="logo">
                      <div className="travel-connect">Travel2connect</div>
                    </div>
                  </div>
                </div>
                <div className="title-3">
                  <div className="text-wrapper-16">My Feed</div>
                </div>
              </div>
              <div className="overlap-6">
                <img className="vector" alt="Vector" src="/img/vector.svg" />
                <div className="text-wrapper-17">Profile</div>
                <div className="rectangle-7" />
                <img className="vector" alt="Vector" src="/img/vector.svg" />
                <div className="text-wrapper-17">Profile</div>
              </div>
              <div className="overlap-7">
                <img className="SMS-3" alt="Sms" src="/img/sms-1.png" />
                <div className="text-wrapper-18">Chat</div>
                <div className="rectangle-7" />
                <img className="SMS-3" alt="Sms" src="/img/sms-1.png" />
                <div className="text-wrapper-18">Chat</div>
              </div>
              <div className="overlap-8">
                <div className="rectangle-8" />
                <img className="literature-3" alt="Literature" src="/img/literature-1.png" />
                <div className="text-wrapper-19">Booking</div>
                <div className="rectangle-8" />
                <img className="literature-3" alt="Literature" src="/img/literature-1.png" />
                <div className="text-wrapper-19">Booking</div>
              </div>
              <div className="instagram-post-web-wrapper">
                <img className="instagram-post-web-2" alt="Instagram post web" src="/img/instagram-post-web.png" />
              </div>
              <div className="overlap-9">
                <div className="square-x-2">
                  <div className="example">
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="text-wrapper-6">picture</div>
                  </div>
                  <div className="actions-3">
                    <div className="actions-2">
                      <img className="comments" alt="Like" src="/img/like.svg" />
                      <div className="comments" />
                      <div className="space" />
                    </div>
                    <div className="text-wrapper-7">19 likes</div>
                  </div>
                </div>
                <div className="frame-6">
                  <p className="add-a-comment">
                    <span className="span">Add a comment…</span>
                  </p>
                  <div className="frame-3" />
                  <div className="frame-4">
                    <div className="text-wrapper-8">Post</div>
                  </div>
                </div>
                <div className="square-x-2">
                  <div className="example">
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="element">
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="text-wrapper-6">picture</div>
                  </div>
                  <div className="actions-3">
                    <div className="actions-2">
                      <img className="comments" alt="Like" src="/img/like.svg" />
                      <div className="comments" />
                      <div className="space" />
                    </div>
                    <div className="text-wrapper-7">19 likes</div>
                  </div>
                </div>
                <div className="frame-6">
                  <p className="add-a-comment">
                    <span className="span">Add a comment…</span>
                  </p>
                  <div className="frame-3" />
                  <div className="frame-4">
                    <div className="text-wrapper-8">Post</div>
                  </div>
                </div>
              </div>
              <div className="overlap-10">
                <img className="croods-big-plant" alt="Croods big plant" src="/img/croods-big-plant-2.png" />
                <img className="yuppies-crosses" alt="Yuppies crosses" src="/img/yuppies-crosses.png" />
                <img className="croods-big-plant" alt="Croods big plant" src="/img/croods-big-plant-2.png" />
                <img className="yuppies-crosses" alt="Yuppies crosses" src="/img/yuppies-crosses.png" />
              </div>
              <div className="overlap-11">
                <img className="croods-big-plant-2" alt="Croods big plant" src="/img/croods-big-plant-3.png" />
                <img className="yuppies-note" alt="Yuppies note" src="/img/yuppies-note.png" />
                <img className="croods-big-plant-2" alt="Croods big plant" src="/img/croods-big-plant-3.png" />
                <img className="yuppies-note" alt="Yuppies note" src="/img/yuppies-note.png" />
              </div>
              <div className="yuppies-paint-wrapper">
                <img className="yuppies-paint" alt="Yuppies paint" src="/img/yuppies-paint.png" />
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  

export default Feed
