import { createContext, useState } from 'react'
import { login as loginApi } from '../services/api.js'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // A sessão fica salva no navegador para não se perder ao recarregar a página.
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')))

  async function login(email, senha) {
    const usuario = await loginApi(email, senha)
    localStorage.setItem('user', JSON.stringify(usuario))
    setUser(usuario)
  }

  function logout() {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
