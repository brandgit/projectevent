import React from 'react'
// import Footer from '../components/Footer/Footer'
import { useNavigate} from 'react-router-dom'
// import Logo from '../components/Goba/Logo'
import { AiFillCreditCard, AiFillLock } from "react-icons/ai";
import Logo from '../components/Logo';
import Footer from '../components/Footer/Footer';

export default function CardEvents() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center bg-[black] '>
      <div className='flex  items-end justify-between min-w-[300px] w-[95%] bg-[black]'>
          <Logo/>
      </div>
      <div className='flex flex-col justify-center items-center w-full mb-[40px]' >
          <div className='flex flex-col p-[10px] w-[360px] mt-10 rounded-[15px] bg-[green]'>
              <div className='flex items-center w-full text-xl font-bold text-[white]'><h1 >Adress de facturation</h1></div>
              <div className='flex flex-col w-full p-[20px] text-l text-[white]'>
                  <h1 >Nom</h1>
                  <h1 >Prenom</h1>
                  <h1 >Adress</h1>
                  <h1 >Ville</h1>
                  <h1 >CP</h1>
                  <h1 >Pays</h1>
              </div>
          </div>
          <div className='flex flex-col p-[10px] w-[360px] mt-10 rounded-[15px] bg-[green] '>
              <div className='flex items-center w-full text-xl font-bold text-[white]'><h1 >Coordonnées bancaires</h1></div>
              <div className='flex flex-col w-full p-[20px] text-l text-[white]'>
                  <h1 >Nous n'enregistrons pas vos informations bancaires.</h1>
              </div>
              <div className='flex flex-col w-full p-[20px] text-l text-[white]'>
                  <div className='flex flex-col justify-evenly pl-[10px] w-[50%] h-[70px] rounded-[10px] bg-[grey] border-0 text-white'>
                  <AiFillCreditCard size={20} color="white"/>
                  <h1 >Carte bancaire</h1>
                  </div>
                  <div className='w-ful'>
                      <h1 >Numero de cart</h1>
                      <input  autoFocus className='flex items-center pl-[10px] w-[100%] h-[40px] rounded-[10px] bg-[grey] border-0 text-white' type="text" placeholder="1234 2356 7832 1432"/>
                  </div>
                  <div className='flex w-ful'>
                      <div className='w-[50%]'>
                          <h1 >Date d'expiration</h1>
                          <input   className='flex items-center pl-[10px] w-[95%] h-[40px] rounded-[10px] bg-[grey] border-0 text-white' type="text" placeholder="MM / AA"/>
                      </div>
                      <div className='flex flex-col w-[50%] '>
                          <h1 className='ml-[9px]' >CVC</h1>
                          <input   className='flex items-center pl-[10px] w-[95%] h-[40px] rounded-[10px] bg-[grey] border-0 text-white self-end' type="text" placeholder="535"/>
                      </div>  
                  </div>
                       
                  <div className='w-ful'>
                      <h1 >Pays</h1>
                      <select name="cars" id="cars" className='flex items-center pl-[10px] w-[100%] h-[40px] rounded-[10px] bg-[grey] border-0 text-[#bab7b7]'>
                          <option value="volvo">Allemagne</option>
                          <option value="volvo">Angleterre</option>
                          <option value="volvo">Belgique</option>
                          <option value="saab">Canada</option>
                          <option value="mercedes">Etats-unis</option>
                          <option value="audi">France</option>
                          <option value="audi">Portugal</option>
                          <option value="audi">Suisse</option>
                      </select>
                  </div>
              </div>

          </div>
      </div>
      <div  onClick={() =>{
                  navigate("/endPage")
                }} className='flex justify-evenly items-center w-[170px] h-[60px] bg-[green]  text-l text-[white] rounded-[10px] cursor-pointer mb-[40px]' >
          <h1 >Finaliser</h1>
          <AiFillLock size={20} color="white"/>
      </div>
        <Footer/>
    </div>
  )
}
