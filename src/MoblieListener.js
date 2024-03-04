import React, { useContext, useEffect, useState, createContext } from 'react'
import PropTypes from 'prop-types'

const ListenerContext = createContext()

export const MobileListener = ({ children }) => {

  const [mobileDetect, setMobileDetect] = useState({
    isMobile: window.innerWidth <= 768,
  })

  const handleResize = () => {
    setMobileDetect({
      isMobile: window.innerWidth <= 768,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ListenerContext.Provider value={ mobileDetect }>
      {children}
    </ListenerContext.Provider>
  )
}

MobileListener.propTypes = {
  children: PropTypes.node.isRequired
}

// MOBILE DETECT HOOK
export const useMobileDetect = () => {
  const context = useContext(ListenerContext)
  if (!context) {
    throw new Error('useMobileDetect must be used within a MobileListener')
  }
  return context
}
