import { useNavigate } from "react-router-dom"
const useAuth = () => {
    const navigate = useNavigate()
    const user = window.localStorage.getItem("user")

    const login = (user) => {
        window.localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        window.localStorage.removeItem("user")
        navigate("/", {replace: true})
    }
    
    return { user, login, logout }
}

export default useAuth