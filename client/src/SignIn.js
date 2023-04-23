import React, {useState} from 'react'
import './App.css'
import deleteIcon from './images/email-delete-icon.png'
import hideIcon from './images/hide-password-icon.png'
import googleIcon from './images/Google.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

const SignIn = () => {

    // A state object to store form data
    const [signInData, setSignInData] = useState({email : '', password : ''})

    // An onChange event handler for all form inputs
    const handleFormData = (event) => {
        const {name, value} = event.target
        setSignInData((prevData) => ({
            ...prevData,
            [name] : value
       }))
    } 

    // An onSubmit event handler which for now logs
    // the captured form data to the console
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(signInData)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card className="container-signin  p-5 mx-auto rounded-5">
                        <Card.Body>
                            <Form onSubmit={handleSubmit} >
                                
                                <Form.Group className='mb-3'>
                                    <InputGroup>
                                        <Form.Control 
                                            type='email'
                                            placeholder='Enter Email' 
                                            name='email'
                                            value={signInData.email}
                                            onChange={handleFormData}
                                            size='lg'
                                            required
                                            className='signin-input'
                                        />
                                        <InputGroup.Text className='signin-input-addon'><img src={deleteIcon} alt="delete icon"></img></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className='mb-4'>
                                    <InputGroup>                                    
                                        <Form.Control 
                                            type='password' 
                                            placeholder='Enter Password' 
                                            name='password'
                                            value={signInData.password}
                                            onChange={handleFormData}
                                            size='lg'
                                            required
                                            className='signin-input'
                                        />
                                        <InputGroup.Text className='signin-input-addon'><img src={hideIcon} alt="icon"></img></InputGroup.Text>
                                    </InputGroup>
                                    <p className="text-end mt-2" >
                                        <a href="#" className = "recover-password">Recover Password?</a>
                                    </p>
                                </Form.Group>

                                <Button className='btn-submit-signin' type='submit'>Sign In</Button>

                            </Form>

                            <div className='container-continue'>
                                <hr className='line-continue'/>
                                <div className='continue'>Or continue with</div>
                                <hr className='line-continue'/>
                            </div>
                            <a href='#' className='google-signin'><img src={googleIcon}/></a>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn