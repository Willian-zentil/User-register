import React, {useState} from 'react'
import PopupAlert from '../popupAlert/popupAlert'

import './Forms.css'

 const Forms = (props) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [isValid, setIsValid] = useState(true)

  const cleanForms = () => {
    setName('')
    setAge('')
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    const groupData = [name, age]

    if(age < 0 || !name){
      setIsValid(false)
      cleanForms()
      return
    }

    cleanForms()
    setIsValid(true)

    props.onSaveDataForm(groupData)
  }

  const handlerName = (e)=> {
    setName(e.target.value)
  }

  const handlerAge = (e)=> {
    setAge(e.target.value)
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
          <div className='item-input'>
              <label>Username</label>
              <input type="text" placeholder='nome' value={name} onChange={handlerName} />
          </div>
          <div className='item-input'>
              <label>Age (Years)</label>
              <input type="number" placeholder='Age' onChange={handlerAge} value={age} />
          </div>
          <button type='submit'>Add User</button>
      </form>
      { isValid ? '' :
        <PopupAlert onValid={setIsValid} />
      }
    </>
  )
}

export default Forms