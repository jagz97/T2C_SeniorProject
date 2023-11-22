import React, { useState } from "react"
import { Link } from "react-router-dom"
import PasswordForm from "./PasswordForm"
import { api } from "../../api/axios"

const PasswordRequest = () => {
    const [ email, setEmail ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ success, setSuccess ] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const request = await api.post("/users/auth/requestReset", {email})
            console.log(request)
            setErrorMessage("")
            if(request.status === 200) {
                setSuccess(true)
            }
        }
        catch(error) {
            const errorMessage = error.response?.data?.error
            setErrorMessage(errorMessage)
        }
    }

    return (
        <PasswordForm>
            {
                success ?
                <div className="password-reset-success">
                    <p className="password-reset-message">A link for password reset has been sent to email</p> 
                    <Link className="password-reset-link" to="/">Go Home</Link> 
                </div> 
                :
                <>
                    <h1 className="password-reset-header">Forgot Password?</h1>
                    <form className="password-reset-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="user-email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            id="user-email"
                            placeholder="Enter Your Email"
                            required
                            disabled={success}
                        />
                        <button type="submit" disabled={success}>Reset Password</button>
                    </form>
                    { errorMessage && <p className="password-reset-message error">{errorMessage}</p> }
                </>
            }
        </PasswordForm>
    )
}

export default PasswordRequest