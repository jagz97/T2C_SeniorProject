import React from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PlaceVisited from '../placeVisited/PlaceVisited'
import ProfilePost from '../profilePost/ProfilePost'
import PostHeaderImg from '../../images/Union 3.png'




const Profile = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <section className="profile-places-visited">
                {/* Fluid Container Unitl Large Breakpoint */}
                <Container fluid="xl"> 
                    <Row className="justify-content-center mx-auto" style={{width:"100%"}}>
                        {/* Places Visited Section Header */}
                        <Col className="col-12">
                            <div className="text-center text-md-start">
                                <h2 className="display-4 places-visited-heading">Places Visited</h2>
                                <h4 className="places-visited-subheading">Ratings of the Experiences</h4>
                            </div>
                        </Col>

                        {/*Places Visited Content*/}
                        {/* Hard Code some content for now */}
                        <PlaceVisited/>
                        <PlaceVisited/>
                        <PlaceVisited/> 
                      
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
                                <div className="profile-post-header mt-2 mx-auto d-flex align-items-center">
                                    <img src={PostHeaderImg}/>posts
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