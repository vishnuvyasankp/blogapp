import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Addform from './pages/Addform';
export default function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Add" element={<Addform />} />
    </Routes>
 </>
  )
}
