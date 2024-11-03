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
  const [error, setError] = useState("");

  const handleChange = (e)=>{
    setForm(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    if(form.username === username && form.password === password){
      setDetails(true)
      setIssubmitted(true)
    }else{
      setDetails(false)
      setError("Invalid username or password. Please try again.");
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
          Username: <input type='text' label="username" name='username' value={form.username} onChange={handleChange} required></input>
        </div>
        <div>Password: <input type='password' label="password" name='password' value={form.password} onChange={handleChange} required></input></div>
        <div><button type='submit'>Submit</button></div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>)} 
    </div>
  );
}

export default App;
