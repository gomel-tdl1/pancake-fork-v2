// eslint-disable-next-line @typescript-eslint/no-shadow
import { useEffect, useRef } from 'react'

export default function useInterval(callback: () => void, delay: null | number, leading = true) {
  const savedCallback = useRef<() => void>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      const {current} = savedCallback
      // eslint-disable-next-line no-unused-expressions
      current && current()
    }

    if (delay !== null) {
      if (leading) tick()
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
    return undefined
  }, [delay, leading])
}
