import React from 'react'
import { Routes, Route } from "react-router-dom";

import Concerts from '../pages/Concerts';
import Festivales from '../pages/Festivales';
import Spectacles from '../pages/Spectacles';


export default function RoutesEvents() {
  return (

      <Routes>
        <Route index element={<Concerts />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/festivales" element={<Festivales />} />
        <Route path="/spectacles" element={<Spectacles />} />
      </Routes>
  
  )
}
