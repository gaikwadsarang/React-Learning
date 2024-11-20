import Login from "./components/Login"
import Profile from "./components/Profil"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'


function App() {
  
  return (
    <UserContextProvider>
    <h1>dadada</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
