import React,{useState} from 'react'
import './App.css'
import Cart from './Cart'
import Dashboard from './Dashboard'
import Header from './Header'
import Sidebar from './Sidebar'
import Transfer from './Transfer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



export default function App() {
const [toggle, settoggle] = useState(true)

const handletoggle=()=>{
  settoggle(!toggle)
}

  return (

  <>
  <Router>
  <Header toggle={toggle} handletoggle={handletoggle}/>
  <div className='d-flex'>
  <Sidebar toggle={toggle} handletoggle={handletoggle}/>
<Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/transfer/:id" element={<Transfer/>}/>
  <Route path="/cart" element={<Cart/>}/>
</Routes>
</div>
  </Router>
  
  
  </>
  
  )
}
