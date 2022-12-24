import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { CgChevronRight } from "react-icons/cg" ; 

import Footer from '../components/Footer/Footer';
import Services from '../components/global/Services';



export default function Concerts() {

const navigate = useNavigate()
  const eventData = useSelector((state) => state.events.events);

   const filteList = eventData?.filter((event) => event.type === "concert")

  return (
  
    <div className='wrapperEvent'>
       <div className='p-[80px]'>
      
      </div>
        <div className='wrapperTopEventsC'>
      
        </div>
        <div className='flex items-center justify-center w-full p-[20px] text-xl font-bold bg-[black] text-[white]'><h1 >CONCERTS</h1></div>
        <div className='flex items-center justify-center w-full'> <div className='flex  w-[95%] p-[5px]'><h1 className='text-[white]'>Liste de concerts :</h1></div></div>
        <div className='flex items-center justify-center w-fll'>
      <div className='flex flex-col items-center justify-between w-[95%] '>
            <div className='wrapperEvents'>
              {filteList?.map((item, index) => (
                <div key={index}  onClick={() =>{
                  navigate("/payEvent",{state:{cover:item.cover,title:item.title,lieu:item.lieu,prix:item.prix,date:item.date,heure:item.heure,event:"Spectacle"}})
                }}  className='items' >
                    <div key={item.id} className='wrapperImageEvent'>
                         <img key={item.id} className='imageEvent' src={item.cover} alt={item.title} />
                    </div>
                    <div  className='buttonEvent'>
                       <div className='flex w-[85%] h-full flex-col justify-evenly bg-[white] rounded-bl-[15px] pl-[10px]'>
                            <h1 className='text-[black]'>{item.title}</h1>
                            <p className='text-[black]'>{item.lieu}</p>
                       </div>
                       <div className='flex justify-center items-center w-[15%] h-full bg-[green] rounded-br-[15px]'>
                            <CgChevronRight size={20} color="white"/>
                       </div>
                    </div>
                </div>
              ))}
            </div>
          <Services/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}