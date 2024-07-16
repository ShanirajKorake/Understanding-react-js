import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

import ContextProvide from './context/ContextProvide'
function App() {


  return (
    <ContextProvide>
      <h1>React Context API</h1>
      <Login/>
      <Profile/>
    </ContextProvide>
  )
}

export default App
