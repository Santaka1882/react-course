import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Santaka',
    email: 'mail@example.com',
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [ name ]: value,
    })
  }

  useEffect(() => {
    // console.log('useEffect Called')
  }, [])

  useEffect(() => {
    // console.log('formState Changed')
  }, [ formState ])

  useEffect(() => {
    // console.log('username Changed')
  }, [ username ])

  useEffect(() => {
    // console.log('email Changed')
  }, [ email ])

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
        type="text" 
        className="form-control" 
        placeholder="Username"  
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input 
        type="email" 
        className="form-control mt-2" 
        placeholder="mail@example.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        username === 'Santaka' && <Message />
      }
      

    </>
  )
}