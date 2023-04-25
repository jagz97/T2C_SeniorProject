import React, {useState} from 'react'
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
        <Container>
            <Row>
                <Col>
                    <Card className="container-login  p-5 mx-auto rounded-5">
                        <Card.Body>
                            <Form onSubmit={handleSubmit} >
                                
                                <Form.Group className='mb-3'>
                                    <InputGroup>
                                        <Form.Control 
                                            type='email'
                                            placeholder='Enter Email' 
                                            name='email'
                                            value={loginData.email}
                                            onChange={handleFormData}
                                            size='lg'
                                            required
                                            className='login-input'
                                        />
                                        <InputGroup.Text className='login-input-addon'><img src={deleteIcon} alt="delete icon"></img></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className='mb-4'>
                                    <InputGroup>                                    
                                        <Form.Control 
                                            type='password' 
                                            placeholder='Enter Password' 
                                            name='password'
                                            value={loginData.password}
                                            onChange={handleFormData}
                                            size='lg'
                                            required
                                            className='login-input'
                                        />
                                        <InputGroup.Text className='login-input-addon'><img src={hideIcon} alt="icon"></img></InputGroup.Text>
                                    </InputGroup>
                                    <p className="text-end mt-2" >
                                        <a href="#" className = "recover-password">Recover Password?</a>
                                    </p>
                                </Form.Group>

                                <Button className='btn-submit-login' type='submit'>Sign In</Button>

                            </Form>

                            <div className='container-continue'>
                                <hr className='line-continue'/>
                                <div className='continue'>Or continue with</div>
                                <hr className='line-continue'/>
                            </div>
                            <a href='#' className='google-login'><img src={googleIcon}/></a>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login