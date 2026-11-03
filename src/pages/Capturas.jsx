import { useCapturas } from '../hooks/useCapturas.js'
import CapturaCard from '../components/CapturaCard.jsx'

export default function Capturas() {
  const { capturas, loading, error } = useCapturas()

  return (
    <section className="min-h-screen w-full bg-dark p-8 pt-32 text-center">
      <h2 className="mb-8 text-3xl font-bold text-blue-light">Minhas capturas</h2>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capturas.map((c) => (
          <CapturaCard key={c.id} {...c} />
        ))}
      </div>
    </section>
  )
}
