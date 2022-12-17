import React, {useState} from 'react'

import Card from './components/card/Card';
import Forms from './components/Forms/Forms';
import ShowUser from './components/ShowUser/ShowUser';

import './App.css';

function App() {

  const [dataForm, setDataForm] = useState([])

  const handlerForm = (uName, uAge) => {
    setDataForm((prevState)=>{
      return [...prevState, {name: uName, age: uAge}]
    })
  }

  return (
    <div className="App content-bg">
      <Card>
        <Forms onSaveDataForm={handlerForm} />
      </Card>
      {
        dataForm.lenght > 0 ? console.log(dataForm) : null
      }
      <Card>
        <ShowUser users={dataForm} />
      </Card>
    </div>
  );
}

export default App;
