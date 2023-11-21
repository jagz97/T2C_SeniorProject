import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import PasswordForm from "./PasswordForm"
import { api } from "../../api/axios"


const PasswordRequest = () => {
    const [ password, setPassword ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ success, setSuccess ] = useState(false)

    const location = useLocation()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage("")
        try {
            if(location?.search) {
                // Get params from URL
                const params = new URLSearchParams(location.search)
                const newPassword = {}
                
                // gather data to send in object "newPassword" 
                newPassword["token"] = params.get("token")
                newPassword["userId"] = params.get("id")
                newPassword["password"] = password
                
                const request = await api.post("/users/auth/resetPassword", newPassword)
                if(request.status === 200) {
                    setSuccess(true)
                }
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
                <div>
                    <p className="password-reset-message">Password Reset Successful</p> 
                    <Link className="password-reset-link" to="/">Go Home</Link> 
                </div>
                :
                <>
                    <form className="password-reset-form" onSubmit={handleSubmit}>
                        <input
                            type="password"
                            name="user-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            id="user-email"
                            placeholder="New Password"
                        />
                        <button type="submit">Reset Password</button>
                    </form>
                    { errorMessage && <p className="password-reset-message error">{errorMessage}</p> }
                </>
            }
        </PasswordForm>
    )
}

export default PasswordRequest