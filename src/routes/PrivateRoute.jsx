import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

/** Rota privada: sem login, redireciona para /login. */
export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" replace />
}
