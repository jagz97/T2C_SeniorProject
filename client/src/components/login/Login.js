import React, {useState,useRef,useEffect} from 'react'
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

    const [emailData, setEmailData] = useState('')
    const [passwordData, setPasswordData] = useState('')

    // State for toggling pwd input visibility
    const [showPassword, setShowPassword] = useState(false)

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
    
    // An onSubmit event handler which for now logs
    // the captured form data to the console
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(emailData,passwordData)
        // setPasswordData('')
        // setEmailData('')
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
                                                value={emailData}
                                                onChange={handleEmailData}
                                                required
                                                className='login-input'
                                                ref={emailInputRef}
                                            />
                                            <InputGroup.Text className='login-input-addon' onClick={resetText}>
                                                <img src={deleteIcon} alt="delete icon"></img>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className='container-password-input'>                                    
                                            <Form.Control 
                                                type={ showPassword ? 'text': 'password'} 
                                                placeholder='Enter Password' 
                                                value={passwordData}
                                                onChange={handlePasswordData}
                                                required
                                                className='login-input'
                                            />
                                            <InputGroup.Text className='login-input-addon' onClick={toggleHidden}>
                                                <img src={hideIcon} alt="hide icon"></img>
                                            </InputGroup.Text>
                                            
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