import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo2.png";

export default function Logo() {
  return (
    <div>
      <Link  to="/"> <img className='h-[50px]' src={logo} alt="" /></Link>
      
    </div>
  )
}
