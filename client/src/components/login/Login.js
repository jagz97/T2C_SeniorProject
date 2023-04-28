import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import deleteIcon from '../../images/email-delete-icon.png'
import hideIcon from '../../images/hide-password-icon.png'
import googleIcon from '../../images/Google.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

const Login = () => {

    // A state object to store form data
    const [loginData, setLoginData] = useState({email : '', password : ''})

    // An onChange event handler for all form inputs
    const handleFormData = (event) => {
        const {name, value} = event.target
        setLoginData((prevData) => ({
            ...prevData,
            [name] : value
       }))
    } 

    // An onSubmit event handler which for now logs
    // the captured form data to the console
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(loginData)
    }

    return (
        <Container className='container-login-page'>
            <Row>
               <Col className='d-flex justify-content-center'>
                    <div className='page-title-text'>Sign in to <strong>Travel2Connect</strong></div>
               </Col>
               
                
                <Col className='d-flex justify-content-center'>
                    <Card className="container-card">
                        <Card.Body className='p-0'>
                            <Form className='container-form' onSubmit={handleSubmit} >
                                    <Form.Group>
                                        <InputGroup className='container-email-input'>
                                            <Form.Control 
                                                type='email'
                                                placeholder='Enter Email' 
                                                name='email'
                                                value={loginData.email}
                                                onChange={handleFormData}
                                                required
                                                className='login-input'
                                            />
                                            <InputGroup.Text className='login-input-addon'><img src={deleteIcon} alt="delete icon"></img></InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className='container-password-input'>                                    
                                            <Form.Control 
                                                type='password' 
                                                placeholder='Enter Password' 
                                                name='password'
                                                value={loginData.password}
                                                onChange={handleFormData}
                                                required
                                                className='login-input'
                                            />
                                            <InputGroup.Text className='login-input-addon'><img src={hideIcon} alt="hide icon"></img></InputGroup.Text>
                                            
                                        </InputGroup>
                                        <div className='container-recover-password'>
                                            <Link to='/' className='recover-password-btn'>Recover Password?</Link>
                                        </div>
                                        
                                    </Form.Group>
                                    
                                    <Button className='btn-submit-login' type='submit'>Sign In</Button>

                            </Form>

                            <div className='container-continue'>
                                <hr className='line-continue'/>
                                <div className='continue-text'>Or continue with</div>
                                <hr className='line-continue'/>
                            </div>
                            <Link to='/' className='google-login'><img src={googleIcon} alt='google icon'/></Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login