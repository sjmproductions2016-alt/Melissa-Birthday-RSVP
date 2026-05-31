import { useState, useEffect } from 'react'

interface CountdownResult {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

function calculate(target: Date): CountdownResult {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    isPast: false,
  }
}

export function useCountdown(target: Date): CountdownResult {
  const [value, setValue] = useState<CountdownResult>(() => calculate(target))

  useEffect(() => {
    const id = setInterval(() => setValue(calculate(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return value
}
