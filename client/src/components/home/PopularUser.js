import React from 'react'
import Avatar from '../avatar/Avatar'
import Col from 'react-bootstrap/Col'

const PopularUser = ({pfp}) => {
    
    const clickHandler = () => console.log("Clicked.")

    return (
        <Col className="col-auto" onClick={clickHandler}>
            <Avatar size={150} src={pfp} cursor/>
        </Col>
    )
}

export default PopularUser