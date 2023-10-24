import { useState, useEffect } from 'react'

interface WindowSize {
  currentWidth: number | undefined
  currentHeight: number | undefined
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    currentWidth: undefined,
    currentHeight: undefined,
  })

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth, innerHeight } = window
      setWindowSize({ currentWidth: innerWidth, currentHeight: innerHeight })
    }

    window.addEventListener('resize', handleWindowResize)

    // Вызвать handleWindowResize() только при первом монтировании
    if (windowSize.currentWidth === undefined) {
      handleWindowResize()
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize])

  return windowSize
}

export default useWindowSize
