import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

  const {counter, counterAdd, counterSubtract, counterReset} = useCounter()

  return (
    <>
      <h1>Counter: { counter }</h1>
      <hr />

      <button className="btn btn-primary" onClick={ () => counterAdd() }>+1</button>
      <button className="btn btn-primary" onClick={ counterReset }>Reset</button>
      <button className="btn btn-primary" onClick={ () => counterSubtract() }>-1</button>

    </>
  )
}