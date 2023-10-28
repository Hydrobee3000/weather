import { useState, useEffect } from 'react'

interface IWindowSize {
  currentWidth: number | undefined
  currentHeight: number | undefined
}

// custom hook for getting window size
function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    currentWidth: undefined,
    currentHeight: undefined,
  })

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth, innerHeight } = window
      setWindowSize({ currentWidth: innerWidth, currentHeight: innerHeight })
    }

    window.addEventListener('resize', handleWindowResize)

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
