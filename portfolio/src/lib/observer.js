import React from 'react'

export const giveObserver = (setVisible) => {
  return new IntersectionObserver(
    entries => {
      entries.forEach(function(entry) {
        setVisible(entry.isIntersecting)
      } 
      )
    }
  )
}

export const useObserver = (observer, domRef) => {
  return React.useEffect(() => {
    observer.observe(domRef.current)
    return () => observer.disconnect()
  })
}