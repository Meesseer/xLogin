import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const username = "Ammar";
  const password = "NewPassword"
  const [form, setForm] = useState({
    username: "",
    password: "",
  })
  const [details, setDetails] = useState(false)
  const [isSubmitted, setIssubmitted] = useState(false)

  const handleChange = (e)=>{
    const {name, value} = e.target
    setForm(prev => ({
      ...prev, [name]: value
    }))
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    if(form.username === username && form.password === password){
      setDetails(true)
      setIssubmitted(true)
    }else{
      setDetails(false)
    }
  }

  return (
    <div className="App">
      {isSubmitted ? (
        <div>
          <h1>Login Page</h1>
          <h3>Welcome {form.username}</h3>
        </div>
      ):( <form onSubmit={handleSubmit}>
        <div>
          Username: <input type='text' name='username' value={form.username} onChange={handleChange} required></input>
        </div>
        <div>Password: <input type='password' name='password' value={form.password} onChange={handleChange} required></input></div>
        <div><button type='submit'>Submit</button></div>
      </form>)} 
    </div>
  );
}

export default App;
