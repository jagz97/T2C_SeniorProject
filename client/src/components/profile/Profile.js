import React from 'react'
import './Profile.css'
import Avatar from '../avatar/Avatar'
import Navbar from '../navbar/Navbar'
import PlaceVisited from './PlaceVisited'
import ProfilePost from './ProfilePost'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileBanner from '../../images/pexels-venelin-dimitrov-3476312.jpg'
import {BsGrid3X3} from 'react-icons/bs'
const Profile = () => {
    return (
        <div>
            <Navbar/>
            <section className="profile-intro">
                <Container fluid>
                    <Row>
                        <Col className="px-0" style={{position:"relative"}}>
                            <img src={ProfileBanner} alt="user profile banner" className="profile-banner"/>
                            <div className="container-profile-picture">
                                <Avatar size={375} border/>
                            </div>
                            <div className="profile-about">                      
                                {/* 255 character placeholder text */}
                                Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. 
                                Aenean commodo ligula eget dolor. Aenean massa. 
                                Cum sociis natoque penatibus et magnis dis parturient montes, 
                                nascetur ridiculus mus. Donec quam felis, 
                                ultricies nec, pellentesque eu, pretium quis,
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
           
            <section className="profile-places-visited">
                {/* Fluid Container Unitl Large Breakpoint */}
                <Container className="my-3" fluid="xl"> 
                    <Row className="justify-content-center mx-auto" style={{width:"100%"}}>
                        {/* Places Visited Section Header */}
                        <Col className="col-12">
                            <div className="text-center text-md-start">
                                <h2 className="display-5 places-visited-heading">Places Visited</h2>
                                <h4 className="places-visited-subheading">Ratings of the Experiences</h4>
                            </div>
                        </Col>

                        {/*Places Visited Content*/}
                        {/* Hard Code some content for now */}
                        <PlaceVisited rating={2}/>
                        <PlaceVisited rating={0}/>
                        <PlaceVisited rating={3.5}/> 
                      
                    </Row>
                </Container>
            </section>

            <section className="profile-posts">
                <Container className="my-5">
                    <Row className="mx-auto justify-content-center align-items-center" style={{width:"83%"}}>
                        {/* Posts Section Header */}
                        <Col className="col-12">
                            <div className="d-flex flex-column align-items-center" style={{height:"100%"}}>
                                <div className="profile-post-line"></div>
                                <div className="profile-post-header mt-2 mx-auto d-flex align-items-center gap-2">
                                    
                                    <BsGrid3X3 size={30}/>posts
                                </div>
                            </div>
                        </Col>
                        
                        {/*Profile Post Content */}
                        {/* Hard Code few Components for testing */}
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                        <ProfilePost/>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Profile