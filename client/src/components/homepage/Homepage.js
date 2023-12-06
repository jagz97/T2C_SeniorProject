import React from "react"
import "./homepage.css"
import { useWindowWidth } from "../../breakpoints";

const Homepage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="macbook-pro">
      <div
        className="iphone-pro-max"
        style={{
          height:
            screenWidth < 1024
              ? "12958px"
              : screenWidth >= 1024 && screenWidth < 1512
              ? "7056px"
              : screenWidth >= 1512
              ? "6275px"
              : undefined,
          position: (screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024 ? "relative" : undefined,
          width:
            screenWidth < 1024
              ? "430px"
              : screenWidth >= 1024 && screenWidth < 1512
              ? "1024px"
              : screenWidth >= 1512
              ? "1512px"
              : undefined,
        }}
      >
        {screenWidth < 1024 && (
          <div className="overlap">
            <img className="image" alt="Imagedata" src="/img/image-917-1.png" />
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
                  <img className="vector" alt="Vector" src="/img/vector.svg" />
                  <img className="img" alt="Vector" src="/img/vector.svg" />
                </div>
              </div>
              <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />
            </div>
          </div>
        )}

        {((screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024) && (
          <div
            className="overlap-2"
            style={{
              height: screenWidth < 1024 ? "3034px" : screenWidth >= 1024 && screenWidth < 1512 ? "6372px" : undefined,
              left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1512 ? "-10px" : undefined,
              top: screenWidth < 1024 ? "1693px" : screenWidth >= 1024 && screenWidth < 1512 ? "0" : undefined,
              width: screenWidth < 1024 ? "483px" : screenWidth >= 1024 && screenWidth < 1512 ? "1034px" : undefined,
            }}
          >
            {screenWidth < 1024 && (
              <>
                <div className="partners">
                  <img className="image-2" alt="Imagedata" src="/img/image-909-1.png" />
                  <img className="mask-group" alt="Mask group" src="/img/mask-group-11.png" />
                  <img className="mask-group-2" alt="Mask group" src="/img/mask-group.png" />
                  <img className="mask-group-3" alt="Mask group" src="/img/mask-group-12.png" />
                  <img className="image-3" alt="Imagedata" src="/img/image-912.png" />
                </div>
                <div className="frame">
                  <div className="romantic-tropical">
                    <div className="overlap-3">
                      <div className="illustration">
                        <div className="overlap-group-2">
                          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-10.svg" />
                          <img className="mask-group-4" alt="Mask group" src="/img/mask-group-1.png" />
                        </div>
                      </div>
                      <img className="dayflow-chat-ok" alt="Dayflow chat ok" src="/img/dayflow-chat-ok.png" />
                    </div>
                    <div className="context-2">
                      <div className="overlap-4">
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
                  <img className="palz-big-leaves" alt="Palz big leaves" src="/img/palz-big-leaves.png" />
                </div>
              </>
            )}

            <div
              className="group"
              style={{
                height: screenWidth >= 1024 && screenWidth < 1512 ? "6372px" : screenWidth < 1024 ? "385px" : undefined,
                left: screenWidth >= 1024 && screenWidth < 1512 ? "0" : screenWidth < 1024 ? "89px" : undefined,
                top: screenWidth >= 1024 && screenWidth < 1512 ? "0" : screenWidth < 1024 ? "2649px" : undefined,
                width: screenWidth >= 1024 && screenWidth < 1512 ? "1034px" : screenWidth < 1024 ? "231px" : undefined,
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
                      <div className="overlap-5">
                        <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-19299-1.svg" />
                        <img className="mask-group-5" alt="Mask group" src="/img/mask-group-3.png" />
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
                  <div className="sepratir">
                    <div className="group-6">
                      <div className="overlap-group-7">
                        <p className="heading">
                          Let’s Make Your <br />
                          next Holiday Amazing
                        </p>
                        <img className="line-3" alt="Line" src="/img/line-1-1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="book-a-trip">
                    <div className="overlap-6">
                      <div className="illustration-wrapper">
                        <div className="illustration-2">
                          <div className="overlap-7">
                            <div className="group-7" />
                            <div className="image-4">
                              <div className="overlap-8">
                                <div className="group-8">
                                  <div className="overlap-group-8">
                                    <div className="OPTIONS">
                                      <div className="LEAF">
                                        <img className="img-2" alt="Leaf" src="/img/leaf-1-2.svg" />
                                      </div>
                                      <div className="send">
                                        <img className="img-2" alt="Send" src="/img/send-2-1.svg" />
                                      </div>
                                      <div className="map-icon">
                                        <img className="map" alt="Map" src="/img/map-1-2.svg" />
                                      </div>
                                    </div>
                                    <img className="building" alt="Building" src="/img/building-1-2.png" />
                                    <div className="text-wrapper-14">60 people are interested</div>
                                    <div className="overlap-9">
                                      <div className="text-wrapper-15">14-29 June</div>
                                      <div className="text-wrapper-16">by JR Martinax</div>
                                      <div className="text-wrapper-17">Trip to Hawaii</div>
                                      <img className="line-4" alt="Line" src="/img/line-3-3.svg" />
                                    </div>
                                    <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-17.png" />
                                  </div>
                                </div>
                                <img className="heart" alt="Heart" src="/img/heart-6-1-2.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="context-4">
                        <div className="heading-2">
                          <div className="overlap-group-9">
                            <p className="heading-3">One Stop Location For Booking Your Travel</p>
                            <div className="subheading">Fast &amp; Easy</div>
                          </div>
                        </div>
                        <div className="values">
                          <div className="value">
                            <div className="selection-wrapper">
                              <img className="selection" alt="Selection" src="/img/selection-1-2.png" />
                            </div>
                            <div className="overlap-group-10">
                              <div className="text-wrapper-18">Choose Destination</div>
                              <p className="lorem-ipsum-dolor">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Urna, tortor tempus.
                              </p>
                            </div>
                          </div>
                          <div className="value-2">
                            <div className="overlap-group-10">
                              <p className="lorem-ipsum-dolor">
                                Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Urna, tortor tempus.
                              </p>
                              <div className="text-wrapper-19">Check Availability</div>
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
                      <div className="text-wrapper-20">CATEGORY</div>
                      <div className="text-wrapper-21">We Offer Best Services</div>
                    </div>
                    <div className="services">
                      <div className="guided-tours">
                        <div className="overlap-group-11">
                          <div className="rectangle-7" />
                          <img className="tour-guide" alt="Tour guide" src="/img/tour-guide-1-1.png" />
                        </div>
                        <p className="text-wrapper-22">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div className="text-wrapper-23">Guided Tours</div>
                      </div>
                      <div className="best-flight-options">
                        <div className="overlap-10">
                          <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-157-1.svg" />
                          <div className="rectangle-9" />
                          <p className="text-wrapper-24">
                            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                          </p>
                          <div className="rectangle-10" />
                          <div className="text-wrapper-25">Best Flights Options</div>
                          <img className="travelling" alt="Travelling" src="/img/travelling-1-1.png" />
                        </div>
                      </div>
                      <div className="medical-insurance">
                        <div className="overlap-11">
                          <div className="rectangle-11" />
                          <img className="medical-team" alt="Medical team" src="/img/medical-team-1-1.png" />
                        </div>
                        <p className="text-wrapper-26">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                        <div className="text-wrapper-27">Medical insurance</div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-12">
                    <div className="header">
                      <div className="overlap-13">
                        <div className="rectangle-12" />
                        <img
                          className="unsplash-nsmseuhuoeu"
                          alt="Unsplash nsmseuhuoeu"
                          src="/img/unsplash-nsmseuhuoeu-1.png"
                        />
                        <div className="context-wrapper">
                          <div className="context-5">
                            <div className="overlap-14">
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
                                <div className="overlap-group-12">
                                  <button className="button">
                                    <div className="text-wrapper-28">Submit</div>
                                  </button>
                                  <div className="text-wrapper-29">Location</div>
                                  <div className="text-wrapper-30">Travel Type</div>
                                  <div className="text-wrapper-31">Date</div>
                                </div>
                              </div>
                              <img className="vector-3" alt="Vector" src="/img/vector-8.svg" />
                              <img className="vector-4" alt="Vector" src="/img/vector-9.svg" />
                            </div>
                            <img className="vector-5" alt="Vector" src="/img/vector-1-1.svg" />
                          </div>
                        </div>
                        <div className="rectangle-13" />
                        <div className="rectangle-14" />
                        <img className="image-5" alt="Imagedata" src="/img/image-917-1.png" />
                      </div>
                    </div>
                    <div className="header-2">
                      <div className="overlap-13">
                        <div className="rectangle-15" />
                        <img
                          className="unsplash-nsmseuhuoeu-2"
                          alt="Unsplash nsmseuhuoeu"
                          src="/img/unsplash-nsmseuhuoeu-1.png"
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
                                <div className="overlap-group-13">
                                  <button className="button-search-4">
                                    <div className="text-wrapper-32">Submit</div>
                                  </button>
                                  <div className="text-wrapper-33">Location</div>
                                  <div className="text-wrapper-34">Travel Type</div>
                                  <div className="text-wrapper-35">Date</div>
                                </div>
                              </div>
                              <img className="vector-6" alt="Vector" src="/img/vector-10.svg" />
                            </div>
                            <img className="vector-7" alt="Vector" src="/img/vector-1-2.svg" />
                          </div>
                        </div>
                        <div className="rectangle-16" />
                        <div className="rectangle-17" />
                        <img className="image-6" alt="Imagedata" src="/img/image-917-1.png" />
                      </div>
                    </div>
                  </div>
                  <div className="partners-2">
                    <img className="image-7" alt="Imagedata" src="/img/image-909-1.png" />
                    <img className="mask-group" alt="Mask group" src="/img/mask-group-8.png" />
                    <img className="mask-group-6" alt="Mask group" src="/img/mask-group-6.png" />
                    <img className="mask-group-3" alt="Mask group" src="/img/mask-group-14.png" />
                    <img className="image-8" alt="Imagedata" src="/img/image-912.png" />
                  </div>
                  <div className="frame-2">
                    <div className="romantic-tropical-2">
                      <div className="illustration-3">
                        <div className="overlap-group-14">
                          <img className="rectangle-18" alt="Rectangle" src="/img/rectangle-10-1.svg" />
                          <img className="mask-group-7" alt="Mask group" src="/img/mask-group-7-2.png" />
                        </div>
                      </div>
                      <div className="context-8">
                        <div className="text-wrapper-36">TRAVEL TOGETHER</div>
                        <div className="text-wrapper-37">Meet Your Travel Buddy</div>
                        <div className="button-search-5" />
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
                      <img className="vector-8" alt="Vector" src="/img/vector-11.svg" />
                      <div className="frame-4" />
                    </div>
                  </div>
                </>
              )}

              {screenWidth < 1024 && (
                <div className="overlap-16">
                  <div className="text-wrapper-38">CATEGORY</div>
                  <div className="text-wrapper-39">We Offer Best Services</div>
                </div>
              )}
            </div>
            {screenWidth >= 1024 && screenWidth < 1512 && (
              <>
                <img className="palz-big-leaves-2" alt="Palz big leaves" src="/img/palz-big-leaves-1.png" />
                <img className="vector-9" alt="Vector" src="/img/vector-7.svg" />
                <img className="nomads-luggage-2" alt="Nomads luggage" src="/img/nomads-luggage-travel.png" />
              </>
            )}
          </div>
        )}

        {screenWidth < 1024 && (
          <>
            <div className="services-2">
              <div className="guided-tours-2">
                <div className="overlap-group-15">
                  <div className="rectangle-19" />
                  <img className="tour-guide-2" alt="Tour guide" src="/img/tour-guide-1-1.png" />
                </div>
                <p className="text-wrapper-40">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                <div className="text-wrapper-41">Guided Tours</div>
              </div>
              <div className="best-flight-options-2">
                <div className="overlap-17">
                  <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-157.svg" />
                  <div className="rectangle-21" />
                  <p className="text-wrapper-42">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                  <div className="rectangle-22" />
                  <div className="text-wrapper-43">Best Flights Options</div>
                  <img className="travelling-2" alt="Travelling" src="/img/travelling-1-1.png" />
                </div>
              </div>
              <div className="medical-insurance-2">
                <div className="overlap-18">
                  <div className="rectangle-23" />
                  <img className="medical-team-2" alt="Medical team" src="/img/medical-team-1-1.png" />
                </div>
                <p className="text-wrapper-44">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                <div className="text-wrapper-45">Medical insurance</div>
              </div>
              <div className="frame-5">
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
                <div className="frame-6" />
                <img className="vector-10" alt="Vector" src="/img/vector-3.svg" />
              </div>
            </div>
            <div className="book-a-trip-2">
              <div className="div-2">
                <div className="div-2">
                  <div className="heading-4">
                    <div className="overlap-group-16">
                      <p className="heading-5">One Stop Location For Booking Your Travel</p>
                      <div className="subheading-2">Fast &amp; Easy</div>
                    </div>
                  </div>
                  <div className="values-2">
                    <div className="value-3">
                      <div className="img-wrapper">
                        <img className="selection-2" alt="Selection" src="/img/selection-1-1.png" />
                      </div>
                      <div className="overlap-group-17">
                        <div className="text-wrapper-46">Choose Destination</div>
                        <p className="lorem-ipsum-dolor-2">
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                    <div className="value-4">
                      <div className="overlap-group-17">
                        <p className="lorem-ipsum-dolor-2">
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                        <div className="text-wrapper-47">Check Availability</div>
                      </div>
                      <div className="group-9">
                        <img className="water-sport-2" alt="Water sport" src="/img/water-sport-1-1.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="illustration-4">
                <div className="illustration-5">
                  <div className="overlap-19">
                    <div className="group-10" />
                    <div className="image-9">
                      <div className="overlap-20">
                        <div className="group-11">
                          <div className="overlap-group-18">
                            <div className="OPTIONS-2">
                              <div className="leaf-wrapper">
                                <img className="img-3" alt="Leaf" src="/img/leaf-1-1.svg" />
                              </div>
                              <div className="send-wrapper">
                                <img className="img-3" alt="Send" src="/img/send-2.svg" />
                              </div>
                              <div className="map-wrapper">
                                <img className="map-2" alt="Map" src="/img/map-1-1.svg" />
                              </div>
                            </div>
                            <img className="building-2" alt="Building" src="/img/building-1-1.png" />
                            <div className="text-wrapper-48">60 people are interested</div>
                            <div className="text-wrapper-49">14-29 June</div>
                            <div className="text-wrapper-50">by JR Martinax</div>
                            <img className="rectangle-24" alt="Rectangle" src="/img/rectangle-17.png" />
                            <div className="text-wrapper-51">Trip to Hawaii</div>
                            <img className="line-5" alt="Line" src="/img/line-3.svg" />
                          </div>
                        </div>
                        <img className="heart-2" alt="Heart" src="/img/heart-6-1-1.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sepratir-2">
              <div className="group-12">
                <div className="overlap-group-19">
                  <p className="heading-6">
                    Let’s Make Your <br />
                    next Holiday Amazing
                  </p>
                  <img className="line-6" alt="Line" src="/img/line-1.svg" />
                </div>
              </div>
            </div>
          </>
        )}

        {((screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024) && (
          <div
            className="title-2"
            style={{
              height: screenWidth >= 1024 && screenWidth < 1512 ? "171px" : screenWidth < 1024 ? "2994px" : undefined,
              left: screenWidth >= 1024 && screenWidth < 1512 ? "13px" : screenWidth < 1024 ? "0" : undefined,
              top: screenWidth >= 1024 && screenWidth < 1512 ? "6451px" : screenWidth < 1024 ? "8119px" : undefined,
              width: screenWidth >= 1024 && screenWidth < 1512 ? "1015px" : screenWidth < 1024 ? "430px" : undefined,
            }}
          >
            <div
              className="explore"
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
                  <div className="context-9">
                    <div className="travel-packages-2">TRAVEL PACKAGES</div>
                    <div className="overlap-group-20">
                      <p className="text-wrapper-52">We Have the BEST Travel Packages</p>
                      <p className="text-wrapper-53">
                        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                        internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime
                        quasi aut ducimus illum aut optio quibusdam!
                      </p>
                    </div>
                    <div className="button-search-6">
                      <div className="text-wrapper-8">View Packages</div>
                    </div>
                  </div>
                  <div className="europe-sightseeing-2">
                    <div className="destination-4">
                      <div className="group-13">
                        <div className="overlap-group-21">
                          <div className="text-wrapper-54">$700</div>
                        </div>
                      </div>
                    </div>
                    <div className="destination-5">
                      <div className="group-14">
                        <div className="overlap-group-21">
                          <div className="text-wrapper-55">$800</div>
                        </div>
                      </div>
                    </div>
                    <div className="destination-6">
                      <div className="group-15">
                        <div className="overlap-group-21">
                          <div className="text-wrapper-55">$500</div>
                        </div>
                      </div>
                    </div>
                    <div className="illustration-6">
                      <div className="overlap-21">
                        <img className="rectangle-25" alt="Rectangle" src="/img/rectangle-19299.svg" />
                        <img className="mask-group-8" alt="Mask group" src="/img/mask-group-2.png" />
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
                <p className="text-wrapper-92">Ask AI For Any Traveling Assistance</p>
              )}

              {screenWidth < 1024 && (
                <div className="overlap-22">
                  <div className="rectangle-26" />
                  <div className="group-16">
                    <div className="overlap-group-22">
                      <img className="line-7" alt="Line" src="/img/line-8.svg" />
                      <div className="text-wrapper-56">Explore Cities</div>
                      <div className="promotion-2">PROMOTION</div>
                    </div>
                    <div className="button-search-7">
                      <div className="text-wrapper-57">View Packages</div>
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
              <div className="overlap-23">
                <div className="group-17">
                  <div className="overlap-group-23">
                    <img className="line-8" alt="Line" src="/img/line-3-1.svg" />
                    <div className="text-wrapper-58">Explore Nature</div>
                    <div className="promotion-3">PROMOTION</div>
                    <div className="button-search-8">
                      <div className="text-wrapper-59">View Packages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-3">
              <div className="explore-2">EXPLORE</div>
              <p className="text-wrapper-60">Ask AI For Any Traveling Assistance</p>
            </div>
          </>
        )}

        {((screenWidth >= 1024 && screenWidth < 1512) || screenWidth < 1024) && (
          <div
            className="overlap-24"
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
              className="group-18"
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
                className="overlap-25"
                style={{
                  height:
                    screenWidth >= 1024 && screenWidth < 1512 ? "293px" : screenWidth < 1024 ? "254px" : undefined,
                  left: screenWidth >= 1024 && screenWidth < 1512 ? "55px" : screenWidth < 1024 ? "50px" : undefined,
                  top: screenWidth >= 1024 && screenWidth < 1512 ? "48px" : screenWidth < 1024 ? "42px" : undefined,
                  width: screenWidth >= 1024 && screenWidth < 1512 ? "310px" : screenWidth < 1024 ? "283px" : undefined,
                }}
              >
                <div
                  className="ellipse"
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
                  className="vector-11"
                  style={{
                    left: screenWidth >= 1024 && screenWidth < 1512 ? "18px" : screenWidth < 1024 ? "17px" : undefined,
                    width: screenWidth >= 1024 && screenWidth < 1512 ? "17px" : screenWidth < 1024 ? "16px" : undefined,
                  }}
                  alt="Vector"
                  src={
                    screenWidth >= 1024 && screenWidth < 1512
                      ? "/img/vector-6-1.svg"
                      : screenWidth < 1024
                      ? "/img/vector-6.svg"
                      : undefined
                  }
                />
                <div
                  className="ellipse-2"
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
                  className="vector-12"
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
                className="vector-13"
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
                    ? "/img/vector-5.svg"
                    : undefined
                }
              />
              <img
                className="vector-14"
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
                    ? "/img/vector-4.svg"
                    : undefined
                }
              />
            </div>
            {screenWidth < 1024 && (
              <>
                <div className="group-19" />
                <div className="text-wrapper-61">Ask me anything!</div>
              </>
            )}

            {screenWidth >= 1024 && screenWidth < 1512 && (
              <div className="group-20">
                <div className="overlap-26">
                  <div className="group-21">
                    <div className="group-22">
                      <div className="group-23">
                        <div className="rectangle-wrapper">
                          <img className="rectangle-27" alt="Rectangle" src="/img/rectangle-7-1.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-62">Ask me anything!</div>
                </div>
              </div>
            )}
          </div>
        )}

        {screenWidth >= 1512 && (
          <div className="group-24">
            <div className="view-2">
              <div className="overlap-27">
                <div className="explore-nature-3">
                  <div className="overlap-28">
                    <img className="rectangle-28" alt="Rectangle" src="/img/rectangle-19301.png" />
                    <div className="rectangle-29" />
                    <div className="group-25">
                      <div className="overlap-group-24">
                        <img className="line-9" alt="Line" src="/img/line-3-4.svg" />
                        <div className="text-wrapper-63">Explore Nature</div>
                        <div className="promotion-4">PROMOTION</div>
                      </div>
                      <div className="button-search-9">
                        <div className="text-wrapper-8">View Packages</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="explore-cities-2">
                  <div className="group-wrapper">
                    <div className="group-26">
                      <div className="overlap-group-25">
                        <img className="line-10" alt="Line" src="/img/line-8-2.svg" />
                        <div className="text-wrapper-64">Explore Cities</div>
                        <div className="promotion-5">PROMOTION</div>
                      </div>
                      <div className="button-search-10">
                        <div className="text-wrapper-8">View Packages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="europe-sightseeing-3">
              <div className="context-10">
                <div className="travel-packages">TRAVEL PACKAGES</div>
                <p className="text-wrapper-65">We Have the BEST Travel Packages</p>
                <div className="button-search-11">
                  <div className="text-wrapper-8">View Packages</div>
                </div>
                <p className="text-wrapper-66">
                  Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                  Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
                  illum aut optio quibusdam!
                </p>
              </div>
              <div className="illustration-7">
                <div className="overlap-group-26">
                  <img className="rectangle-30" alt="Rectangle" src="/img/rectangle-19299-2.svg" />
                  <img className="mask-group-9" alt="Mask group" src="/img/image.png" />
                </div>
              </div>
              <div className="destination-7">
                <div className="group-27">
                  <div className="overlap-group-27">
                    <div className="text-wrapper-67">$700</div>
                  </div>
                </div>
              </div>
              <div className="destination-8">
                <div className="group-28">
                  <div className="overlap-group-27">
                    <div className="text-wrapper-68">$800</div>
                  </div>
                </div>
              </div>
              <div className="destination-9">
                <div className="group-29">
                  <div className="overlap-group-27">
                    <div className="text-wrapper-68">$500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-29">
              <div className="sepratir-3">
                <div className="overlap-30">
                  <div className="group-30">
                    <div className="overlap-group-28">
                      <p className="heading-7">
                        Let’s Make Your <br />
                        next Holiday Amazing
                      </p>
                      <img className="line-11" alt="Line" src="/img/line-1-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="book-a-trip-3">
                <div className="illustration-8">
                  <div className="illustration-2">
                    <div className="overlap-31">
                      <div className="group-31" />
                      <div className="image-10">
                        <div className="overlap-32">
                          <div className="group-32">
                            <div className="overlap-group-29">
                              <div className="OPTIONS-3">
                                <div className="LEAF-2">
                                  <img className="img-4" alt="Leaf" src="/img/leaf-1.svg" />
                                </div>
                                <div className="send-2">
                                  <img className="img-4" alt="Send" src="/img/send-2-2.svg" />
                                </div>
                                <div className="map-icon-2">
                                  <img className="map-3" alt="Map" src="/img/map-1.svg" />
                                </div>
                              </div>
                              <img className="building-3" alt="Building" src="/img/building-1.png" />
                              <div className="text-wrapper-69">60 people are interested</div>
                              <div className="text-wrapper-70">14-29 June</div>
                              <div className="text-wrapper-71">by JR Martinax</div>
                              <img className="rectangle-31" alt="Rectangle" src="/img/rectangle-17.png" />
                              <div className="text-wrapper-72">Trip to Hawaii</div>
                              <img className="line-12" alt="Line" src="/img/line-3-5.svg" />
                            </div>
                          </div>
                          <img className="heart-3" alt="Heart" src="/img/heart-6-1.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="context-11">
                  <div className="heading-8">
                    <p className="heading-9">One Stop Location For Booking Your Travel</p>
                    <div className="subheading-3">Fast &amp; Easy</div>
                  </div>
                  <div className="values-3">
                    <div className="value-5">
                      <div className="group-33">
                        <img className="selection-3" alt="Selection" src="/img/selection-1.png" />
                      </div>
                      <div className="text-wrapper-73">Choose Destination</div>
                      <p className="lorem-ipsum-dolor-3">
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                    <div className="value-6">
                      <p className="lorem-ipsum-dolor-3">
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Urna, tortor tempus.
                      </p>
                      <div className="text-wrapper-74">Check Availability</div>
                      <div className="group-34">
                        <img className="water-sport-3" alt="Water sport" src="/img/water-sport-1.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="nomads-luggage-3" alt="Nomads luggage" src="/img/nomads-luggage-travel.png" />
            </div>
            <div className="overlap-33">
              <div className="romantic-tropical-3">
                <div className="overlap-34">
                  <div className="illustration-9">
                    <div className="overlap-group-30">
                      <img className="rectangle-32" alt="Rectangle" src="/img/rectangle-10-2.svg" />
                      <img className="mask-group-10" alt="Mask group" src="/img/mask-group-7.png" />
                    </div>
                  </div>
                  <img className="dayflow-chat-ok-2" alt="Dayflow chat ok" src="/img/dayflow-chat-ok-1.png" />
                </div>
                <div className="context-12">
                  <div className="overlap-35">
                    <div className="text-wrapper-75">TRAVEL TOGETHER</div>
                    <div className="text-wrapper-76">Meet Your Travel Buddy</div>
                  </div>
                  <div className="button-search-12" />
                  <p className="text-wrapper-77">
                    Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium
                    internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi
                    aut ducimus illum aut optio quibusdam!
                  </p>
                </div>
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
                <img className="vector-15" alt="Vector" src="/img/vector-14.svg" />
                <div className="frame-8" />
              </div>
              <img className="palz-big-leaves-3" alt="Palz big leaves" src="/img/palz-big-leaves-2.png" />
            </div>
            <div className="best-service-2">
              <div className="title-4">
                <div className="text-wrapper-78">CATEGORY</div>
                <div className="text-wrapper-79">We Offer Best Services</div>
              </div>
              <div className="services-3">
                <div className="guided-tours-3">
                  <div className="overlap-group-31">
                    <div className="rectangle-19" />
                    <img className="tour-guide-3" alt="Tour guide" src="/img/tour-guide-1-1.png" />
                  </div>
                  <p className="text-wrapper-80">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                  <div className="text-wrapper-81">Guided Tours</div>
                </div>
                <div className="best-flight-options-3">
                  <div className="overlap-36">
                    <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-157-2.svg" />
                    <div className="rectangle-33" />
                    <p className="text-wrapper-82">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                    <div className="rectangle-34" />
                    <div className="text-wrapper-83">Best Flights Options</div>
                    <img className="travelling-3" alt="Travelling" src="/img/travelling-1-1.png" />
                  </div>
                </div>
                <div className="medical-insurance-3">
                  <div className="overlap-37">
                    <div className="rectangle-23" />
                    <img className="medical-team-3" alt="Medical team" src="/img/medical-team-1-1.png" />
                  </div>
                  <p className="text-wrapper-84">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                  <div className="text-wrapper-85">Medical insurance</div>
                </div>
              </div>
            </div>
            <div className="overlap-38">
              <header className="header-3">
                <div className="overlap-39">
                  <div className="rectangle-35" />
                  <img
                    className="unsplash-nsmseuhuoeu-3"
                    alt="Unsplash nsmseuhuoeu"
                    src="/img/unsplash-nsmseuhuoeu-1.png"
                  />
                  <div className="context-13">
                    <div className="context-14">
                      <div className="overlap-40">
                        <p className="slogans-4">
                          <span className="text-wrapper">Your </span>
                          <span className="span">
                            Passport <br />
                          </span>
                          <span className="text-wrapper">to</span>
                          <span className="span">&nbsp;</span>
                          <span className="text-wrapper">Global </span>
                          <span className="span">Connections</span>
                        </p>
                        <div className="searcging-tools-4">
                          <div className="overlap-group-32">
                            <button className="button-search-13">
                              <div className="text-wrapper-86">Submit</div>
                            </button>
                            <div className="text-wrapper-87">Location</div>
                            <div className="text-wrapper-88">Travel Type</div>
                            <div className="text-wrapper-89">Date</div>
                          </div>
                        </div>
                        <img className="vector-16" alt="Vector" src="/img/vector-12.svg" />
                        <img className="vector-17" alt="Vector" src="/img/vector-13.svg" />
                      </div>
                      <img className="vector-18" alt="Vector" src="/img/vector-1-3.svg" />
                    </div>
                  </div>
                  <div className="rectangle-36" />
                  <div className="rectangle-37" />
                  <img className="image-11" alt="Imagedata" src="/img/image-917-1.png" />
                </div>
              </header>
              <div className="partners-3">
                <img className="image-2" alt="Imagedata" src="/img/image-909-1.png" />
                <img className="mask-group" alt="Mask group" src="/img/mask-group-8-2x.png" />
                <img className="mask-group-2" alt="Mask group" src="/img/mask-group-9.png" />
                <img className="mask-group-3" alt="Mask group" src="/img/mask-group-14.png" />
                <img className="image-12" alt="Imagedata" src="/img/image-912.png" />
              </div>
            </div>
            <div className="title-5">
              <div className="explore-3">EXPLORE</div>
              <p className="text-wrapper-90">Ask AI For Any Traveling Assistance</p>
            </div>
            <div className="overlap-41">
              <div className="group-35">
                <div className="overlap-42">
                  <div className="ellipse-3" />
                  <img className="vector-19" alt="Vector" src="/img/vector-6-1.svg" />
                  <div className="ellipse-4" />
                  <img className="vector-20" alt="Vector" src="/img/vector-3-3.svg" />
                </div>
                <img className="vector-21" alt="Vector" src="/img/vector-5-1.svg" />
                <img className="vector-22" alt="Vector" src="/img/vector-4-2.svg" />
              </div>
              <div className="group-36">
                <div className="overlap-26">
                  <div className="group-21">
                    <div className="group-22">
                      <div className="group-23">
                        <div className="rectangle-wrapper">
                          <img className="rectangle-27" alt="Rectangle" src="/img/rectangle-7-2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-91">Ask me anything!</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage