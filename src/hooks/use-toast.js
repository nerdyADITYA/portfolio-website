import { useState, useCallback } from 'react'

// Simple toast hook for basic functionality
export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, variant = 'default' }) => {
    // For now, just log to console - you can implement proper toast UI later
    console.log('Toast:', { title, description, variant })
    
    // You could also add to a toast array and manage state here
    const newToast = {
      id: Date.now(),
      title,
      description,
      variant
    }
    
    setToasts(prev => [...prev, newToast])
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id))
    }, 5000)
  }, [])

  return {
    toast,
    toasts,
    dismiss: (toastId) => {
      setToasts(prev => prev.filter(t => t.id !== toastId))
    }
  }
}
