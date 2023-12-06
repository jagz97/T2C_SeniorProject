import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-ethan-brooke-10259522.jpg'
import Ratings from "../ratings/Ratings"
import Experience from "./Experience"
import "./ExperienceDetail.css"

import { IoCloseSharp } from "react-icons/io5";


const ExperienceDetail = () => {
    
    /* Temporary Variables */
    const expImg = ProfileBanner
    const expLocation = "Manila, Philippines"
    const overallRating = 5
    let locationDesc = "in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pe"
    locationDesc = "Manila is the capital and second-most populous city of the Philippines. Located on the eastern shore of Manila Bay on the island of Luzon, it is classified as a highly urbanized city. "
    const rating = 4
    const experienceName = "This is a long hotel name or attraction!"


    const handleClick = () => {
        console.log("Clicked!")
    }
    
    return(
        <Container fluid>
            <Row className="container-expdetail-image">
                <Col className="col-12 px-0">
                    <img src={ProfileBanner} alt="sunset" className="intro-img"/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-12">
                    <div className="container-exp-detail">
                        <div className="expdetail-btn" onClick={handleClick}>
                            <IoCloseSharp/>
                        </div>
                        <div className="expdetail-top">
                            <div className="expdetail-img-wrapper">
                                <img loading="lazy" className="expdetail-img" src={expImg} alt="" />
                            </div>
                            <div className="expdetail-information">
                                <div className="expdetail-info-rating">
                                    <h3 className="expdetail-location">{expLocation}</h3>
                                    <Ratings starSize={22} value={overallRating}/>
                                </div>
                                <div className="expdetail-description-wrapper">
                                    <p className="expdetail-description">{locationDesc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="expdetail-bottom">
                            <Experience
                                name={experienceName}
                                rating={rating}
                                type="hotel"
                                location={"A Very long Location for Experience"}
                            />
                            <Experience
                                name={experienceName}
                                rating={rating}
                                desc={locationDesc}
                                location={"A Very long Location for Experience"}
                                type="attraction"
                                height={185}
                            />
                            <Experience
                                name={experienceName}
                                rating={rating}
                                type="restaurant"
                                location={"A Very long Location for Experience"}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ExperienceDetail