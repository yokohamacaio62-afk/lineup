import { useEffect, useState } from 'react'
import { getCapturas } from '../services/api.js'

/** Hook customizado: busca as capturas na API e controla carregamento e erro. */
export function useCapturas() {
  const [capturas, setCapturas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCapturas()
      .then(setCapturas)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { capturas, loading, error }
}
