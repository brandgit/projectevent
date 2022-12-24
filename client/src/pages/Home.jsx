import React from 'react'
import Header from '../components/Header/Header'
import RoutesEvents from '../routes/RoutesEvents';
import {  useSelector } from "react-redux";

export default function Home() {
  const iduser = useSelector((state) => state.iduser.iduser);
  console.log("Id: "+iduser)
  return (
  
    <div className='flex flex-col items-center w-full h-[100vh] bg-black '>
        <Header/>
        <RoutesEvents/>
    </div>
  )
}


