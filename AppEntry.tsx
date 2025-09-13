import React, { useEffect, useState } from 'react'
import App from './App'
import i18n from './src/i18n'

export default function AppEntry() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true)
    } else {
      i18n.on('initialized', () => setReady(true))
    }
  }, [])

  if (!ready) return null // Add a loader here or splash
  return <App />
}
