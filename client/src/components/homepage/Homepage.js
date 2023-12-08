import React from "react"
import "./homepage.css"
import { useWindowWidth } from "../../breakpoints";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const screenWidth = useWindowWidth();
  const navigate = useNavigate()

  const handleButtonClick = () => {
    // Navigate to the desired page
    navigate('/onboardmatching');
  };

  

  const handleHotelNavigate = () => {
    // Navigate to the desired page
    navigate('/search');
  };



  return (
    <div
      className="homepage-max"
      style={{
        backgroundColor:
          (screenWidth >= 1024 && screenWidth < 1512) ||
          (screenWidth >= 1512 && screenWidth < 1920) ||
          screenWidth < 1024
            ? "#ffffff"
            : screenWidth >= 1920
            ? "#f2f2ff"
            : undefined,
      }}
    >
      <div
        className="homepage-phone"
        style={{
          backgroundColor:
            (screenWidth >= 1024 && screenWidth < 1512) ||
            (screenWidth >= 1512 && screenWidth < 1920) ||
            screenWidth < 1024
              ? "#ffffff"
              : screenWidth >= 1920
              ? "#f2f2ff"
              : undefined,
          height:
            screenWidth < 1024
              ? "12958px"
              : screenWidth >= 1024 && screenWidth < 1512
              ? "7056px"
              : screenWidth >= 1512 && screenWidth < 1920
              ? "6275px"
              : screenWidth >= 1920
              ? "6600px"
              : undefined,
          position: (screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024 ? "relative" : undefined,
          width:
            screenWidth < 1024
              ? "430px"
              : screenWidth >= 1024 && screenWidth < 1512
              ? "1024px"
              : screenWidth >= 1512 && screenWidth < 1920
              ? "1512px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        {screenWidth < 1024 && (
          <div className="overlap">
            <img className="image" alt="Imagetegdsf" src="/img/image-917-1.png" />
            <div className="context">
              <div className="overlap-group">
                <p className="slogans">
                  <span className="text-wrapper">Your </span>
                  <span className="span">
                    Passport <br />
                  </span>
                  <span className="text-wrapper">to</span>
                  <span className="span">&nbsp;</span>
                  <span className="text-wrapper">Global </span>
                  <span className="span">Connections</span>
                </p>
                <div className="searcging-tools">
                  <div className="div">Location</div>
                  <div className="rectangle" />
                  <div className="text-wrapper-2">Travel Type</div>
                  <div className="rectangle-2" />
                  <div className="text-wrapper-3">Date</div>
                  <div className="button-search">
                    <div className="text-wrapper-4">Submit</div>
                  </div>
                  <img className="vector" alt="Vector" src="/img/vector-11.svg" />
                  <img className="img" alt="Vector" src="/img/vector-11.svg" />
                </div>
              </div>
              <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
            </div>
          </div>
        )}

        <div
          className="overlap-43"
          style={{
            height:
              screenWidth < 1024
                ? "3034px"
                : screenWidth >= 1024 && screenWidth < 1512
                ? "6372px"
                : screenWidth >= 1512 && screenWidth < 1920
                ? "6238px"
                : screenWidth >= 1920
                ? "6254px"
                : undefined,
            left:
              screenWidth < 1024
                ? "0"
                : screenWidth >= 1024 && screenWidth < 1512
                ? "-10px"
                : screenWidth >= 1512 && screenWidth < 1920
                ? "-7px"
                : undefined,
            position:
              (screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024
                ? "absolute"
                : (screenWidth >= 1512 && screenWidth < 1920) || screenWidth >= 1920
                ? "relative"
                : undefined,
            top:
              screenWidth < 1024
                ? "1693px"
                : screenWidth >= 1024 && screenWidth < 1512
                ? "0"
                : screenWidth >= 1920
                ? "-4px"
                : undefined,
            width:
              screenWidth < 1024
                ? "483px"
                : screenWidth >= 1024 && screenWidth < 1512
                ? "1034px"
                : screenWidth >= 1512 && screenWidth < 1920
                ? "1519px"
                : screenWidth >= 1920
                ? "2063px"
                : undefined,
          }}
        >
          {screenWidth < 1024 && (
            <>
              <div className="partners">
                <img className="image-2" alt="Imagedbg" src="/img/image-909-1.png" />
                <img className="mask-group" alt="Mask group" src="/img/mask-group-11-2x.png" />
                <img className="mask-group-2" alt="Mask group" src="/img/mask-group.png" />
                <img className="mask-group-3" alt="Mask group" src="/img/mask-group-12.png" />
                <img className="image-3" alt="Imagegfd" src="/img/image-912-1.png" />
              </div>
              <div className="frame">
                <div className="romantic-tropical">
                  <div className="overlap-2">
                    <div className="illustration">
                      <div className="overlap-group-2">
                        <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-10-1.svg" />
                        <img className="mask-group-4" alt="Mask group" src="/img/mask-group-8.png" />
                      </div>
                    </div>
                    <img className="dayflow-chat-ok" alt="Dayflow chat ok" src="/img/dayflow-chat-ok-1-2x.png" />
                  </div>
                  <div className="context-2">
                    <div className="overlap-3">
                      <div className="text-wrapper-5">TRAVEL TOGETHER</div>
                      <div className="text-wrapper-6">Meet Your Travel Buddy</div>
                    </div>
                    <div className="button-search-2" />
                    <p className="p">
                      Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                      internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime
                      quasi aut ducimus illum aut optio quibusdam!
                    </p>
                  </div>
                </div>
                <img className="nomads-luggage" alt="Nomads luggage" src="/img/nomads-luggage-travel.png" />
                <img className="palz-big-leaves" alt="Palz big leaves" src="/img/palz-big-leaves-2x.png" />
              </div>
            </>
          )}

          <div
            className="group"
            style={{
              height:
                screenWidth >= 1024 && screenWidth < 1512
                  ? "6372px"
                  : screenWidth < 1024
                  ? "385px"
                  : screenWidth >= 1512 && screenWidth < 1920
                  ? "401px"
                  : screenWidth >= 1920
                  ? "399px"
                  : undefined,
              left:
                (screenWidth >= 1024 && screenWidth < 1512) || screenWidth >= 1920
                  ? "0"
                  : screenWidth < 1024
                  ? "89px"
                  : screenWidth >= 1512 && screenWidth < 1920
                  ? "2px"
                  : undefined,
              top:
                screenWidth >= 1024 && screenWidth < 1512
                  ? "0"
                  : screenWidth < 1024
                  ? "2649px"
                  : (screenWidth >= 1512 && screenWidth < 1920) || screenWidth >= 1920
                  ? "5029px"
                  : undefined,
              width:
                screenWidth >= 1024 && screenWidth < 1512
                  ? "1034px"
                  : screenWidth < 1024
                  ? "231px"
                  : screenWidth >= 1512 && screenWidth < 1920
                  ? "1517px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
          >
            {screenWidth >= 1024 && screenWidth < 1512 && (
              <>
                <div className="view">
                  <div className="explore-nature">
                    <div className="group-wrapper">
                      <div className="group-2">
                        <div className="overlap-group-3">
                          <img className="line" alt="Line" src="/img/line-3-2.svg" />
                          <div className="text-wrapper-7">Explore Nature</div>
                          <div className="promotion">PROMOTION</div>
                        </div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-8">View Packages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="explore-cities">
                    <div className="group-wrapper">
                      <div className="group-3">
                        <div className="overlap-group-4">
                          <img className="line-2" alt="Line" src="/img/line-8-1.svg" />
                          <div className="text-wrapper-9">Explore Cities</div>
                          <div className="promotion">PROMOTION</div>
                        </div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-8">View Packages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="europe-sightseeing">
                  <div className="context-3">
                    <div className="overlap-group-5">
                      <div className="travel-packages">TRAVEL PACKAGES</div>
                      <p className="text-wrapper-10">We Have the BEST Travel Packages</p>
                    </div>
                    <div className="button-search-3">
                      <div className="text-wrapper-8">View Packages</div>
                    </div>
                    <p className="text-wrapper-11">
                      Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                      internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime
                      quasi aut ducimus illum aut optio quibusdam!
                    </p>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-4">
                      <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-19299-3.svg" />
                      <img className="mask-group-5" alt="Mask group" src="/img/mask-group-15.png" />
                    </div>
                  </div>
                  <div className="destination">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-6">
                        <div className="rectangle-5" />
                        <div className="text-wrapper-12">$700</div>
                      </div>
                    </div>
                  </div>
                  <div className="destination-2">
                    <div className="group-4">
                      <div className="overlap-group-6">
                        <div className="rectangle-5" />
                        <div className="text-wrapper-13">$800</div>
                      </div>
                    </div>
                  </div>
                  <div className="destination-3">
                    <div className="group-5">
                      <div className="overlap-group-6">
                        <div className="rectangle-5" />
                        <div className="text-wrapper-13">$500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {((screenWidth >= 1024 && screenWidth < 1512) || screenWidth >= 1920) && (
              <div
                className="sepratir"
                style={{
                  backgroundImage:
                    screenWidth >= 1024 && screenWidth < 1512
                      ? "url(/img/rectangle-19294-1.png)"
                      : screenWidth >= 1920
                      ? "url(/img/rectangle-19301.png)"
                      : undefined,
                  height:
                    screenWidth >= 1024 && screenWidth < 1512 ? "470px" : screenWidth >= 1920 ? "399px" : undefined,
                  left: screenWidth >= 1024 && screenWidth < 1512 ? "16px" : screenWidth >= 1920 ? "0" : undefined,
                  top: screenWidth >= 1024 && screenWidth < 1512 ? "3523px" : screenWidth >= 1920 ? "0" : undefined,
                  width:
                    screenWidth >= 1024 && screenWidth < 1512 ? "1018px" : screenWidth >= 1920 ? "960px" : undefined,
                }}
              >
                <div
                  className="group-40"
                  style={{
                    backgroundColor: screenWidth >= 1920 ? "#1d1d1d61" : undefined,
                    height:
                      screenWidth >= 1024 && screenWidth < 1512 ? "315px" : screenWidth >= 1920 ? "399px" : undefined,
                    left: screenWidth >= 1024 && screenWidth < 1512 ? "206px" : undefined,
                    position: screenWidth >= 1024 && screenWidth < 1512 ? "relative" : undefined,
                    top: screenWidth >= 1024 && screenWidth < 1512 ? "131px" : undefined,
                    width: screenWidth >= 1024 && screenWidth < 1512 ? "338px" : undefined,
                  }}
                >
                  <div
                    className="overlap-group-7"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1512 ? "315px" : screenWidth >= 1920 ? "171px" : undefined,
                      left: screenWidth >= 1920 ? "292px" : undefined,
                      top: screenWidth >= 1920 ? "124px" : undefined,
                      width:
                        screenWidth >= 1024 && screenWidth < 1512 ? "336px" : screenWidth >= 1920 ? "409px" : undefined,
                    }}
                  >
                    {screenWidth >= 1024 && screenWidth < 1512 && (
                      <>
                        <p className="heading">
                          Let’s Make Your <br />
                          next Holiday Amazing
                        </p>
                        <img className="line-3" alt="Line" src="/img/line-1-3.svg" />
                      </>
                    )}

                    {screenWidth >= 1920 && (
                      <>
                        <div className="overlap-group-8">
                          <img className="line-4" alt="Line" src="/img/line-3.svg" />
                          <div className="text-wrapper-14">Explore Nature</div>
                          <div className="promotion-2">PROMOTION</div>
                        </div>
                        <div className="button-search-4">
                          <div className="text-wrapper-8">View Packages</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {screenWidth >= 1024 && screenWidth < 1512 && (
              <>
                <div className="book-a-trip">
                  <div className="overlap-5">
                    <div className="illustration-wrapper">
                      <div className="illustration-2">
                        <div className="overlap-6">
                          <div className="group-6" />
                          <div className="image-4">
                            <div className="overlap-7">
                              <div className="group-7">
                                <div className="overlap-group-9">
                                  <div className="OPTIONS">
                                    <div className="LEAF">
                                      <img className="img-2" alt="Leaf" src="/img/leaf-1-3.svg" />
                                    </div>
                                    <div className="send">
                                      <img className="img-2" alt="Send" src="/img/send-2-3.svg" />
                                    </div>
                                    <div className="map-icon">
                                      <img className="map" alt="Map" src="/img/map-1-3.svg" />
                                    </div>
                                  </div>
                                  <img className="building" alt="Building" src="/img/building-1-2.png" />
                                  <div className="text-wrapper-15">60 people are interested</div>
                                  <div className="overlap-8">
                                    <div className="text-wrapper-16">14-29 June</div>
                                    <div className="text-wrapper-17">by JR Martinax</div>
                                    <div className="text-wrapper-18">Trip to Hawaii</div>
                                    <img className="line-5" alt="Line" src="/img/line-3-3-2.svg" />
                                  </div>
                                  <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-17.png" />
                                </div>
                              </div>
                              <img className="heart" alt="Heart" src="/img/heart-6-1-2-2x.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="context-4">
                      <div className="heading-2">
                        <div className="overlap-group-10">
                          <p className="heading-3">One Stop Location For Booking Your Travel</p>
                          <div className="subheading">Fast &amp; Easy</div>
                        </div>
                      </div>
                      <div className="values">
                        <div className="value">
                          <div className="selection-wrapper">
                            <img className="selection" alt="Selection" src="/img/selection-1-2.png" />
                          </div>
                          <div className="overlap-group-11">
                            <div className="text-wrapper-19">Choose Destination</div>
                            <p className="lorem-ipsum-dolor">
                              Lorem ipsum dolor sit amet, consectetur <br />
                              adipiscing elit. Urna, tortor tempus.
                            </p>
                          </div>
                        </div>
                        <div className="value-2">
                          <div className="overlap-group-11">
                            <p className="lorem-ipsum-dolor">
                              Lorem ipsum dolor sit amet, consectetur <br />
                              adipiscing elit. Urna, tortor tempus.
                            </p>
                            <div className="text-wrapper-20">Check Availability</div>
                          </div>
                          <div className="water-sport-wrapper">
                            <img className="water-sport" alt="Water sport" src="/img/water-sport-1-2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="best-service">
                  <div className="title">
                    <div className="text-wrapper-21">CATEGORY</div>
                    <div className="text-wrapper-22">We Offer Best Services</div>
                  </div>
                  <div className="services">
                    <div className="guided-tours">
                      <div className="overlap-group-12">
                        <div className="rectangle-7" />
                        <img className="tour-guide" alt="Tour guide" src="/img/tour-guide-1-1.png" />
                      </div>
                      <p className="text-wrapper-23">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                      <div className="text-wrapper-24">Guided Tours</div>
                    </div>
                    <div className="best-flight-options">
                      <div className="overlap-9">
                        <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-157-1.svg" />
                        <div className="rectangle-9" />
                        <p className="text-wrapper-25">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div className="rectangle-10" />
                        <div className="text-wrapper-26">Best Flights Options</div>
                        <img className="travelling" alt="Travelling" src="/img/travelling-1-1.png" />
                      </div>
                    </div>
                    <div className="medical-insurance">
                      <div className="overlap-10">
                        <div className="rectangle-11" />
                        <img className="medical-team" alt="Medical team" src="/img/medical-team-1-1.png" />
                      </div>
                      <p className="text-wrapper-27">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                      <div className="text-wrapper-28">Medical insurance</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-11">
                  <div className="header">
                    <div className="overlap-12">
                      <div className="rectangle-12" />
                      <img
                        className="unsplash-nsmseuhuoeu"
                        alt="Unsplash nsmseuhuoeu"
                        src="/img/unsplash-nsmseuhuoeu-2.png"
                      />
                      <div className="context-wrapper">
                        <div className="context-5">
                          <div className="overlap-13">
                            <p className="slogans-2">
                              <span className="text-wrapper">Your </span>
                              <span className="span">
                                Passport <br />
                              </span>
                              <span className="text-wrapper">to</span>
                              <span className="span">&nbsp;</span>
                              <span className="text-wrapper">Global </span>
                              <span className="span">Connections</span>
                            </p>
                            <div className="searcging-tools-2">
                              <div className="overlap-group-13">
                                <button className="button">
                                  <div className="text-wrapper-29">Submit</div>
                                </button>
                                <div className="text-wrapper-30">Location</div>
                                <div className="text-wrapper-31">Travel Type</div>
                                <div className="text-wrapper-32">Date</div>
                              </div>
                            </div>
                            <img className="vector-3" alt="Vector" src="/img/vector-8.svg" />
                            <img className="vector-4" alt="Vector" src="/img/vector-9-2.svg" />
                          </div>
                          <img className="vector-5" alt="Vector" src="/img/vector-1-1-2.svg" />
                        </div>
                      </div>
                      <div className="rectangle-13" />
                      <div className="rectangle-14" />
                      <img className="image-5" alt="Imagedfsg" src="/img/image-917-1.png" />
                    </div>
                  </div>
                  <div className="header-2">
                    <div className="overlap-14">
                      <div className="rectangle-15" />
                      <img
                        className="unsplash-nsmseuhuoeu-2"
                        alt="Unsplash nsmseuhuoeu"
                        src="/img/unsplash-nsmseuhuoeu-2.png"
                      />
                      <div className="context-6">
                        <div className="context-7">
                          <div className="overlap-15">
                            <p className="slogans-3">
                              <span className="text-wrapper">Your </span>
                              <span className="span">
                                Passport <br />
                              </span>
                              <span className="text-wrapper">to</span>
                              <span className="span">&nbsp;</span>
                              <span className="text-wrapper">Global </span>
                              <span className="span">Connections</span>
                            </p>
                            <div className="searcging-tools-3">
                              <div className="overlap-group-14">
                                <button className="button-search-5">
                                  <div className="text-wrapper-33">Submit</div>
                                </button>
                                <div className="text-wrapper-34">Location</div>
                                <div className="text-wrapper-35">Travel Type</div>
                                <div className="text-wrapper-36">Date</div>
                              </div>
                            </div>
                            <img className="vector-6" alt="Vector" src="/img/vector-10.svg" />
                          </div>
                          <img className="vector-7" alt="Vector" src="/img/vector-1-2.svg" />
                        </div>
                      </div>
                      <div className="rectangle-16" />
                      <div className="rectangle-17" />
                      <img className="image-6" alt="Imagedsf" src="/img/image-917-1.png" />
                    </div>
                  </div>
                </div>
                <div className="partners-2">
                  <img className="image-7" alt="Imagefsd" src="/img/image-909-1.png" />
                  <img className="mask-group" alt="Mask group" src="/img/mask-group-8-2x.png" />
                  <img className="mask-group-6" alt="Mask group" src="/img/mask-group-6.png" />
                  <img className="mask-group-3" alt="Mask group" src="/img/mask-group-14.png" />
                  <img className="image-8" alt="Imagefdsa" src="/img/image-912-1.png" />
                </div>
                <div className="frame-2">
                  <div className="romantic-tropical-2">
                    <div className="illustration-3">
                      <div className="overlap-group-15">
                        <img className="rectangle-18" alt="Rectangle" src="/img/rectangle-10-1-2.svg" />
                        <img className="mask-group-7" alt="Mask group" src="/img/mask-group-7.png" />
                      </div>
                    </div>
                    <div className="context-8">
                      <div className="text-wrapper-37">TRAVEL TOGETHER</div>
                      <div className="text-wrapper-38">Meet Your Travel Buddy</div>
                      <div className="button-search-6" />
                      <p className="et-labore-harum-non">
                        Et labore harum non nobis ipsum eum molestias <br />
                        mollitia et corporis praesentium a laudantium <br />
                        internos. Non quis eius quo eligendi corrupt
                        <br />i et fugiat nulla qui soluta recusandae in <br />
                        maxime quasi aut ducimus illum aut optio
                        <br /> quibusdam!
                      </p>
                    </div>
                  </div>
                  <div className="frame-3">
                    <img
                      className="element"
                      alt="Element"
                      src="/img/185300490-315197993517185-186873365800792217-n-3.png"
                    />
                    <img
                      className="element-2"
                      alt="Element"
                      src="/img/174863265-741582756515177-2727149761201437678-n-1.png"
                    />
                    <img
                      className="element-3"
                      alt="Element"
                      src="/img/185300490-315197993517185-186873365800792217-n-6.png"
                    />
                    <img className="vector-8" alt="Vector" src="/img/vector-17.svg" />
                    <div className="frame-4" />
                  </div>
                </div>
              </>
            )}

            {((screenWidth >= 1512 && screenWidth < 1920) || screenWidth < 1024) && (
              <div
                className="overlap-16"
                style={{
                  height:
                    screenWidth < 1024 ? "385px" : screenWidth >= 1512 && screenWidth < 1920 ? "401px" : undefined,
                  width: screenWidth < 1024 ? "227px" : undefined,
                }}
              >
                <div
                  className="CATEGORY"
                  style={{
                    color: screenWidth < 1024 ? "#5d17b0" : undefined,
                    fontFamily: screenWidth < 1024 ? "'Poppins', Helvetica" : undefined,
                    fontSize: screenWidth < 1024 ? "18px" : undefined,
                    fontWeight: screenWidth < 1024 ? "600" : undefined,
                    height: screenWidth >= 1512 && screenWidth < 1920 ? "399px" : undefined,
                    left: screenWidth < 1024 ? "52px" : screenWidth >= 1512 && screenWidth < 1920 ? "0" : undefined,
                    letterSpacing: screenWidth < 1024 ? "0" : undefined,
                    lineHeight: screenWidth < 1024 ? "normal" : undefined,
                    textAlign: screenWidth < 1024 ? "center" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1512 && screenWidth < 1920 ? "893px" : undefined,
                  }}
                >
                  {screenWidth < 1024 && <>CATEGORY</>}

                  {screenWidth >= 1512 && screenWidth < 1920 && (
                    <div className="overlap-17">
                      <img className="rectangle-19" alt="Rectangle" src="/img/rectangle-19301.png" />
                      <div className="rectangle-20" />
                      <div className="group-8">
                        <div className="overlap-group-16">
                          <img className="line-6" alt="Line" src="/img/line-3-4.svg" />
                          <div className="text-wrapper-39">Explore Nature</div>
                          <div className="promotion-3">PROMOTION</div>
                        </div>
                        <div className="button-search-7">
                          <div className="text-wrapper-8">View Packages</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="we-offer-best"
                  style={{
                    backgroundImage:
                      screenWidth >= 1512 && screenWidth < 1920 ? "url(/img/rectangle-19302.png)" : undefined,
                    backgroundSize: screenWidth >= 1512 && screenWidth < 1920 ? "100% 100%" : undefined,
                    color: screenWidth < 1024 ? "#181e4b" : undefined,
                    fontFamily: screenWidth < 1024 ? "'Volkhov', Helvetica" : undefined,
                    fontSize: screenWidth < 1024 ? "50px" : undefined,
                    fontWeight: screenWidth < 1024 ? "700" : undefined,
                    height: screenWidth >= 1512 && screenWidth < 1920 ? "399px" : undefined,
                    left: screenWidth < 1024 ? "0" : screenWidth >= 1512 && screenWidth < 1920 ? "726px" : undefined,
                    letterSpacing: screenWidth < 1024 ? "0" : undefined,
                    lineHeight: screenWidth < 1024 ? "normal" : undefined,
                    textAlign: screenWidth < 1024 ? "center" : undefined,
                    top: screenWidth < 1024 ? "78px" : screenWidth >= 1512 && screenWidth < 1920 ? "2px" : undefined,
                    width:
                      screenWidth < 1024 ? "227px" : screenWidth >= 1512 && screenWidth < 1920 ? "791px" : undefined,
                  }}
                >
                  {screenWidth < 1024 && <>We Offer Best Services</>}

                  {screenWidth >= 1512 && screenWidth < 1920 && (
                    <div className="group-wrapper">
                      <div className="group-9">
                        <div className="overlap-group-17">
                          <img className="line-7" alt="Line" src="/img/line-8-2.svg" />
                          <div className="text-wrapper-40">Explore Cities</div>
                          <div className="promotion-4">PROMOTION</div>
                        </div>
                        <div className="button-search-8">
                          <div className="text-wrapper-8">View Packages</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {screenWidth >= 1920 && (
              <div className="explore-cities-2">
                <div className="group-wrapper">
                  <div className="group-10">
                    <div className="overlap-group-18">
                      <img className="line-8" alt="Line" src="/img/line-8.svg" />
                      <div className="text-wrapper-14">Explore Cities</div>
                      <div className="promotion-2">PROMOTION</div>
                    </div>
                    <div className="button-search-4">
                      <div className="text-wrapper-8">View Packages</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {screenWidth >= 1024 && screenWidth < 1512 && (
            <>
              <img className="palz-big-leaves-2" alt="Palz big leaves" src="/img/palz-big-leaves.png" />
              <img className="vector-9" alt="Vector" src="/img/vector-7.svg" />
              <img className="nomads-luggage-2" alt="Nomads luggage" src="/img/nomads-luggage-travel.png" />
            </>
          )}

          {((screenWidth >= 1512 && screenWidth < 1920) || screenWidth >= 1920) && (
            <>
              <div
                className="europe-sightseeing-2"
                style={{
                  height:
                    screenWidth >= 1512 && screenWidth < 1920 ? "725px" : screenWidth >= 1920 ? "751px" : undefined,
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "15px" : screenWidth >= 1920 ? "320px" : undefined,
                  top:
                    screenWidth >= 1512 && screenWidth < 1920 ? "4093px" : screenWidth >= 1920 ? "4078px" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1504px" : screenWidth >= 1920 ? "1415px" : undefined,
                }}
              >
                <div
                  className="context-9"
                  style={{
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "367px" : screenWidth >= 1920 ? "380px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "685px" : screenWidth >= 1920 ? "645px" : undefined,
                  }}
                >
                  <div
                    className="travel-packages-2"
                    style={{
                      width: screenWidth >= 1512 && screenWidth < 1920 ? "207px" : undefined,
                    }}
                  >
                    TRAVEL PACKAGES
                  </div>
                  <p
                    className="text-wrapper-41"
                    style={{
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "28px" : screenWidth >= 1920 ? "29px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "679px" : screenWidth >= 1920 ? "639px" : undefined,
                    }}
                  >
                    We Have the BEST Travel Packages
                  </p>
                  <div
                    className="button-search-9"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "54px" : screenWidth >= 1920 ? "56px" : undefined,
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "313px" : screenWidth >= 1920 ? "324px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "188px" : screenWidth >= 1920 ? "177px" : undefined,
                    }}
                    onClick={handleHotelNavigate}
                  >
                    <div className="text-wrapper-8">Explore Places</div>
                  </div>
                  <p
                    className="text-wrapper-42"
                    style={{
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "183px" : screenWidth >= 1920 ? "190px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "610px" : screenWidth >= 1920 ? "574px" : undefined,
                    }}
                  >
                    Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                    internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi
                    aut ducimus illum aut optio quibusdam!
                  </p>
                </div>
                <div
                  className="illustration-4"
                  style={{
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "686px" : screenWidth >= 1920 ? "711px" : undefined,
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "989px" : screenWidth >= 1920 ? "931px" : undefined,
                    top: screenWidth >= 1512 && screenWidth < 1920 ? "39px" : screenWidth >= 1920 ? "40px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "515px" : screenWidth >= 1920 ? "484px" : undefined,
                  }}
                >
                  <div
                    className="overlap-group-19"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "687px" : screenWidth >= 1920 ? "712px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "516px" : screenWidth >= 1920 ? "485px" : undefined,
                    }}
                  >
                    <img
                      className="rectangle-21"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "687px"
                            : screenWidth >= 1920
                            ? "712px"
                            : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "508px"
                            : screenWidth >= 1920
                            ? "478px"
                            : undefined,
                      }}
                      alt="Rectangle"
                      src={
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "/img/rectangle-19299-2.svg"
                          : screenWidth >= 1920
                          ? "/img/rectangle-19299.svg"
                          : undefined
                      }
                    />
                    <img
                      className="mask-group-8"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "667px"
                            : screenWidth >= 1920
                            ? "691px"
                            : undefined,
                        left:
                          screenWidth >= 1512 && screenWidth < 1920 ? "10px" : screenWidth >= 1920 ? "9px" : undefined,
                        top:
                          screenWidth >= 1512 && screenWidth < 1920 ? "20px" : screenWidth >= 1920 ? "21px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "506px"
                            : screenWidth >= 1920
                            ? "476px"
                            : undefined,
                      }}
                      alt="Mask group"
                      src={
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "/img/mask-group-10.png"
                          : screenWidth >= 1920
                          ? "/img/image.png"
                          : undefined
                      }
                    />
                  </div>
                </div>
                <div
                  className="destination-4"
                  style={{
                    backgroundImage:
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "url(/img/rectangle-19295-2-2x.png)"
                        : screenWidth >= 1920
                        ? "url(/img/rectangle-19295-2.png)"
                        : undefined,
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "229px" : screenWidth >= 1920 ? "237px" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "445px" : screenWidth >= 1920 ? "461px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "245px" : screenWidth >= 1920 ? "231px" : undefined,
                  }}
                >
                  <div
                    className="group-11"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "34px" : screenWidth >= 1920 ? "35px" : undefined,
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "140px" : screenWidth >= 1920 ? "132px" : undefined,
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "14px" : screenWidth >= 1920 ? "15px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "90px" : screenWidth >= 1920 ? "85px" : undefined,
                    }}
                  >
                    <div
                      className="overlap-group-20"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920 ? "34px" : screenWidth >= 1920 ? "35px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920 ? "88px" : screenWidth >= 1920 ? "83px" : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-43"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "23px"
                              : screenWidth >= 1920
                              ? "22px"
                              : undefined,
                          width: screenWidth >= 1512 && screenWidth < 1920 ? "40px" : undefined,
                        }}
                      >
                        $700
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="destination-5"
                  style={{
                    backgroundImage:
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "url(/img/rectangle-19296-2-2x.png)"
                        : screenWidth >= 1920
                        ? "url(/img/rectangle-19296-2.png)"
                        : undefined,
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "229px" : screenWidth >= 1920 ? "237px" : undefined,
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "305px" : screenWidth >= 1920 ? "287px" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "445px" : screenWidth >= 1920 ? "461px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "245px" : screenWidth >= 1920 ? "231px" : undefined,
                  }}
                >
                  <div
                    className="group-12"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "34px" : screenWidth >= 1920 ? "35px" : undefined,
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "137px" : screenWidth >= 1920 ? "129px" : undefined,
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "14px" : screenWidth >= 1920 ? "15px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "90px" : screenWidth >= 1920 ? "85px" : undefined,
                    }}
                  >
                    <div
                      className="overlap-group-21"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920 ? "34px" : screenWidth >= 1920 ? "35px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920 ? "88px" : screenWidth >= 1920 ? "83px" : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-44"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "23px"
                              : screenWidth >= 1920
                              ? "22px"
                              : undefined,
                          width: screenWidth >= 1512 && screenWidth < 1920 ? "42px" : undefined,
                        }}
                      >
                        $800
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="destination-6"
                  style={{
                    backgroundImage:
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "url(/img/rectangle-19297-2.png)"
                        : screenWidth >= 1920
                        ? "url(/img/rectangle-19297-2-2x.png)"
                        : undefined,
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "229px" : screenWidth >= 1920 ? "237px" : undefined,
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "610px" : screenWidth >= 1920 ? "574px" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "445px" : screenWidth >= 1920 ? "461px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "245px" : screenWidth >= 1920 ? "231px" : undefined,
                  }}
                >
                  <div
                    className="group-13"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "34px" : screenWidth >= 1920 ? "35px" : undefined,
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "134px" : screenWidth >= 1920 ? "126px" : undefined,
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "14px" : screenWidth >= 1920 ? "15px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "90px" : screenWidth >= 1920 ? "85px" : undefined,
                    }}
                  >
                    <div
                      className="overlap-group-22"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920 ? "34px" : screenWidth >= 1920 ? "35px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920 ? "88px" : screenWidth >= 1920 ? "83px" : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-45"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "23px"
                              : screenWidth >= 1920
                              ? "22px"
                              : undefined,
                          width: screenWidth >= 1512 && screenWidth < 1920 ? "42px" : undefined,
                        }}
                      >
                        $500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overlap-18"
                style={{
                  height:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1119px" : screenWidth >= 1920 ? "1014px" : undefined,
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "2px" : screenWidth >= 1920 ? "0" : undefined,
                  top:
                    screenWidth >= 1512 && screenWidth < 1920 ? "2788px" : screenWidth >= 1920 ? "2893px" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1517px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                <div
                  className="sepratir-2"
                  style={{
                    backgroundImage: screenWidth >= 1920 ? "url(/img/rectangle-19294-1.png)" : undefined,
                    backgroundSize: screenWidth >= 1920 ? "100% 100%" : undefined,
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "414px" : screenWidth >= 1920 ? "399px" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "705px" : screenWidth >= 1920 ? "615px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1517px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <div
                    className="overlap-19"
                    style={{
                      backgroundImage:
                        screenWidth >= 1512 && screenWidth < 1920 ? "url(/img/rectangle-19294-1.png)" : undefined,
                      backgroundSize: screenWidth >= 1512 && screenWidth < 1920 ? "100% 100%" : undefined,
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "414px" : screenWidth >= 1920 ? "185px" : undefined,
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "5px" : screenWidth >= 1920 ? "388px" : undefined,
                      top: screenWidth >= 1920 ? "135px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "1512px"
                          : screenWidth >= 1920
                          ? "637px"
                          : undefined,
                    }}
                  >
                    <div
                      className="group-14"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "192px"
                            : screenWidth >= 1920
                            ? "165px"
                            : undefined,
                        left: screenWidth >= 1512 && screenWidth < 1920 ? "301px" : undefined,
                        top: screenWidth >= 1512 && screenWidth < 1920 ? "140px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "503px"
                            : screenWidth >= 1920
                            ? "634px"
                            : undefined,
                      }}
                    >
                      {screenWidth >= 1512 && screenWidth < 1920 && (
                        <div className="overlap-group-23">
                          <p className="heading-4">
                            Let’s Make Your <br />
                            next Holiday Amazing
                          </p>
                          <img className="line-9" alt="Line" src="/img/line-1-2.svg" />
                        </div>
                      )}

                      {screenWidth >= 1920 && (
                        <>
                          <p className="heading-5">
                            Let’s Make Your <br />
                            next Holiday Amazing
                          </p>
                          <img className="line-10" alt="Line" src="/img/line-1.svg" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="book-a-trip-2"
                  style={{
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "26px" : screenWidth >= 1920 ? "277px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1187px" : screenWidth >= 1920 ? "1165px" : undefined,
                  }}
                >
                  <div
                    className="illustration-5"
                    style={{
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "766px" : screenWidth >= 1920 ? "752px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "421px" : screenWidth >= 1920 ? "413px" : undefined,
                    }}
                  >
                    <div className="illustration-2">
                      <div
                        className="overlap-20"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "421px"
                              : screenWidth >= 1920
                              ? "413px"
                              : undefined,
                        }}
                      >
                        <div
                          className="group-15"
                          style={{
                            borderRadius:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "180.34px/183.5px"
                                : screenWidth >= 1920
                                ? "177px/183.5px"
                                : undefined,
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "361px"
                                : screenWidth >= 1920
                                ? "354px"
                                : undefined,
                          }}
                        />
                        <div
                          className="image-9"
                          style={{
                            left:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "44px"
                                : screenWidth >= 1920
                                ? "43px"
                                : undefined,
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "377px"
                                : screenWidth >= 1920
                                ? "370px"
                                : undefined,
                          }}
                        >
                          <div
                            className="overlap-21"
                            style={{
                              width:
                                screenWidth >= 1512 && screenWidth < 1920
                                  ? "385px"
                                  : screenWidth >= 1920
                                  ? "378px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="group-16"
                              style={{
                                width:
                                  screenWidth >= 1512 && screenWidth < 1920
                                    ? "385px"
                                    : screenWidth >= 1920
                                    ? "378px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="overlap-group-24"
                                style={{
                                  width:
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "377px"
                                      : screenWidth >= 1920
                                      ? "370px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="OPTIONS-2"
                                  style={{
                                    left:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "29px"
                                        : screenWidth >= 1920
                                        ? "28px"
                                        : undefined,
                                    width:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "142px"
                                        : screenWidth >= 1920
                                        ? "139px"
                                        : undefined,
                                  }}
                                >
                                  <div
                                    className="leaf-wrapper"
                                    style={{
                                      borderRadius:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "18.34px/18px"
                                          : screenWidth >= 1920
                                          ? "18px"
                                          : undefined,
                                      width:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "37px"
                                          : screenWidth >= 1920
                                          ? "36px"
                                          : undefined,
                                    }}
                                  >
                                    <img
                                      className="img-3"
                                      alt="Leaf"
                                      src={
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "/img/leaf-1-2.svg"
                                          : screenWidth >= 1920
                                          ? "/img/leaf-1.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  <div
                                    className="send-wrapper"
                                    style={{
                                      borderRadius:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "18.34px/18px"
                                          : screenWidth >= 1920
                                          ? "18px"
                                          : undefined,
                                      left:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "105px"
                                          : screenWidth >= 1920
                                          ? "103px"
                                          : undefined,
                                      width:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "37px"
                                          : screenWidth >= 1920
                                          ? "36px"
                                          : undefined,
                                    }}
                                  >
                                    <img
                                      className="img-3"
                                      alt="Send"
                                      src={
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "/img/send-2-2.svg"
                                          : screenWidth >= 1920
                                          ? "/img/send-2.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                  <div
                                    className="map-wrapper"
                                    style={{
                                      borderRadius:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "18.34px/18px"
                                          : screenWidth >= 1920
                                          ? "18px"
                                          : undefined,
                                      left:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "55px"
                                          : screenWidth >= 1920
                                          ? "54px"
                                          : undefined,
                                      width:
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "37px"
                                          : screenWidth >= 1920
                                          ? "36px"
                                          : undefined,
                                    }}
                                  >
                                    <img
                                      className="map-2"
                                      alt="Map"
                                      src={
                                        screenWidth >= 1512 && screenWidth < 1920
                                          ? "/img/map-1-2.svg"
                                          : screenWidth >= 1920
                                          ? "/img/map-1.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                </div>
                                <img
                                  className="building-2"
                                  alt="Building"
                                  src={
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "/img/building-1-2-2x.png"
                                      : screenWidth >= 1920
                                      ? "/img/building-1-1-2x.png"
                                      : undefined
                                  }
                                />
                                <div
                                  className="text-wrapper-46"
                                  style={{
                                    left:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "57px"
                                        : screenWidth >= 1920
                                        ? "56px"
                                        : undefined,
                                    whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                                    width: screenWidth >= 1512 && screenWidth < 1920 ? "195px" : undefined,
                                  }}
                                >
                                  60 people are interested
                                </div>
                                <div
                                  className="text-wrapper-47"
                                  style={{
                                    whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                                    width: screenWidth >= 1512 && screenWidth < 1920 ? "90px" : undefined,
                                  }}
                                >
                                  14-29 June
                                </div>
                                <div
                                  className="text-wrapper-48"
                                  style={{
                                    left:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "131px"
                                        : screenWidth >= 1920
                                        ? "129px"
                                        : undefined,
                                    whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                                    width: screenWidth >= 1512 && screenWidth < 1920 ? "120px" : undefined,
                                  }}
                                >
                                  by JR Martinax
                                </div>
                                <img
                                  className="rectangle-22"
                                  style={{
                                    width:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "327px"
                                        : screenWidth >= 1920
                                        ? "321px"
                                        : undefined,
                                  }}
                                  alt="Rectangle"
                                  src="/img/rectangle-17.png"
                                />
                                <div
                                  className="text-wrapper-49"
                                  style={{
                                    whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                                    width: screenWidth >= 1512 && screenWidth < 1920 ? "129px" : undefined,
                                  }}
                                >
                                  Trip to Hawaii
                                </div>
                                <img
                                  className="line-11"
                                  style={{
                                    left:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "118px"
                                        : screenWidth >= 1920
                                        ? "116px"
                                        : undefined,
                                  }}
                                  alt="Line"
                                  src={
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "/img/line-3-5-2.svg"
                                      : screenWidth >= 1920
                                      ? "/img/line-3-1.svg"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                            <img
                              className="heart-2"
                              style={{
                                left:
                                  screenWidth >= 1512 && screenWidth < 1920
                                    ? "331px"
                                    : screenWidth >= 1920
                                    ? "325px"
                                    : undefined,
                              }}
                              alt="Heart"
                              src={
                                screenWidth >= 1512 && screenWidth < 1920
                                  ? "/img/heart-6-1-2.png"
                                  : screenWidth >= 1920
                                  ? "/img/heart-6-1-1.png"
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="context-10"
                    style={{
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "663px" : screenWidth >= 1920 ? "651px" : undefined,
                    }}
                  >
                    <div
                      className="heading-6"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "667px"
                            : screenWidth >= 1920
                            ? "655px"
                            : undefined,
                      }}
                    >
                      <p
                        className="heading-7"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "663px"
                              : screenWidth >= 1920
                              ? "651px"
                              : undefined,
                        }}
                      >
                        One Stop Location For Booking Your Travel
                      </p>
                      <div
                        className="subheading-2"
                        style={{
                          width: screenWidth >= 1512 && screenWidth < 1920 ? "107px" : undefined,
                        }}
                      >
                        Fast &amp; Easy
                      </div>
                    </div>
                    <div
                      className="values-2"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "402px"
                            : screenWidth >= 1920
                            ? "395px"
                            : undefined,
                      }}
                    >
                      <div
                        className="value-3"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "406px"
                              : screenWidth >= 1920
                              ? "399px"
                              : undefined,
                        }}
                      >
                        <div
                          className="img-wrapper"
                          style={{
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "48px"
                                : screenWidth >= 1920
                                ? "47px"
                                : undefined,
                          }}
                        >
                          <img
                            className="selection-2"
                            alt="Selection"
                            src={
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "/img/selection-1.png"
                                : screenWidth >= 1920
                                ? "/img/selection-1-1.png"
                                : undefined
                            }
                          />
                        </div>
                        <div
                          className="text-wrapper-50"
                          style={{
                            left:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "69px"
                                : screenWidth >= 1920
                                ? "68px"
                                : undefined,
                            whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                            width: screenWidth >= 1512 && screenWidth < 1920 ? "164px" : undefined,
                          }}
                        >
                          Choose Destination
                        </div>
                        <p
                          className="lorem-ipsum-dolor-2"
                          style={{
                            left:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "69px"
                                : screenWidth >= 1920
                                ? "68px"
                                : undefined,
                            width: screenWidth >= 1512 && screenWidth < 1920 ? "333px" : undefined,
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                      <div
                        className="value-4"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "406px"
                              : screenWidth >= 1920
                              ? "399px"
                              : undefined,
                        }}
                      >
                        <p
                          className="lorem-ipsum-dolor-3"
                          style={{
                            left:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "69px"
                                : screenWidth >= 1920
                                ? "68px"
                                : undefined,
                            width: screenWidth >= 1512 && screenWidth < 1920 ? "333px" : undefined,
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                        <div
                          className="text-wrapper-51"
                          style={{
                            left:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "69px"
                                : screenWidth >= 1920
                                ? "68px"
                                : undefined,
                            whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                            width: screenWidth >= 1512 && screenWidth < 1920 ? "154px" : undefined,
                          }}
                        >
                          Check Availability
                        </div>
                        <div
                          className="group-17"
                          style={{
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "48px"
                                : screenWidth >= 1920
                                ? "47px"
                                : undefined,
                          }}
                        >
                          <img
                            className="water-sport-2"
                            alt="Water sport"
                            src={
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "/img/water-sport-1.png"
                                : screenWidth >= 1920
                                ? "/img/water-sport-1-2-2x.png"
                                : undefined
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="nomads-luggage-3"
                  style={{
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "346px" : screenWidth >= 1920 ? "436px" : undefined,
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1141px" : screenWidth >= 1920 ? "1150px" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "386px" : screenWidth >= 1920 ? "259px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "362px" : screenWidth >= 1920 ? "770px" : undefined,
                  }}
                  alt="Nomads luggage"
                  src="/img/nomads-luggage-travel.png"
                />
              </div>
              <div
                className="overlap-22"
                style={{
                  height:
                    screenWidth >= 1512 && screenWidth < 1920 ? "981px" : screenWidth >= 1920 ? "991px" : undefined,
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "181px" : undefined,
                  top:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1807px" : screenWidth >= 1920 ? "1805px" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1519px" : screenWidth >= 1920 ? "1877px" : undefined,
                }}
              >
                <div
                  className="romantic-tropical-3"
                  style={{
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "871px" : screenWidth >= 1920 ? "739px" : undefined,
                    top: screenWidth >= 1512 && screenWidth < 1920 ? "110px" : screenWidth >= 1920 ? "86px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1215px" : screenWidth >= 1920 ? "1422px" : undefined,
                  }}
                >
                  <div
                    className="overlap-23"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "871px" : screenWidth >= 1920 ? "739px" : undefined,
                      left: screenWidth >= 1512 && screenWidth < 1920 ? "7px" : screenWidth >= 1920 ? "0" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "568px" : screenWidth >= 1920 ? "672px" : undefined,
                    }}
                  >
                    <div
                      className="illustration-6"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "838px"
                            : screenWidth >= 1920
                            ? "711px"
                            : undefined,
                        left:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "147px"
                            : screenWidth >= 1920
                            ? "180px"
                            : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "421px"
                            : screenWidth >= 1920
                            ? "492px"
                            : undefined,
                      }}
                    >
                      <div
                        className="overlap-group-25"
                        style={{
                          height:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "839px"
                              : screenWidth >= 1920
                              ? "712px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "422px"
                              : screenWidth >= 1920
                              ? "493px"
                              : undefined,
                        }}
                      >
                        <img
                          className="rectangle-23"
                          style={{
                            height:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "839px"
                                : screenWidth >= 1920
                                ? "712px"
                                : undefined,
                            left:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "13px"
                                : screenWidth >= 1920
                                ? "15px"
                                : undefined,
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "409px"
                                : screenWidth >= 1920
                                ? "478px"
                                : undefined,
                          }}
                          alt="Rectangle"
                          src={
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "/img/rectangle-10-2.svg"
                              : screenWidth >= 1920
                              ? "/img/rectangle-10.svg"
                              : undefined
                          }
                        />
                        <img
                          className="mask-group-9"
                          style={{
                            height:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "814px"
                                : screenWidth >= 1920
                                ? "691px"
                                : undefined,
                            top:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "23px"
                                : screenWidth >= 1920
                                ? "20px"
                                : undefined,
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "407px"
                                : screenWidth >= 1920
                                ? "476px"
                                : undefined,
                          }}
                          alt="Mask group"
                          src={
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "/img/mask-group-11.png"
                              : screenWidth >= 1920
                              ? "/img/mask-group-7.png"
                              : undefined
                          }
                        />
                      </div>
                    </div>
                    <img
                      className="dayflow-chat-ok-2"
                      style={{
                        height:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "301px"
                            : screenWidth >= 1920
                            ? "255px"
                            : undefined,
                        top:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "570px"
                            : screenWidth >= 1920
                            ? "484px"
                            : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "221px"
                            : screenWidth >= 1920
                            ? "266px"
                            : undefined,
                      }}
                      alt="Dayflow chat ok"
                      src={
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "/img/dayflow-chat-ok-1.png"
                          : screenWidth >= 1920
                          ? "/img/dayflow-chat-ok.png"
                          : undefined
                      }
                    />
                  </div>
                  <div
                    className="context-11"
                    style={{
                      height:
                        screenWidth >= 1512 && screenWidth < 1920 ? "448px" : screenWidth >= 1920 ? "380px" : undefined,
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "717px" : screenWidth >= 1920 ? "839px" : undefined,
                      top:
                        screenWidth >= 1512 && screenWidth < 1920 ? "162px" : screenWidth >= 1920 ? "137px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "504px" : screenWidth >= 1920 ? "589px" : undefined,
                    }}
                  >
                    {screenWidth >= 1512 && screenWidth < 1920 && (
                      <div className="overlap-24">
                        <div className="text-wrapper-52">TRAVEL TOGETHER</div>
                        <div className="text-wrapper-53">Meet Your Travel Buddy</div>
                      </div>
                    )}

                    {screenWidth >= 1920 && (
                      <>
                        <div className="text-wrapper-54">TRAVEL TOGETHER</div>
                        <div className="text-wrapper-55">Meet Your Travel Buddy</div>
                      </>
                    )}
                 
                 <div
      className="button-search-10"
      style={{
        height: screenWidth >= 1512 && screenWidth < 1920 ? '66px' : screenWidth >= 1920 ? '56px' : undefined,
        top: screenWidth >= 1512 && screenWidth < 1920 ? '382px' : screenWidth >= 1920 ? '324px' : undefined,
        width: screenWidth >= 1512 && screenWidth < 1920 ? '131px' : screenWidth >= 1920 ? '153px' : undefined,
        position: 'relative',
        cursor: 'pointer', // Add this to make it look like a button
      }}
      onClick={handleButtonClick} // Add the onClick event handler
    >
      <br />
      <span className='span112'>
        Explore Matching
      </span>
    </div>

                    <p
                      className="text-wrapper-56"
                      style={{
                        top:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "224px"
                            : screenWidth >= 1920
                            ? "190px"
                            : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "498px"
                            : screenWidth >= 1920
                            ? "583px"
                            : undefined,
                      }}
                    >
                      Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                      internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime
                      quasi aut ducimus illum aut optio quibusdam!
                    </p>
                  </div>
                </div>
                <div
                  className="frame-5"
                  style={{
                    alignItems: screenWidth >= 1512 && screenWidth < 1920 ? "flex-start" : undefined,
                    display: screenWidth >= 1512 && screenWidth < 1920 ? "flex" : undefined,
                    flexWrap: screenWidth >= 1512 && screenWidth < 1920 ? "wrap" : undefined,
                    gap: screenWidth >= 1512 && screenWidth < 1920 ? "58px 156px" : undefined,
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "221px" : screenWidth >= 1920 ? "341px" : undefined,
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "589px" : screenWidth >= 1920 ? "453px" : undefined,
                    overflow: screenWidth >= 1512 && screenWidth < 1920 ? "hidden" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "760px" : screenWidth >= 1920 ? "650px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "930px" : screenWidth >= 1920 ? "1424px" : undefined,
                  }}
                >
                  {screenWidth >= 1512 && screenWidth < 1920 && (
                    <>
                      <img
                        className="element"
                        alt="Element"
                        src="/img/185300490-315197993517185-186873365800792217-n-3.png"
                      />
                      <img
                        className="element-2"
                        alt="Element"
                        src="/img/174863265-741582756515177-2727149761201437678-n-1.png"
                      />
                      <img
                        className="element-3"
                        alt="Element"
                        src="/img/185300490-315197993517185-186873365800792217-n-6.png"
                      />
                      <img className="vector-10" alt="Vector" src="/img/vector-12-2.svg" />
                      <div className="frame-6" />
                    </>
                  )}

                  {screenWidth >= 1920 && (
                    <>
                      <img className="vector-11" alt="Vector" src="/img/vector-2.svg" />
                      <img
                        className="element-4"
                        alt="Element"
                        src="/img/185300490-315197993517185-186873365800792217-n-3.png"
                      />
                      <img
                        className="element-5"
                        alt="Element"
                        src="/img/185300490-315197993517185-186873365800792217-n-6.png"
                      />
                      <img
                        className="element-6"
                        alt="Element"
                        src="/img/174863265-741582756515177-2727149761201437678-n-1.png"
                      />
                    </>
                  )}
                </div>
                <img
                  className="palz-big-leaves-3"
                  style={{
                    left: screenWidth >= 1512 && screenWidth < 1920 ? "16px" : screenWidth >= 1920 ? "20px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "195px" : screenWidth >= 1920 ? "307px" : undefined,
                  }}
                  alt="Palz big leaves"
                  src={
                    screenWidth >= 1512 && screenWidth < 1920
                      ? "/img/palz-big-leaves-2.png"
                      : screenWidth >= 1920
                      ? "/img/palz-big-leaves.png"
                      : undefined
                  }
                />
              </div>
              <div
                className="best-service-2"
                style={{
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "417px" : undefined,
                  top:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1290px" : screenWidth >= 1920 ? "1291px" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1252px" : screenWidth >= 1920 ? "1079px" : undefined,
                }}
              >
                <div
                  className="title-2"
                  style={{
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "339px" : screenWidth >= 1920 ? "292px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "638px" : screenWidth >= 1920 ? "551px" : undefined,
                  }}
                >
                  <div
                    className="text-wrapper-57"
                    style={{
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "260px" : screenWidth >= 1920 ? "224px" : undefined,
                      width: screenWidth >= 1512 && screenWidth < 1920 ? "114px" : undefined,
                    }}
                  >
                    CATEGORY
                  </div>
                  <div
                    className="text-wrapper-58"
                    style={{
                      width: screenWidth >= 1512 && screenWidth < 1920 ? "634px" : undefined,
                    }}
                  >
                    We Offer Best Services
                  </div>
                </div>
                <div
                  className="services-2"
                  style={{
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1252px" : screenWidth >= 1920 ? "1079px" : undefined,
                  }}
                >
                  <div
                    className="guided-tours-2"
                    style={{
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "230px" : screenWidth >= 1920 ? "199px" : undefined,
                    }}
                  >
                    <div
                      className="overlap-group-26"
                      style={{
                        left:
                          screenWidth >= 1512 && screenWidth < 1920 ? "70px" : screenWidth >= 1920 ? "60px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "101px"
                            : screenWidth >= 1920
                            ? "87px"
                            : undefined,
                      }}
                    >
                      <div
                        className="rectangle-24"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "43px"
                              : screenWidth >= 1920
                              ? "37px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "58px"
                              : screenWidth >= 1920
                              ? "50px"
                              : undefined,
                        }}
                      />
                      <img
                        className="tour-guide-2"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "84px"
                              : screenWidth >= 1920
                              ? "72px"
                              : undefined,
                        }}
                        alt="Tour guide"
                        src="/img/tour-guide-1-1.png"
                      />
                    </div>
                    <p
                      className="text-wrapper-59"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "226px"
                            : screenWidth >= 1920
                            ? "195px"
                            : undefined,
                      }}
                    >
                      sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                    </p>
                    <div
                      className="text-wrapper-60"
                      style={{
                        left:
                          screenWidth >= 1512 && screenWidth < 1920 ? "35px" : screenWidth >= 1920 ? "30px" : undefined,
                        width: screenWidth >= 1512 && screenWidth < 1920 ? "157px" : undefined,
                      }}
                    >
                      Guided Tours
                    </div>
                  </div>
                  <div
                    className="best-flight-options-2"
                    style={{
                      left:
                        screenWidth >= 1512 && screenWidth < 1920 ? "455px" : screenWidth >= 1920 ? "392px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "354px" : screenWidth >= 1920 ? "306px" : undefined,
                    }}
                  >
                    <div
                      className="overlap-25"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "350px"
                            : screenWidth >= 1920
                            ? "302px"
                            : undefined,
                      }}
                    >
                      <img
                        className="rectangle-25"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "116px"
                              : screenWidth >= 1920
                              ? "100px"
                              : undefined,
                        }}
                        alt="Rectangle"
                        src={
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "/img/rectangle-157-2.svg"
                            : screenWidth >= 1920
                            ? "/img/rectangle-157-3.svg"
                            : undefined
                        }
                      />
                      <div
                        className="rectangle-26"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "41px"
                              : screenWidth >= 1920
                              ? "35px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "310px"
                              : screenWidth >= 1920
                              ? "267px"
                              : undefined,
                        }}
                      />
                      <p
                        className="text-wrapper-61"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "81px"
                              : screenWidth >= 1920
                              ? "70px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "231px"
                              : screenWidth >= 1920
                              ? "199px"
                              : undefined,
                        }}
                      >
                        sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                      </p>
                      <div
                        className="rectangle-27"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "153px"
                              : screenWidth >= 1920
                              ? "132px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "58px"
                              : screenWidth >= 1920
                              ? "50px"
                              : undefined,
                        }}
                      />
                      <div
                        className="text-wrapper-62"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "80px"
                              : screenWidth >= 1920
                              ? "69px"
                              : undefined,
                          width: screenWidth >= 1512 && screenWidth < 1920 ? "232px" : undefined,
                        }}
                      >
                        Best Flights Options
                      </div>
                      <img
                        className="travelling-2"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "166px"
                              : screenWidth >= 1920
                              ? "143px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "107px"
                              : screenWidth >= 1920
                              ? "92px"
                              : undefined,
                        }}
                        alt="Travelling"
                        src="/img/travelling-1-1.png"
                      />
                    </div>
                  </div>
                  <div
                    className="medical-insurance-2"
                    style={{
                      left:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "1034px"
                          : screenWidth >= 1920
                          ? "891px"
                          : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "222px" : screenWidth >= 1920 ? "192px" : undefined,
                    }}
                  >
                    <div
                      className="overlap-26"
                      style={{
                        left:
                          screenWidth >= 1512 && screenWidth < 1920 ? "67px" : screenWidth >= 1920 ? "58px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "100px"
                            : screenWidth >= 1920
                            ? "86px"
                            : undefined,
                      }}
                    >
                      <div
                        className="rectangle-28"
                        style={{
                          left:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "42px"
                              : screenWidth >= 1920
                              ? "36px"
                              : undefined,
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "58px"
                              : screenWidth >= 1920
                              ? "50px"
                              : undefined,
                        }}
                      />
                      <img
                        className="medical-team-2"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "84px"
                              : screenWidth >= 1920
                              ? "72px"
                              : undefined,
                        }}
                        alt="Medical team"
                        src="/img/medical-team-1-1.png"
                      />
                    </div>
                    <p
                      className="text-wrapper-63"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "217px"
                            : screenWidth >= 1920
                            ? "187px"
                            : undefined,
                      }}
                    >
                      sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                    </p>
                    <div
                      className="text-wrapper-64"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "218px"
                            : screenWidth >= 1920
                            ? "188px"
                            : undefined,
                      }}
                    >
                      Medical insurance
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overlap-27"
                style={{
                  height:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1178px" : screenWidth >= 1920 ? "1180px" : undefined,
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "2px" : screenWidth >= 1920 ? "0" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1517px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                <header
                  className="header-3"
                  style={{
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1517px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <div
                    className="overlap-28"
                    style={{
                      width:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "1517px"
                          : screenWidth >= 1920
                          ? "1920px"
                          : undefined,
                    }}
                  >
                    <div
                      className="rectangle-29"
                      style={{
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "1517px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                      }}
                    />
                    <img
                      className="unsplash-nsmseuhuoeu-3"
                      style={{
                        
                        height:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "950px"
                            : screenWidth >= 1920
                            ? "800px"
                            : undefined,
                        left: screenWidth >= 1512 && screenWidth < 1920 ? "5px" : screenWidth >= 1920 ? "0" : undefined,
                        top: screenWidth >= 1512 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "4px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "1512px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                      }}
                      alt="Unsplash nsmseuhuoeu"
                      src="/img/unsplash-nsmseuhuoeu-2.png"
                    />
                    <div
                      className="context-12"
                      style={{
                        left:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "143px"
                            : screenWidth >= 1920
                            ? "181px"
                            : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "667px"
                            : screenWidth >= 1920
                            ? "844px"
                            : undefined,
                      }}
                    >
                      <div
                        className="context-13"
                        style={{
                          width:
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "669px"
                              : screenWidth >= 1920
                              ? "846px"
                              : undefined,
                        }}
                      >
                        <div
                          className="overlap-29"
                          style={{
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "673px"
                                : screenWidth >= 1920
                                ? "850px"
                                : undefined,
                          }}
                        >
                          <p
                            className="slogans-4"
                            style={{
                              width:
                                screenWidth >= 1512 && screenWidth < 1920
                                  ? "440px"
                                  : screenWidth >= 1920
                                  ? "557px"
                                  : undefined,
                            }}
                          >
                            <span className="text-wrapper">Your </span>
                            <span className="span">
                              Passport <br />
                            </span>
                            <span className="text-wrapper">to</span>
                            <span className="span">&nbsp;</span>
                            <span className="text-wrapper">Global </span>
                            <span className="span">Connections</span>
                          </p>
                          <div
                            className="searcging-tools-4"
                            style={{
                              width:
                                screenWidth >= 1512 && screenWidth < 1920
                                  ? "673px"
                                  : screenWidth >= 1920
                                  ? "850px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="overlap-group-27"
                              style={{
                                width:
                                  screenWidth >= 1512 && screenWidth < 1920
                                    ? "667px"
                                    : screenWidth >= 1920
                                    ? "844px"
                                    : undefined,
                              }}
                            >
                              <button onClick={handleHotelNavigate}
                                className="button-search-11"
                                style={{
                                  left:
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "506px"
                                      : screenWidth >= 1920
                                      ? "640px"
                                      : undefined,
                                  width:
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "300px"
                                      : screenWidth >= 1920
                                      ? "177px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="text-wrapper-65"
                                  style={{
                                    left:
                                      screenWidth >= 1512 && screenWidth < 1920
                                        ? "39px"
                                        : screenWidth >= 1920
                                        ? "57px"
                                        : undefined,
                                  }}
                                >
                                  Explore Places 
                                </div>
                              </button>
                              <div
                                className="text-wrapper-66"
                                style={{
                                  left:
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "26px"
                                      : screenWidth >= 1920
                                      ? "33px"
                                      : undefined,
                                  width: screenWidth >= 1512 && screenWidth < 1920 ? "63px" : undefined,
                                }}
                              >
                              
                              </div>
                              <div
                                className="text-wrapper-67"
                                style={{
                                  left:
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "185px"
                                      : screenWidth >= 1920
                                      ? "234px"
                                      : undefined,
                                  width: screenWidth >= 1512 && screenWidth < 1920 ? "85px" : undefined,
                                }}
                              >
                           
                              </div>
                              <div
                                className="text-wrapper-68"
                                style={{
                                  left:
                                    screenWidth >= 1512 && screenWidth < 1920
                                      ? "374px"
                                      : screenWidth >= 1920
                                      ? "473px"
                                      : undefined,
                                  width: screenWidth >= 1512 && screenWidth < 1920 ? "36px" : undefined,
                                }}
                              >
                          
                              </div>
                            </div>
                          </div>
                          
                          
                        </div>
                        <img
                          className="vector-14"
                          style={{
                            height:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "16px"
                                : screenWidth >= 1920
                                ? "17px"
                                : undefined,
                            top:
                              screenWidth >= 1512 && screenWidth < 1920 ? "1px" : screenWidth >= 1920 ? "0" : undefined,
                            width:
                              screenWidth >= 1512 && screenWidth < 1920
                                ? "67px"
                                : screenWidth >= 1920
                                ? "83px"
                                : undefined,
                          }}
                          alt="Vector"
                          src={
                            screenWidth >= 1512 && screenWidth < 1920
                              ? "/img/vector-1-3.svg"
                              : screenWidth >= 1920
                              ? "/img/vector-1-1.svg"
                              : undefined
                          }
                        />
                      </div>
                    </div>
                   
                    
                    <img
                      className="image-10"
                      style={{
                        left:
                          screenWidth >= 1512 && screenWidth < 1920 ? "75px" : screenWidth >= 1920 ? "95px" : undefined,
                        width:
                          screenWidth >= 1512 && screenWidth < 1920
                            ? "189px"
                            : screenWidth >= 1920
                            ? "239px"
                            : undefined,
                      }}
                      alt="Imagedasd"
                      src="/img/image-917.png"
                    />
                  </div>
                </header>
                <div
                  className="partners-3"
                  style={{
                    alignItems: screenWidth >= 1512 && screenWidth < 1920 ? "flex-end" : undefined,
                    display: screenWidth >= 1512 && screenWidth < 1920 ? "flex" : undefined,
                    gap: screenWidth >= 1512 && screenWidth < 1920 ? "101px" : undefined,
                    height:
                      screenWidth >= 1512 && screenWidth < 1920 ? "198px" : screenWidth >= 1920 ? "200px" : undefined,
                    padding: screenWidth >= 1512 && screenWidth < 1920 ? "74px 171px 74px 125px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1517px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <img
                    className="image-11"
                    style={{
                      left: screenWidth >= 1920 ? "837px" : undefined,
                      objectFit: screenWidth >= 1512 && screenWidth < 1920 ? "cover" : undefined,
                      position:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "relative"
                          : screenWidth >= 1920
                          ? "absolute"
                          : undefined,
                      top: screenWidth >= 1920 ? "75px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "143.38px"
                          : screenWidth >= 1920
                          ? "160px"
                          : undefined,
                    }}
                    alt="Imagesdfa"
                    src={
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "/img/image-909-1.png"
                        : screenWidth >= 1920
                        ? "/img/mask-group-6.png"
                        : undefined
                    }
                  />
                  <img
                    className="mask-group-10"
                    style={{
                      left: screenWidth >= 1920 ? "493px" : undefined,
                      position:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "relative"
                          : screenWidth >= 1920
                          ? "absolute"
                          : undefined,
                      top: screenWidth >= 1920 ? "75px" : undefined,
                    }}
                    alt="Mask group"
                    src="/img/mask-group-8-2x.png"
                  />
                  <img
                    className="mask-group-11"
                    style={{
                      left: screenWidth >= 1920 ? "1177px" : undefined,
                      position:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "relative"
                          : screenWidth >= 1920
                          ? "absolute"
                          : undefined,
                      top: screenWidth >= 1920 ? "74px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "160.47px"
                          : screenWidth >= 1920
                          ? "172px"
                          : undefined,
                    }}
                    alt="Mask group"
                    src={
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "/img/mask-group-6.png"
                        : screenWidth >= 1920
                        ? "/img/mask-group-14.png"
                        : undefined
                    }
                  />
                  <img
                    className="mask-group-12"
                    style={{
                      left: screenWidth >= 1920 ? "1528px" : undefined,
                      position:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "relative"
                          : screenWidth >= 1920
                          ? "absolute"
                          : undefined,
                      top: screenWidth >= 1920 ? "75px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "172px" : screenWidth >= 1920 ? "221px" : undefined,
                    }}
                    alt="Mask group"
                    src={
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "/img/mask-group-14.png"
                        : screenWidth >= 1920
                        ? "/img/image-912-1.png"
                        : undefined
                    }
                  />
                  <img
                    className="image-12"
                    style={{
                      left: screenWidth >= 1920 ? "171px" : undefined,
                      marginRight: screenWidth >= 1512 && screenWidth < 1920 ? "-44.85px" : undefined,
                      objectFit: screenWidth >= 1920 ? "cover" : undefined,
                      position:
                        screenWidth >= 1512 && screenWidth < 1920
                          ? "relative"
                          : screenWidth >= 1920
                          ? "absolute"
                          : undefined,
                      top: screenWidth >= 1920 ? "75px" : undefined,
                      width:
                        screenWidth >= 1512 && screenWidth < 1920 ? "221px" : screenWidth >= 1920 ? "143px" : undefined,
                    }}
                    alt="Imagedsf"
                    src={
                      screenWidth >= 1512 && screenWidth < 1920
                        ? "/img/image-912-1.png"
                        : screenWidth >= 1920
                        ? "/img/image-909-1.png"
                        : undefined
                    }
                  />
                </div>
              </div>
              <div
                className="title-3"
                style={{
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "261px" : screenWidth >= 1920 ? "640px" : undefined,
                  top:
                    screenWidth >= 1512 && screenWidth < 1920 ? "5558px" : screenWidth >= 1920 ? "5540px" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "1015px" : screenWidth >= 1920 ? "643px" : undefined,
                }}
              >
                <div
                  className="explore"
                  style={{
                    left:
                      screenWidth >= 1512 && screenWidth < 1920 ? "435px" : screenWidth >= 1920 ? "275px" : undefined,
                    width: screenWidth >= 1512 && screenWidth < 1920 ? "141px" : undefined,
                  }}
                >
                  EXPLORE
                </div>
                <p
                  className="text-wrapper-69"
                  style={{
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "1011px" : screenWidth >= 1920 ? "639px" : undefined,
                  }}
                >
                  Ask AI For Any Traveling Assistance
                </p>
              </div>
              <div
                className="overlap-30"
                style={{
                  borderRadius:
                    screenWidth >= 1512 && screenWidth < 1920
                      ? "194.86px/198.23px"
                      : screenWidth >= 1920
                      ? "208px/198.23px"
                      : undefined,
                  left: screenWidth >= 1512 && screenWidth < 1920 ? "564px" : screenWidth >= 1920 ? "758px" : undefined,
                  top:
                    screenWidth >= 1512 && screenWidth < 1920 ? "5842px" : screenWidth >= 1920 ? "5858px" : undefined,
                  width:
                    screenWidth >= 1512 && screenWidth < 1920 ? "390px" : screenWidth >= 1920 ? "416px" : undefined,
                }}
              >
                <div
                  className="group-18"
                  style={{
                    borderRadius:
                      screenWidth >= 1920
                        ? "208px/198.23px"
                        : screenWidth >= 1512 && screenWidth < 1920
                        ? "194.86px/198.23px"
                        : undefined,
                    width:
                      screenWidth >= 1920 ? "416px" : screenWidth >= 1512 && screenWidth < 1920 ? "390px" : undefined,
                  }}
                >
                  <div
                    className="overlap-31"
                    style={{
                      left:
                        screenWidth >= 1920 ? "58px" : screenWidth >= 1512 && screenWidth < 1920 ? "55px" : undefined,
                      width:
                        screenWidth >= 1920 ? "331px" : screenWidth >= 1512 && screenWidth < 1920 ? "310px" : undefined,
                    }}
                  >
                    <div
                      className="ellipse"
                      style={{
                        borderRadius:
                          screenWidth >= 1920
                            ? "149.66px/142.63px"
                            : screenWidth >= 1512 && screenWidth < 1920
                            ? "140.2px/142.63px"
                            : undefined,
                        width:
                          screenWidth >= 1920
                            ? "299px"
                            : screenWidth >= 1512 && screenWidth < 1920
                            ? "280px"
                            : undefined,
                      }}
                    />
                    <img
                      className="vector-15"
                      style={{
                        left:
                          screenWidth >= 1920 ? "19px" : screenWidth >= 1512 && screenWidth < 1920 ? "18px" : undefined,
                        width:
                          screenWidth >= 1920 ? "19px" : screenWidth >= 1512 && screenWidth < 1920 ? "17px" : undefined,
                      }}
                      alt="Vector"
                      src={
                        screenWidth >= 1920
                          ? "/img/vector-6.svg"
                          : screenWidth >= 1512 && screenWidth < 1920
                          ? "/img/vector-6-1.svg"
                          : undefined
                      }
                    />
                    <div
                      className="ellipse-2"
                      style={{
                        borderRadius:
                          screenWidth >= 1920
                            ? "120.07px/114.43px"
                            : screenWidth >= 1512 && screenWidth < 1920
                            ? "112.48px/114.43px"
                            : undefined,
                        left:
                          screenWidth >= 1920 ? "30px" : screenWidth >= 1512 && screenWidth < 1920 ? "28px" : undefined,
                        width:
                          screenWidth >= 1920
                            ? "240px"
                            : screenWidth >= 1512 && screenWidth < 1920
                            ? "225px"
                            : undefined,
                      }}
                    />
                    <img
                      className="vector-16"
                      style={{
                        left:
                          screenWidth >= 1920
                            ? "234px"
                            : screenWidth >= 1512 && screenWidth < 1920
                            ? "219px"
                            : undefined,
                        width:
                          screenWidth >= 1920 ? "97px" : screenWidth >= 1512 && screenWidth < 1920 ? "90px" : undefined,
                      }}
                      alt="Vector"
                      src={
                        screenWidth >= 1920
                          ? "/img/vector-3.svg"
                          : screenWidth >= 1512 && screenWidth < 1920
                          ? "/img/vector-3-2.svg"
                          : undefined
                      }
                    />
                  </div>
                  <img
                    className="vector-17"
                    style={{
                      left:
                        screenWidth >= 1920 ? "271px" : screenWidth >= 1512 && screenWidth < 1920 ? "254px" : undefined,
                      width:
                        screenWidth >= 1920 ? "30px" : screenWidth >= 1512 && screenWidth < 1920 ? "29px" : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth >= 1920
                        ? "/img/vector-5.svg"
                        : screenWidth >= 1512 && screenWidth < 1920
                        ? "/img/vector-5-1.svg"
                        : undefined
                    }
                  />
                  <img
                    className="vector-18"
                    style={{
                      left:
                        screenWidth >= 1920 ? "25px" : screenWidth >= 1512 && screenWidth < 1920 ? "24px" : undefined,
                      width:
                        screenWidth >= 1920 ? "42px" : screenWidth >= 1512 && screenWidth < 1920 ? "40px" : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth >= 1920
                        ? "/img/vector-4.svg"
                        : screenWidth >= 1512 && screenWidth < 1920
                        ? "/img/vector-4-1.svg"
                        : undefined
                    }
                  />
                </div>
                <div
                  className="group-19"
                  style={{
                    left: screenWidth >= 1512 && screenWidth < 1920 ? "57px" : screenWidth >= 1920 ? "66px" : undefined,
                    top:
                      screenWidth >= 1512 && screenWidth < 1920 ? "167px" : screenWidth >= 1920 ? "163px" : undefined,
                    width:
                      screenWidth >= 1512 && screenWidth < 1920 ? "287px" : screenWidth >= 1920 ? "283px" : undefined,
                  }}
                >
                  <div
                    className="overlap-32"
                    style={{
                      position: screenWidth >= 1512 && screenWidth < 1920 ? "relative" : undefined,
                      width: screenWidth >= 1512 && screenWidth < 1920 ? "285px" : undefined,
                    }}
                  >
                    {screenWidth >= 1512 && screenWidth < 1920 && (
                      <>
                        <div className="group-20">
                          <div className="group-21">
                            <div className="group-22">
                              <div className="rectangle-wrapper">
                                <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-7-3.svg" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-wrapper-70">Ask me anything!</div>
                      </>
                    )}

                    {screenWidth >= 1920 && (
                      <div className="group-23">
                        <div className="rectangle-wrapper">
                          <img className="rectangle-33" alt="Rectangle" src="/img/rectangle-7.svg" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {screenWidth >= 1920 && (
                  <>
                    <div className="group-24">
                      <div className="group-25">
                        <div className="group-23">
                          <div className="rectangle-wrapper">
                            <img className="rectangle-33" alt="Rectangle" src="/img/rectangle-7-1.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-71">Ask me anything!</div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        {screenWidth < 1024 && (
          <>
            <div className="services-3">
              <div className="guided-tours-3">
                <div className="overlap-group-28">
                  <div className="rectangle-34" />
                  <img className="tour-guide-3" alt="Tour guide" src="/img/tour-guide-1-1.png" />
                </div>
                <p className="text-wrapper-72">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                <div className="text-wrapper-73">Guided Tours</div>
              </div>
              <div className="best-flight-options-3">
                <div className="overlap-33">
                  <img className="rectangle-35" alt="Rectangle" src="/img/rectangle-157.svg" />
                  <div className="rectangle-36" />
                  <p className="text-wrapper-74">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                  <div className="rectangle-37" />
                  <div className="text-wrapper-75">Best Flights Options</div>
                  <img className="travelling-3" alt="Travelling" src="/img/travelling-1-1.png" />
                </div>
              </div>
              <div className="medical-insurance-3">
                <div className="overlap-34">
                  <div className="rectangle-38" />
                  <img className="medical-team-3" alt="Medical team" src="/img/medical-team-1-1.png" />
                </div>
                <p className="text-wrapper-76">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                <div className="text-wrapper-77">Medical insurance</div>
              </div>
              <div className="frame-7">
                <img
                  className="element"
                  alt="Element"
                  src="/img/185300490-315197993517185-186873365800792217-n-3.png"
                />
                <img
                  className="element-2"
                  alt="Element"
                  src="/img/174863265-741582756515177-2727149761201437678-n-1.png"
                />
                <img
                  className="element-3"
                  alt="Element"
                  src="/img/185300490-315197993517185-186873365800792217-n-6.png"
                />
                <div className="frame-8" />
                <img className="vector-19" alt="Vector" src="/img/vector-9.svg" />
              </div>
            </div>
            <div className="book-a-trip-3">
              <div className="div-2">
                <div className="div-2">
                  <div className="heading-8">
                    <div className="overlap-group-29">
                      <p className="heading-9">One Stop Location For Booking Your Travel</p>
                      <div className="subheading-3">Fast &amp; Easy</div>
                    </div>
                  </div>
                  <div className="values-3">
                    <div className="value-5">
                      <div className="group-26">
                        <img className="selection-3" alt="Selection" src="/img/selection-1-1-2x.png" />
                      </div>
                      <div className="overlap-group-30">
                        <div className="text-wrapper-78">Choose Destination</div>
                        <p className="lorem-ipsum-dolor-4">
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                    <div className="value-6">
                      <div className="overlap-group-30">
                        <p className="lorem-ipsum-dolor-4">
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                        <div className="text-wrapper-79">Check Availability</div>
                      </div>
                      <div className="group-27">
                        <img className="water-sport-3" alt="Water sport" src="/img/water-sport-1-1.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="illustration-7">
                <div className="illustration-8">
                  <div className="overlap-35">
                    <div className="group-28" />
                    <div className="image-13">
                      <div className="overlap-36">
                        <div className="group-29">
                          <div className="overlap-group-31">
                            <div className="OPTIONS-3">
                              <div className="LEAF-2">
                                <img className="img-4" alt="Leaf" src="/img/leaf-1-1.svg" />
                              </div>
                              <div className="send-2">
                                <img className="img-4" alt="Send" src="/img/send-2-1.svg" />
                              </div>
                              <div className="map-icon-2">
                                <img className="map-3" alt="Map" src="/img/map-1-1.svg" />
                              </div>
                            </div>
                            <img className="building-3" alt="Building" src="/img/building-1-1.png" />
                            <div className="text-wrapper-80">60 people are interested</div>
                            <div className="text-wrapper-81">14-29 June</div>
                            <div className="text-wrapper-82">by JR Martinax</div>
                            <img className="rectangle-39" alt="Rectangle" src="/img/rectangle-17.png" />
                            <div className="text-wrapper-83">Trip to Hawaii</div>
                            <img className="line-12" alt="Line" src="/img/line-3-5.svg" />
                          </div>
                        </div>
                        <img className="heart-3" alt="Heart" src="/img/heart-6-1-1-2x.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sepratir-3">
              <div className="group-30">
                <div className="overlap-group-32">
                  <p className="heading-10">
                    Let’s Make Your <br />
                    next Holiday Amazing
                  </p>
                  <img className="line-13" alt="Line" src="/img/line-1-1.svg" />
                </div>
              </div>
            </div>
          </>
        )}

        {((screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024) && (
          <div
            className="title-4"
            style={{
              height: screenWidth >= 1024 && screenWidth < 1512 ? "171px" : screenWidth < 1024 ? "2994px" : undefined,
              left: screenWidth >= 1024 && screenWidth < 1512 ? "13px" : screenWidth < 1024 ? "0" : undefined,
              top: screenWidth >= 1024 && screenWidth < 1512 ? "6451px" : screenWidth < 1024 ? "8119px" : undefined,
              width: screenWidth >= 1024 && screenWidth < 1512 ? "1015px" : screenWidth < 1024 ? "430px" : undefined,
            }}
          >
            <div
              className="explore-2"
              style={{
                alignItems: screenWidth < 1024 ? "flex-start" : undefined,
                color: screenWidth >= 1024 && screenWidth < 1512 ? "#5d17b0" : undefined,
                display: screenWidth < 1024 ? "flex" : undefined,
                flexDirection: screenWidth < 1024 ? "column" : undefined,
                fontFamily: screenWidth >= 1024 && screenWidth < 1512 ? "'Poppins', Helvetica" : undefined,
                fontSize: screenWidth >= 1024 && screenWidth < 1512 ? "18px" : undefined,
                fontWeight: screenWidth >= 1024 && screenWidth < 1512 ? "700" : undefined,
                gap: screenWidth < 1024 ? "124px" : undefined,
                height: screenWidth < 1024 ? "2461px" : undefined,
                left: screenWidth >= 1024 && screenWidth < 1512 ? "435px" : screenWidth < 1024 ? "18px" : undefined,
                letterSpacing: screenWidth >= 1024 && screenWidth < 1512 ? "1.80px" : undefined,
                lineHeight: screenWidth >= 1024 && screenWidth < 1512 ? "normal" : undefined,
                textAlign: screenWidth >= 1024 && screenWidth < 1512 ? "center" : undefined,
                width: screenWidth >= 1024 && screenWidth < 1512 ? "141px" : screenWidth < 1024 ? "402px" : undefined,
              }}
            >
              {screenWidth >= 1024 && screenWidth < 1512 && <>EXPLORE</>}

              {screenWidth < 1024 && (
                <>
                  <div className="context-14">
                    <div className="travel-packages-3">TRAVEL PACKAGES</div>
                    <div className="overlap-group-33">
                      <p className="text-wrapper-84">We Have the BEST Travel Packages</p>
                      <p className="text-wrapper-85">
                        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                        internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime
                        quasi aut ducimus illum aut optio quibusdam!
                      </p>
                    </div>
                    <div className="button-search-12">
                      <div className="text-wrapper-8">View Packages</div>
                    </div>
                  </div>
                  <div className="europe-sightseeing-3">
                    <div className="destination-7">
                      <div className="group-31">
                        <div className="overlap-group-34">
                          <div className="text-wrapper-86">$700</div>
                        </div>
                      </div>
                    </div>
                    <div className="destination-8">
                      <div className="group-32">
                        <div className="overlap-group-34">
                          <div className="text-wrapper-87">$800</div>
                        </div>
                      </div>
                    </div>
                    <div className="destination-9">
                      <div className="group-33">
                        <div className="overlap-group-34">
                          <div className="text-wrapper-87">$500</div>
                        </div>
                      </div>
                    </div>
                    <div className="illustration-9">
                      <div className="overlap-37">
                        <img className="rectangle-40" alt="Rectangle" src="/img/rectangle-19299-1.svg" />
                        <img className="mask-group-13" alt="Mask group" src="/img/mask-group-9.png" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              className="ask-AI-for-any"
              style={{
                backgroundImage: screenWidth < 1024 ? "url(/img/rectangle-19302.png)" : undefined,
                backgroundSize: screenWidth < 1024 ? "100% 100%" : undefined,
                color: screenWidth >= 1024 && screenWidth < 1512 ? "#181e4b" : undefined,
                fontFamily: screenWidth >= 1024 && screenWidth < 1512 ? "'Volkhov', Helvetica" : undefined,
                fontSize: screenWidth >= 1024 && screenWidth < 1512 ? "50px" : undefined,
                fontWeight: screenWidth >= 1024 && screenWidth < 1512 ? "700" : undefined,
                height: screenWidth < 1024 ? "695px" : undefined,
                letterSpacing: screenWidth >= 1024 && screenWidth < 1512 ? "0" : undefined,
                lineHeight: screenWidth >= 1024 && screenWidth < 1512 ? "71.0px" : undefined,
                textAlign: screenWidth >= 1024 && screenWidth < 1512 ? "center" : undefined,
                top: screenWidth >= 1024 && screenWidth < 1512 ? "29px" : screenWidth < 1024 ? "2299px" : undefined,
                width: screenWidth >= 1024 && screenWidth < 1512 ? "1011px" : screenWidth < 1024 ? "430px" : undefined,
              }}
            >
              {screenWidth >= 1024 && screenWidth < 1512 && (
                <p className="text-wrapper-95">Ask AI For Any Traveling Assistance</p>
              )}

              {screenWidth < 1024 && (
                <div className="overlap-38">
                  <div className="rectangle-41" />
                  <div className="group-34">
                    <div className="overlap-group-35">
                      <img className="line-14" alt="Line" src="/img/image.svg" />
                      <div className="text-wrapper-88">Explore Cities</div>
                      <div className="promotion-5">PROMOTION</div>
                    </div>
                    <div className="button-search-13">
                      <div className="text-wrapper-89">View Packages</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {screenWidth < 1024 && (
          <>
            <div className="explore-nature-2">
              <div className="overlap-39">
                <div className="group-35">
                  <div className="overlap-group-36">
                    <img className="line-15" alt="Line" src="/img/line-3-3.svg" />
                    <div className="text-wrapper-90">Explore Nature</div>
                    <div className="promotion-6">PROMOTION</div>
                    <div className="button-search-14">
                      <div className="text-wrapper-91">View Packages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-5">
              <div className="explore-3">EXPLORE</div>
              <p className="text-wrapper-92">Ask AI For Any Traveling Assistance</p>
            </div>
          </>
        )}

        {((screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024) && (
          <div
            className="overlap-40"
            style={{
              borderRadius:
                screenWidth < 1024
                  ? "178.25px/172.31px"
                  : screenWidth >= 1024 && screenWidth < 1512
                  ? "194.86px/198.23px"
                  : undefined,
              height: screenWidth < 1024 ? "345px" : screenWidth >= 1024 && screenWidth < 1512 ? "396px" : undefined,
              left: screenWidth < 1024 ? "31px" : screenWidth >= 1024 && screenWidth < 1512 ? "321px" : undefined,
              top: screenWidth < 1024 ? "12285px" : screenWidth >= 1024 && screenWidth < 1512 ? "6622px" : undefined,
              width: screenWidth < 1024 ? "356px" : screenWidth >= 1024 && screenWidth < 1512 ? "390px" : undefined,
            }}
          >
            <div
              className="group-36"
              style={{
                borderRadius:
                  screenWidth >= 1024 && screenWidth < 1512
                    ? "194.86px/198.23px"
                    : screenWidth < 1024
                    ? "178.25px/172.31px"
                    : undefined,
                height: screenWidth >= 1024 && screenWidth < 1512 ? "396px" : screenWidth < 1024 ? "345px" : undefined,
                width: screenWidth >= 1024 && screenWidth < 1512 ? "390px" : screenWidth < 1024 ? "356px" : undefined,
              }}
            >
              <div
                className="overlap-41"
                style={{
                  height:
                    screenWidth >= 1024 && screenWidth < 1512 ? "293px" : screenWidth < 1024 ? "254px" : undefined,
                  left: screenWidth >= 1024 && screenWidth < 1512 ? "55px" : screenWidth < 1024 ? "50px" : undefined,
                  top: screenWidth >= 1024 && screenWidth < 1512 ? "48px" : screenWidth < 1024 ? "42px" : undefined,
                  width: screenWidth >= 1024 && screenWidth < 1512 ? "310px" : screenWidth < 1024 ? "283px" : undefined,
                }}
              >
                <div
                  className="ellipse-3"
                  style={{
                    borderRadius:
                      screenWidth >= 1024 && screenWidth < 1512
                        ? "140.2px/142.63px"
                        : screenWidth < 1024
                        ? "128.25px/123.98px"
                        : undefined,
                    height:
                      screenWidth >= 1024 && screenWidth < 1512 ? "285px" : screenWidth < 1024 ? "248px" : undefined,
                    top: screenWidth >= 1024 && screenWidth < 1512 ? "7px" : screenWidth < 1024 ? "6px" : undefined,
                    width:
                      screenWidth >= 1024 && screenWidth < 1512 ? "280px" : screenWidth < 1024 ? "257px" : undefined,
                  }}
                />
                <img
                  className="vector-20"
                  style={{
                    left: screenWidth >= 1024 && screenWidth < 1512 ? "18px" : screenWidth < 1024 ? "17px" : undefined,
                    width: screenWidth >= 1024 && screenWidth < 1512 ? "17px" : screenWidth < 1024 ? "16px" : undefined,
                  }}
                  alt="Vector"
                  src={
                    screenWidth >= 1024 && screenWidth < 1512
                      ? "/img/vector-6-1.svg"
                      : screenWidth < 1024
                      ? "/img/vector-6-1-2.svg"
                      : undefined
                  }
                />
                <div
                  className="ellipse-4"
                  style={{
                    borderRadius:
                      screenWidth >= 1024 && screenWidth < 1512
                        ? "112.48px/114.43px"
                        : screenWidth < 1024
                        ? "102.89px/99.46px"
                        : undefined,
                    height:
                      screenWidth >= 1024 && screenWidth < 1512 ? "229px" : screenWidth < 1024 ? "199px" : undefined,
                    left: screenWidth >= 1024 && screenWidth < 1512 ? "28px" : screenWidth < 1024 ? "25px" : undefined,
                    top: screenWidth >= 1024 && screenWidth < 1512 ? "35px" : screenWidth < 1024 ? "31px" : undefined,
                    width:
                      screenWidth >= 1024 && screenWidth < 1512 ? "225px" : screenWidth < 1024 ? "206px" : undefined,
                  }}
                />
                <img
                  className="vector-21"
                  style={{
                    height:
                      screenWidth >= 1024 && screenWidth < 1512 ? "44px" : screenWidth < 1024 ? "39px" : undefined,
                    left:
                      screenWidth >= 1024 && screenWidth < 1512 ? "219px" : screenWidth < 1024 ? "201px" : undefined,
                    width: screenWidth >= 1024 && screenWidth < 1512 ? "90px" : screenWidth < 1024 ? "83px" : undefined,
                  }}
                  alt="Vector"
                  src={
                    screenWidth >= 1024 && screenWidth < 1512
                      ? "/img/vector-3-2.svg"
                      : screenWidth < 1024
                      ? "/img/vector-3-1.svg"
                      : undefined
                  }
                />
              </div>
              <img
                className="vector-22"
                style={{
                  height: screenWidth >= 1024 && screenWidth < 1512 ? "11px" : screenWidth < 1024 ? "10px" : undefined,
                  left: screenWidth >= 1024 && screenWidth < 1512 ? "254px" : screenWidth < 1024 ? "233px" : undefined,
                  top: screenWidth >= 1024 && screenWidth < 1512 ? "33px" : screenWidth < 1024 ? "29px" : undefined,
                  width: screenWidth >= 1024 && screenWidth < 1512 ? "29px" : screenWidth < 1024 ? "26px" : undefined,
                }}
                alt="Vector"
                src={
                  screenWidth >= 1024 && screenWidth < 1512
                    ? "/img/vector-5-1.svg"
                    : screenWidth < 1024
                    ? "/img/vector-5-2.svg"
                    : undefined
                }
              />
              <img
                className="vector-23"
                style={{
                  height: screenWidth >= 1024 && screenWidth < 1512 ? "19px" : screenWidth < 1024 ? "17px" : undefined,
                  left: screenWidth >= 1024 && screenWidth < 1512 ? "24px" : screenWidth < 1024 ? "22px" : undefined,
                  width: screenWidth >= 1024 && screenWidth < 1512 ? "40px" : screenWidth < 1024 ? "36px" : undefined,
                }}
                alt="Vector"
                src={
                  screenWidth >= 1024 && screenWidth < 1512
                    ? "/img/vector-4-1.svg"
                    : screenWidth < 1024
                    ? "/img/vector-4-2.svg"
                    : undefined
                }
              />
            </div>
            {screenWidth < 1024 && (
              <>
                <div className="group-37" />
                <div className="text-wrapper-93">Ask me anything!</div>
              </>
            )}

            {screenWidth >= 1024 && screenWidth < 1512 && (
              <div className="group-38">
                <div className="overlap-42">
                  <div className="group-20">
                    <div className="group-39">
                      <div className="group-22">
                        <div className="rectangle-wrapper">
                          <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-7-4.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-94">Ask me anything!</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage



