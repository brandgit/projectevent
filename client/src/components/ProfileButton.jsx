import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";
import ProfileContaent from './ProfileContaent';

export default function ProfileButton() {

  const [modal, setModal] = useState(false)

  console.log(modal)
  return (
    <div onClick={()=> {
      if(!modal){
        setModal(!modal)
      }else{
        setModal(modal)
      }

      setModal(!modal)
    } } className='flex items-center justify-center w-[60%] h-[40px] bg-[rgb(0,128,0)] rounded-[10px] cursor-pointer'>
      <Link className="flex justify-end" >
        <MdAccountBox size={20} color="white"/>
        {modal? <ProfileContaent modal = {modal} setModal = {setModal}/> : null}
      </Link>
    </div>
  )
}
