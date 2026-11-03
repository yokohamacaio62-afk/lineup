import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

const inputClass = 'w-full rounded-lg border-2 border-light/30 bg-dark px-3 py-2 text-light outline-none focus:border-blue-light'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await login(email, senha)
      navigate('/capturas')
    } catch (err) {
      setErro(err.message)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-dark p-8 pt-32">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-blue p-8 text-left">
        <h2 className="text-center text-3xl font-bold">Entrar</h2>
        <label className="flex flex-col gap-1 font-semibold">
          E-mail
          <input className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label className="flex flex-col gap-1 font-semibold">
          Senha
          <input className={inputClass} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </label>
        {erro && <p className="text-sm font-semibold">{erro}</p>}
        <button type="submit" className="mt-2 rounded-full border-2 border-light bg-transparent px-8 py-2.5 font-bold text-light transition-colors duration-700 hover:bg-light hover:text-blue">
          Entrar
        </button>
      </form>
    </section>
  )
}
