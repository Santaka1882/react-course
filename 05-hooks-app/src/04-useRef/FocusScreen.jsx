import { useRef } from "react"


export const FocusScreen = () => {

  const nameInputRef = useRef()
  const lastNameInputRef = useRef()

  const selectName = () => {
    nameInputRef.current.select()
  }

  const selectLastname = () => {
    lastNameInputRef.current.select()
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input 
        ref={ nameInputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mb-2" 
      />

      <input 
        ref={ lastNameInputRef }
        type="text"
        placeholder="Ingrese su apellido"
        className="form-control mb-2" 
      />

      <button 
        className="btn btn-primary"
        onClick={ selectName }
      >
        Change Name
      </button>

      <button
        className="btn btn-primary"
        onClick={ selectLastname }
      >
        Change Lastname
      </button>
    </>
  )
}