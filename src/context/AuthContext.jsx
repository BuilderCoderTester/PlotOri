import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const savedUser = localStorage.getItem('plotori-user')

        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    const login = (email, password) => {
        const userData = {
            name: 'Student',
            email,
        }

        setUser(userData)
        localStorage.setItem('plotori-user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('plotori-user')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)