import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-ethan-brooke-10259522.jpg'
import Ratings from "../ratings/Ratings"
import Experience from "./Experience"
import "./ExperienceDetail.css"
import { api } from '../../api/axios'
import useAuth from '../../hooks/useAuth'
import { IoCloseSharp } from "react-icons/io5";


const ExperienceDetail = () => {
    const params = useParams()
    const { user } = useAuth()

    const [ experience, setExperience ] = useState({})
    const [ experienceError, setExperienceError] = useState("")

    console.log(params.id)

    useEffect(() => {
        const fetchExperience = async () => {
            setExperienceError("")
            const headerOptions = {
                headers: {
                    Authorization: `${user.accesstoken}`,
                }
            }
            try {
                const response = await api.get(`/profile/experiences/${params.id}`, headerOptions)
                setExperience(response.data.specificExperience)
        
            } catch (error) {
                const errorMessage = error.response?.data?.message
                // if we get a an error response from server display it
                // otherwise we display error directly from axios library
                if(errorMessage) {
                    setExperienceError(errorMessage)
                }
                else {
                    setExperienceError(error.message)
                }
            }
       
        }
        fetchExperience()
    }, [params.id, user.accesstoken])

    const handleClick = () => {
        console.log("Clicked!")
    }
    
    console.log(experience)

    return(
        <Container fluid>
            <Row className="container-expdetail-image">
                <Col className="col-12 px-0">
                    <img src={ProfileBanner} alt="" className="intro-img"/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-12">
                        <div className="container-exp-detail">
                            {
                                // render error message if there is an error otherwise render exp data
                                experienceError ? <p className="error text-center"> {experienceError} </p> : 
                                
                                // Check if response is currently empty if it is render loading text
                                Object.keys(experience).length === 0 ? <p className="text-center text-muted">Loading...</p> :
                                <> 
                                    <div className="expdetail-btn" onClick={handleClick}>
                                        <IoCloseSharp/>
                                    </div>
                                    <div className="expdetail-top">
                                        <div className="expdetail-img-wrapper">
                                            <img loading="lazy" className="expdetail-img" src={`data:${experience.experiencePic.type};base64,${experience.experiencePic.data}`} alt="" />
                                        </div>
                                        <div className="expdetail-information">
                                            <div className="expdetail-info-rating">
                                                <h3 className="expdetail-location">{experience.city_country}</h3>
                                                <Ratings starSize={Number(experience.city_country)} value={experience.starRating}/>
                                            </div>
                                            <div className="expdetail-description-wrapper">
                                                <p className="expdetail-description">{experience.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="expdetail-bottom">
                                        <Experience
                                            name={experience.hotel.name}
                                            rating={Number(experience.hotel.rating)}
                                            type="hotel"
                                            location={experience.hotel.location}
                                        />
                                        <Experience
                                            name={experience.attraction.name}
                                            rating={Number(experience.attraction.rating)}
                                            desc={experience.attraction.description}
                                            location={experience.attraction.location}
                                            type="attraction"
                                            height={185}
                                        />
                                        <Experience
                                           name={experience.restaurant.name}
                                           rating={Number(experience.restaurant.rating)}
                                           type="restaurant"
                                           location={experience.restaurant.location}
                                        />
                                    </div>
                                </>
                            }
                        </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ExperienceDetail