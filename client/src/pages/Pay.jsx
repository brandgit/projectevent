import React from 'react'
import Footer from '../components/Footer/Footer'
import {useLocation, useNavigate} from 'react-router-dom'
import { CgChevronRight } from "react-icons/cg" ; 
import {  AiFillEuroCircle, AiTwotoneEnvironment,AiTwotoneCalendar,AiFillClockCircle } from "react-icons/ai";
import Logo from '../components/Logo';
import Services from '../components/global/Services';

export default function Pay() {
    const location = useLocation();
    const navigate = useNavigate()
    // const iduser = useSelector((state) => state.iduser.iduser);
    // console.log(iduser)

    const cover = location.state.cover
    const lieu = location.state.lieu
    const prix = location.state.prix
    const date = location.state.date
    const heure = location.state.heure
    const title = location.state.title
    const event = location.state.event
    // const cover = location.state.cover
    return (
  <div className='flex flex-col items-center justify-between w-[100%]   bg-[black]'>
  <div className='flex  items-end justify-between min-w-[300px] w-[95%] bg-[black]'>
          <Logo/>
      </div>
      <div className='wrapperTopEventsP'>
      <img className='imageEventP' src={cover} alt="" />
      </div>
      <div className='flex items-center justify-center w-full p-[20px] bg-[black] text-3xl font-bold text-[white]'><h1 >{event}</h1></div>
      <div className='flex items-center justify-center w-full'> <div className='flex  w-[95%] p-[5px]'><h1 className='text-[white]'>Votre evenement :</h1></div></div>
      <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col justify-between w-[95%] cursor-pointer'>
        
              <div  onClick={() =>{
          navigate("/cart")
        }} className='flex w-[100%]  items-center'>
               <div className='wrapperEvent2'>
               <div className='events'>
                    <div className='p-[10px] mt-[15px] mb-[15px]'>
                        <h1 className='text-2xl font-bold text-[green]'>{title}</h1>
                    </div>
                    <div className='flex items-center p-[10px] mt-[15px] mb-[15px]'>
                        <AiTwotoneEnvironment size={20} color="green"/>
                        <h1 className='ml-[10px] text-xl  text-[green]'>{lieu}</h1>
                    </div>
                    <div className='flex items-center p-[10px] mt-[15px] mb-[15px]'>
                    <AiTwotoneCalendar size={20} color="green"/>
                        <h1 className='ml-[10px] text-xl font-bold text-[green]'>{date}</h1>
                    </div>
                    <div className='flex items-center p-[10px] mt-[15px] mb-[15px]'>
                    <AiFillClockCircle size={20} color="green"/>
                        <h1 className='ml-[10px] text-xl font-bold text-[green]'>{heure}</h1>
                    </div>
                    <div className='flex items-center p-[10px] mt-[15px] mb-[15px]'>
                    <AiFillEuroCircle size={20} color="green"/>
                        <h1 className='ml-[10px] text-xl font-bold text-[green]'>{prix}€</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center  w-[10%]  bg-[green] rounded-br-[15px]'>
                    <CgChevronRight size={20} color="white"/>
                </div>
                </div>
                </div>
                
               </div>
               <div className='flex justify-center w-full'>
                 <div className='w-[90%]'>
                    <Services/>
                 </div>
               </div>
             
          </div>
          <Footer/>
  </div>
    )
  }
