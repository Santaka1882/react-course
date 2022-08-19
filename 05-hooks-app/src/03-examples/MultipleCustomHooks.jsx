import { useFetch, useCounter, useForm } from "../hooks"
import { LoadingQuote, Quote } from "./"


export const MultipleCustomHooks = () => {

  const { formState, onInputChange, id } = useForm({
    id: '',
  })

  const { counter, counterAdd, counterSubtract } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ id != '' ? id : counter }`)
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={author} quote={quote}/>
      }

      <input 
        type="text" 
        className="form-control mb-2" 
        placeholder="QuoteId"
        name="id"
        value={ id }
        onChange={ onInputChange }
      />

      <button 
        className="btn btn-primary"
        disabled= { isLoading }
        onClick={ () => counterAdd() }
      >
        Next quote
      </button>

      <button 
        className="btn btn-primary"
        disabled= { isLoading || counter === 1}
        onClick={ () => { counterSubtract() } }
      >
        Previous quote
      </button>

    </>
  )
}