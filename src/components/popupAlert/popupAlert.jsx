
import React from 'react'

import './popupAlert.css'

function PopupAlert(props) {

  const handlerValid = () => {
    props.onValid(true)
  }

  return (
    <>
      <div className='bg-app' onClick={handlerValid}></div>
      <div className='popup-alert'>
          <div className='header-popup'>
              <h3>Invalid Input</h3>
          </div>
          <p>Please enter a valid values</p>
          <button type='button' onClick={handlerValid}>Okay</button>
      </div>
    </>
  )
}

export default PopupAlert