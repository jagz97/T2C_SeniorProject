import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

import { api } from "../../api/axios"
import { FaRegCircleXmark, FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const REQUEST_URL = 'http://localhost:8080/api/users/auth/signin'

const Login = () => {

    const [emailData, setEmailData] = useState('')
    const [passwordData, setPasswordData] = useState('')

    // State for toggling pwd input visibility
    const [showPassword, setShowPassword] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    const emailInputRef = useRef(null);

    const handleEmailData = (event) => {
        setEmailData(event.target.value)
    }

    const handlePasswordData = (event) => {
        setPasswordData(event.target.value)
    }

    // For email input text reset   
    useEffect(() => {
        emailInputRef.current.focus();
    }, [emailData]);

    // onclick handler for email text reset
    const resetText = () => setEmailData('')

    // onclick handler for revealing pwd text
    const toggleHidden = () => setShowPassword(!showPassword)

    const handleSubmit = async (event) => {
        event.preventDefault()
       
        const formData = { email: emailData, password: passwordData }
        try {
            const { data : user } = await api.post("/users/auth/signin",formData)
            console.log(user)

        }
        catch(error) {
            const errorMessage = error.response.data?.message
            setErrorMessage(errorMessage)
        }
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
                                            type='text'
                                            placeholder='Enter Email'
                                            value={emailData}
                                            onChange={handleEmailData}
                                            required
                                            className='login-input'
                                            ref={emailInputRef}
                                        />
                                        <InputGroup.Text className='login-input-addon' onClick={resetText}>
                                            <div className="addon" onClick={resetText}>
                                                <FaRegCircleXmark/> 
                                            </div>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group>
                                    <InputGroup className='container-password-input'>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Enter Password'
                                            value={passwordData}
                                            onChange={handlePasswordData}
                                            required
                                            className='login-input'
                                        />
                                        <InputGroup.Text className='login-input-addon'>
                                            <div className="addon" onClick={toggleHidden}>
                                                {showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}
                                            </div>
                                        </InputGroup.Text>

                                    </InputGroup>
                                    <div className="login-error-message">{errorMessage}</div>
                                    <div className='container-recover-password'>
                                        <Link to='#' className='recover-password-btn'>Recover Password?</Link>
                                    </div>

                                </Form.Group>

                                <Button className='btn-submit-login' type='submit'>Sign In</Button>
                            </Form>

                            <div className='container-continue'>
                                <hr className='line-continue' />
                                <div className='continue-text'>Or continue with</div>
                                <hr className='line-continue' />
                            </div>
                            <Link to='#' className='google-login'><FcGoogle size={30}/></Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login