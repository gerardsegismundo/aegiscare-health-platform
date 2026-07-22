import { useState, useEffect } from 'react'

export function useLivePulse(initialBpm = 72) {
  const [liveBpm, setLiveBpm] = useState(initialBpm)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveBpm((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1
        const next = prev + delta
        return next > 80 ? 76 : next < 65 ? 68 : next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return liveBpm
}