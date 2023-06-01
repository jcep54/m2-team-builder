
import './App.css';
import React, { useState } from 'react';
import Form from './Form';
function App() {

  /**
   * create state variables to hold team members
   * and hold form vlues
   * 
   * Create update and submit functions 
   */
  const [members, setMembers] = useState([])
  const [values, setValues] = useState({name:'', email:'', role:'', salary:0});

const onSubmit = () => {
  setMembers([values,...members])
  setValues({name:'', email:'', role:'', salary:0})
}
const onChange = (name , value) =>{
  setValues({...values, [name]:value})
}

  return (
    <div className="App">
      <h1>Team builder app!</h1>
      <Form
        values={values}
        change ={onChange}
        submit={onSubmit}
      />
      {members.map((mem,idx) =>{
        return(
          <div>
            {mem.name} {mem.email} {mem.role} {mem.salary}
          </div>
        )
      })}
     
    </div>
  );
}

export default App;
