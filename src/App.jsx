import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Capturas from './pages/Capturas.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rota privada */}
        <Route
          path="/capturas"
          element={
            <PrivateRoute>
              <Capturas />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}
