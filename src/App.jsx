import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import User from './components/User'
import Querry from './components/Querry'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Batch from './components/Batch'
function App() {
  let [user,setUser] = useState([
    {
      id:1,
      name:"Mowni",
      email:"abc@gmail.com",
      mobile:"987654321",
      batch:"B45"
    },
    {
      id:2,
      name:"Mahat",
      email:"mahat@gmail.com",
      mobile:"8584838281",
      batch:"B44"
    },
    {
      id:3,
      name:"Dev",
      email:"dev@gmail.com",
      mobile:"9192939495",
      batch:"B52"
    }
  ])
  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
        <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
        <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/>
        <Route path='/batch' element={<Batch/>}>
            <Route path='user' element={<User/>}/>
            <Route path='class' element={<Class user={user} setUser={setUser}/>}/>
            <Route path='query' element={<Querry/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App