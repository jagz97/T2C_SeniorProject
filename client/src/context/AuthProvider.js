import React, {useState, createContext} from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)


    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider
export { AuthContext }