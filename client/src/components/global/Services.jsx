import React from 'react'
import { AiOutlineUserDelete, AiFillEuroCircle, AiTwotoneUnlock } from "react-icons/ai";

export default function Services() {
  return (
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
  )
}
