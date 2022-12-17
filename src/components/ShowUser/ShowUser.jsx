import React, {useState} from 'react'

import './ShowUser.css'

const ShowUser = (props) => {
  const [dataPassed, setdataPassed] = useState('')


  const handlerDatapassed = () => {
    console.log(props)
  }

  return (
    <ul>{props.users.map(item => 
      <li key={item.name}>{item.name} ({item.age}years old)</li>)}
    </ul>
  )
}

export default ShowUser;