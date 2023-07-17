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

    const [emailData, setEmailData] = useState('adam')
    const [passwordData, setPasswordData] = useState('ada123')

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
    
    // An onSubmit event handler which for now logs
    // the captured form data to the console
    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log(emailData,passwordData)
        const formData = {email: emailData, password: passwordData}
        fetch("http://localhost:8080/api/users/auth/signin", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res)
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            if(errorMessage) {
                setErrorMessage("")
            }
        })
        .catch(err => {
            err.json().then((json) => {
                setErrorMessage(json.message)
            })
        })
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
                                        <div className="login-error-message">{errorMessage}</div>
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