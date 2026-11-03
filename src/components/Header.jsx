import { Link, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/content.js'
import { useAuth } from '../hooks/useAuth.js'

const linkClass = 'block whitespace-nowrap py-1 font-bold text-light hover:text-blue-light'

export default function Header() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  function sair() {
    logout()
    navigate('/')
  }

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-col items-center gap-2 bg-dark/65 px-3 py-3 text-sm backdrop-blur-md lg:flex-row lg:justify-between lg:gap-5 lg:px-8 lg:text-base">
      <a href="/#hero" className="font-bold text-light hover:text-blue-light">
        <h1 className="text-2xl leading-none sm:text-3xl">LineUP</h1>
      </a>
      <nav className="max-w-full">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className={linkClass} href={`/#${link.id}`}>{link.label}</a>
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <li><Link className={linkClass} to="/capturas">Minhas capturas</Link></li>
              <li><button type="button" onClick={sair} className={`${linkClass} cursor-pointer`}>Sair</button></li>
            </>
          ) : (
            <li><Link className={linkClass} to="/login">Entrar</Link></li>
          )}
        </ul>
      </nav>
    </header>
  )
}
