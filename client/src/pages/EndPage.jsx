import React from 'react'
import Footer from '../components/Footer/Footer'
import { useNavigate} from 'react-router-dom'
// import Logo from '../components/Goba/Logo'
import { CgChevronRight } from "react-icons/cg" ; 

export default function EndPage() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center bg-[black] '>
      <div className='flex  items-end justify-between min-w-[300px] w-[95%] bg-[black]'>
            {/* <Logo/> */}
      </div>
      <div className='flex flex-col mt-[100px] justify-center items-center w-full mb-[40px]' >
          <div className='flex flex-col p-[10px] w-[360px]  rounded-[15px] '>
              <div className='flex justify-center items-center w-full text-5xl ml-[20px] font-bold text-[green]'><h1 >Achat réssi 🎉 </h1></div>
          
          </div>
          </div>
       
      <div onClick={() =>{
                  navigate("/")
                }} className='flex justify-evenly items-center w-[230px] h-[60px] bg-[green]  text-l text-[white] rounded-[10px] cursor-pointer mt-[150px] mb-[40px]' >
          <h1 >Retour à la page d'accueil</h1>
          <CgChevronRight size={20} color="white"/>
      </div>
        <Footer/>
    </div>
  )
}
