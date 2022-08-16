import { useState } from "react"


export const useCounter = ( initialValue = 0 ) => {
  
  const [counter, setCounter] = useState( initialValue )

  const counterAdd = ( value = 1 ) => {
    setCounter( counter + value )
  }

  const counterSubtract = ( value = 1 ) => {
    if( counter === 0 ) return

    setCounter( counter - value )
  }

  const counterReset = () => {
    setCounter( initialValue )
  }

  return {
    counter,
    counterAdd,
    counterSubtract,
    counterReset
  }

}