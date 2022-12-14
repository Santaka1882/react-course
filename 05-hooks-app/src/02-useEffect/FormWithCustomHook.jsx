import { useForm } from "../hooks/useForm"
import { Message } from "./Message"


export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  })

  return (
    <>
      <h1>Form with custom hook</h1>
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

      <input 
        type="password" 
        className="form-control mt-2" 
        placeholder="Password"  
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={ onResetForm }
      >
        Reset
      </button>

      {
        username === 'Santaka' && <Message />
      }
      

    </>
  )
}