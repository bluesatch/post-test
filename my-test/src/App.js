import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header';
import Home from './components/Home';
import Form from "./components/Form";


function App() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: ''
  })
  const [homeData, setHomeData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3005/api/users').then(res => setHomeData(res.data))
  }, [])

  const handleSubmit =()=> {
    axios({
      method: 'post',
      url: 'http://localhost:3005/api/users/create',
      data: formData
    })
  }

  const handleChange=(event)=> {
    const {name, value} = event.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={
          <Home formData={homeData}/>} 
        />
        <Route path='/createAccount' element={
          <Form 
                formData={formData}
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
          />} />
      </Routes>
    </div>
  )
}

export default App;
