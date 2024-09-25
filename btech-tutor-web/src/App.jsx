import React from "react"
import Navbar from "./components/Navbar"
import { Outlet, Route, Routes } from "react-router-dom"
import Btech from "./pages/Btech"
import Gate from "./pages/Gate"
import Bundle from "./pages/Bundle"
import Internship from "./pages/Internship"
import Project from "./pages/Project"
import List from "./components/List"
import Footer from "./components/Footer"
import GateList from "./components/GateList"



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Btech />} />
        <Route path='/btech' element={<Btech />} />
        <Route path='/gate' element={<Gate />} />
        <Route path='/bundle' element={<Bundle />} />
        <Route path='/internship' element={<Internship />} />
        <Route path='/project' element={<Project />} />
        <Route path='/list' element={<List />} />
        <Route path='/gate-list' element={<GateList />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  )
}
export default App
