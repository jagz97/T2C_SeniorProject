import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

import { api } from '../../api/axios'
import { FaRegCircleXmark, FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'


const Login = () => {
  
    const [emailData, setEmailData] = useState('')
    const [passwordData, setPasswordData] = useState('')

    // State for toggling pwd input visibility
    const [showPassword, setShowPassword] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    const emailInputRef = useRef(null);

    const { login } = useAuth()

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from || "/"
    
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
        setErrorMessage("")
        const formData = { email: emailData, password: passwordData }
        try {
            const { data : user } = await api.post("/users/auth/signin", formData)

            // if first time login redirect to profile creation page
            // else redirect to a protected route or home page
            const path = user.firsTimeLogin ? "/onboarding" : from 

            login(user) // stores user info in local storage

            navigate(path, {replace: true})
        }
        catch(error) {
            const errorMessage = error.response?.data?.message
            // if we get a an error response from server display it
            // otherwise we display error directly from axios library
            if(errorMessage) {
                setErrorMessage(errorMessage)
            }
            else {
                setErrorMessage(error.message)
            }
        }
    }

    return (
        <main className="login">
            <Container className='container-login-page'>
                <Row className="justify-content-center justify-content-xl-between">
                    <Col className='col-auto'>
                        <div className='login-title-text'>Sign in to <strong>Travel2Connect</strong></div>
                    </Col>

                    <Col className='col-auto'>
                        <Card className="container-login-card">
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
                                            <Link to='/passwordrecovery' className='recover-password-btn'>Recover Password?</Link>
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
        </main>
    )
}

export default Login