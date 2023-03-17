import { useState, useEffect } from 'react'

/*
 this custom hook takes an array of suffix values and returns an array of state variables with those suffix values
*/

const useSuffixValues = (suffixValues: string[]): string[] => {
  // create an array with the same number of elements as the `suffixValues` array and fill it with empty strings

  const initialSuffixes: string[] = Array(suffixValues?.length).fill('')

  const [suffixes, setSuffixes] = useState<string[]>(initialSuffixes)

  // update the `suffixes` array with the values from the `suffixValues` array
  useEffect(() => {
    setSuffixes(suffixValues)
  }, [suffixValues])

  return suffixes
}

export default useSuffixValues
