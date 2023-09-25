import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Signup.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

import { FaRegCircleXmark, FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {

    
    const [signupData, setSignupData] = useState({name :'', email : '', password : '', cpassword : ''})

    const navigate = useNavigate()

    
    const handleFormData = (e) => {
        const {name, value} = e.target
        setSignupData((prevData) => ({
            ...prevData,
            [name] : value
       }))
    } 
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => { // To make password visible or invisible up to the choice of the user
      setPasswordShown(passwordShown ? false : true);
    };
    
  
    //event handler 
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(signupData)
    }
    fetch("http://localhost:8080/server",{ // I just made this part up :) I'll ask you guys about connecting backend
        method:"POST",
        headers:{"Content-Type":""},
        body:JSON.stringify(signupData)})
        .then((response)=>{ return response.json()})
        .then(data => {
          if(data.status === "success") {
            console.log(data);
            setSignupData(true); 
            navigate('/');
          }
          else {
            data(false);
          }
        })

    return (
        <Container className='container-signup-page'>
            <Row>
               
               
                
                <Col className='d-flex justify-content-center'>
                    <Card className="container-card">
                        <Card.Body className='p-0'>
                            <Form className='container-form' onSubmit={handleSubmit} >
                                    <Form.Group>
                                        <InputGroup className='container-name-input'required>
                                        
                                            <Form.Control 
                                                type='name'
                                                placeholder='Enter Full Name' 
                                                name='name'
                                                value={signupData.name}
                                                onChange={handleFormData}
                                                required
                                                className='signup-input'
                                                
                                            />
                                            <InputGroup.Text className='signup-input-addon'></InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className='container-next-input'required>                                    
                                            <Form.Control 
                                                type='email' 
                                                placeholder='Enter Email' 
                                                name='email'
                                                value={signupData.email}
                                                onChange={handleFormData}
                                                required
                                                className='signup-input'
                                            />
                                            <InputGroup.Text className='signup-input-addon'></InputGroup.Text>
                                            
                                        </InputGroup>
                                    
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className='container-next-input'required>                                    
                                            <Form.Control 
                                                type={passwordShown ? "text" : "password"} 
                                                placeholder='Enter Password' 
                                                name='password'
                                                value={signupData.password}
                                                onChange={handleFormData}
                                                required
                                                className='signup-input'
                                            />
                                            <InputGroup.Text className='signup-input-addon'> <i onClick={togglePasswordVisiblity}><FaRegEye/></i></InputGroup.Text>
                                            
                                        </InputGroup>
                                    
                                    </Form.Group>
                                    

                                    <Form.Group>
                                        <InputGroup className='container-next-input'required>                                    
                                            <Form.Control 
                                                type={passwordShown ? "text" : "password"} 
                                                placeholder='Confirm Password' 
                                                name='cpassword'
                                                value={signupData.cpassword}
                                                onChange={handleFormData}
                                                required
                                                className='signup-input'
                                            />
                                            <InputGroup.Text className='signup-input-addon'> <i onClick={togglePasswordVisiblity}><FaRegEye/></i></InputGroup.Text>
                                            
                                        </InputGroup>
                                        <div className='container-have-account'>
                                            <Link to='/' className='have-account-btn'>Already Have an Account?</Link>
                                        </div>
                                        
                                    </Form.Group>
                                    
                                    <Button className='btn-submit-signup' type='submit'>Sign Up</Button>

                            </Form>

                            <div className='container-continue'>
                                <hr className='line-continue'/>
                                <div className='continue-text'>Or continue with</div>
                                <hr className='line-continue'/>
                            </div>
                            <Link to='/' className='google-signup'><FcGoogle size={30}/></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <div className='page-title-text'>Welcome to <strong>Travel2Connect</strong></div>
               </Col>
            </Row>
        </Container>
    )
}

export default Signup