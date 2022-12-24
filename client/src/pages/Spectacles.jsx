import React from 'react'
import { CgChevronRight } from "react-icons/cg" ; 
import { AiOutlineUserDelete, AiFillEuroCircle, AiTwotoneUnlock } from "react-icons/ai";
import { useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import Footer from '../components/Footer/Footer';


export default function Spectacles() {

  const navigate = useNavigate()
  const eventData = useSelector((state) => state.events.events);

  const filteList = eventData?.filter((event) => event.type === "spectacle")

  return (
    <div className='wrapperEvent'>
       <div className='p-[80px]'>
      
      </div>
        <div className='wrapperTopEventsS'>
      
        </div>
        <div className='flex items-center justify-center w-full p-[20px] text-xl font-bold bg-[black] text-[white]'><h1 >SPECTACLES</h1></div>
        <div className='flex items-center justify-center w-full'> <div className='flex  w-[95%] p-[5px]'><h1 className='text-[white]'>Liste de spectacles :</h1></div></div>
        <div className='flex items-center justify-center w-fll bg-[red]'>
    <div className='flex flex-col items-center justify-between w-[95%] '>
            <div className='wrapperEvents'>
              {filteList.map((item, index) => (
                <div key={index} onClick={() =>{
                  navigate("/pay",{state:{cover:item.cover,title:item.title,lieu:item.lieu,prix:item.prix,date:item.date,heure:item.heure,event:"Spectacle"}})
                }}  className='items'>
                    <div className='wrapperImageEvent'>
                         <img className='imageEvent' src={item.cover} alt="" />
                    </div>
                    <div className='buttonEvent'>
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
            <div className='wrapperServices'>
                  <div className='flex items-center h-[100px] mt-[20px]'>
                        <div className='flex items-center justify-center w-[70px] h-[70px] bg-[green] rounded-[15px] '>
                            <AiFillEuroCircle size={50} color="white"/>
                        </div>
                        <div className='flex flex-col ml-[5px]'>
                          <h1 className='font-bold text-[white]'>AGENCE DE BILLETTERIE</h1>
                          <p className='text-[white]'>Commande 100% garantie</p>
                        </div>
                  </div>
                  <div className='flex items-center h-[100px] mt-[20px]'>
                        <div className='flex justify-center items-center w-[70px] h-[70px] bg-[green] rounded-[15px] '>
                           <AiTwotoneUnlock size={50} color="white"/>
                        </div>
                        <div className='flex flex-col ml-[5px]  '>
                        <h1 className='font-bold text-[white]'>PAIEMENTS ECURISE</h1>
                        <p className='text-[white]'>E-transactions UP2PAY</p>
                        </div>
                  </div>
                  <div className='flex items-center h-[100px] mt-[20px]'>
                        <div className='flex justify-center items-center w-[70px] h-[70px] bg-[green] rounded-[15px] '>
                            <AiOutlineUserDelete size={50} color="white"/>
                        </div>
                        <div className='flex flex-col ml-[5px]'>
                        <h1 className='font-bold text-[white]'>SERVICE CLIENT DEDIE</h1>
                        <p className='text-[white]'>Nous sommes à votre écoute</p>
                        </div>
                  </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
