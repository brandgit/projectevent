import React,{useState} from 'react';
import { MdClear } from "react-icons/md";
import { useNavigate} from 'react-router-dom' 
import { AiTwotoneEnvironment,AiTwotoneCalendar } from "react-icons/ai";
import { useSelector } from "react-redux";
import Logo from '../components/Logo';


export const SearchContainer = ({searchInputClicked, setSearchInputClicked}) => {

    const [searchTerm, setSearchTem] = useState("")
    const navigate = useNavigate()
    console.log(searchTerm)
    const eventData = useSelector((state) => state.events.events);

    return (
        <div className='wrapperSearchContainer'>
                       <div className='flex  items-center justify-between w-[95%] h-[75px] bg-black'>
                            <Logo/>
                                <div className='wrapperInputSearch'>
                                    <input onChange={(e) =>{setSearchTem(e.target.value)}}  autoFocus className='flex items-center pl-[10px] w-[90%] h-[40px] rounded-[10px] bg-[#eae5e54d] border-0 text-white' type="text" placeholder="Search"/>
                                </div>
                                <div className='flex  w-[75px] h-full justify-end items-center cursor-pointer' >
                                    <MdClear  onClick={() =>{ setSearchInputClicked(!searchInputClicked)}} size={30} color="white"/>
                                </div>
        </div>

            <div className='flex flex-col gap-2 w-full'>
                
                    {eventData.filter((item) => {
                        return searchTerm.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchTerm)
                    }).map((item, index) =>(
                        <div key={index} onClick={() =>{
                            navigate("/payEvent",{state:{cover:item.cover,title:item.title,lieu:item.lieu,prix:item.prix,date:item.date,heure:item.heure,event:"Spectacle"}})
                          }} className='flex flex-col items-center justify-between  w-full cursor-pointer '>
                            <div className='item'>
                                <div className='w-[60px] h-[60px] bg-black rounded-[15px] '>
                                    <img className='w-full h-full rounded-[15px]' src={item.cover} alt="" />
                                </div>
                                <div className='ml-[10px]'>
                                    <h1 className='text-xl font-bold text-[white]'>{item.title}</h1>
                                </div>
                                <div className='flex items-center ml-[10px] '>
                                    <AiTwotoneEnvironment size={20} color="green"/>
                                    <h1 className=' text-xl  text-[white]'>{item.lieu}</h1>
                                </div>
                                <div className='flex items-center ml-[10px] '>
                                <AiTwotoneCalendar size={20} color="green"/>
                                    <h1 className=' text-xl font-bold text-[white]'>{item.date}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
