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

import { api } from '../../api/axios'

import { FaRegCircleXmark, FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [confPwd, setConfPwd] = useState("")

    const [errorMsg, setErrorMsg] = useState("")

    const [showPwd, setShowPwd] = useState(false)
    const [showConfPwd, setShowConfPwd] = useState(false)

    const navigate = useNavigate()

   
  
    //event handler 
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMsg("")
        if(pwd !== confPwd) {
            setErrorMsg("Passwords do not match")
        }
        else {
            try {
                const newUser = { username: name, email, password: pwd }
                const response = await api.post("/users/auth/signup", newUser)
                navigate("/", {replace: true})
                
            } catch (error) {
                if(error) {
                    setErrorMsg(error.response.data.message)
                }
            }
        }
    }

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
                                                type='text'
                                                placeholder='Enter Full Name' 
                                                name='name'
                                                value={name}
                                                onChange={(event) => setName(event.target.value) }
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
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                required
                                                className='signup-input'
                                            />
                                            <InputGroup.Text className='signup-input-addon'></InputGroup.Text>
                                            
                                        </InputGroup>
                                    
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className='container-next-input'required>                                    
                                            <Form.Control 
                                                type={showPwd ? "text" : "password"} 
                                                placeholder='Enter Password' 
                                                name='pwd'
                                                value={pwd}
                                                onChange={(event) => setPwd(event.target.value) }
                                                required
                                                className='signup-input'
                                            />
                                            <InputGroup.Text className='signup-input-addon' onClick={() => setShowPwd(!showPwd)}>
                                                {showPwd ? <FaRegEye/> : <FaRegEyeSlash/> }
                                            </InputGroup.Text>
                                            
                                        </InputGroup>
                                    
                                    </Form.Group>
                                    

                                    <Form.Group>
                                        <InputGroup className='container-next-input'required>                                    
                                            <Form.Control 
                                                type={showConfPwd ? "text" : "password"} 
                                                placeholder='Confirm Password' 
                                                name='confPassword'
                                                value={confPwd}
                                                onChange={(event) => setConfPwd(event.target.value)}
                                                required
                                                className='signup-input'
                                            />
                                            <InputGroup.Text className='signup-input-addon' onClick={() => setShowConfPwd(!showConfPwd)}>
                                                {showConfPwd ? <FaRegEye/> : <FaRegEyeSlash/> }
                                            </InputGroup.Text>
                                        </InputGroup>
                                        
                                        <div className="signup-error-message">{errorMsg}</div>
                                        
                                        <div className='container-have-account'>
                                            <Link to='/login' className='have-account-btn'>Already Have an Account?</Link>
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