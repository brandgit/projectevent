import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileContaent ({modal, setModal})  {

    const buttons = [{screen:"/signIn",text:"Sign In"},{screen:"/signUp",text:"Create account"}]
    return (
        <div style={{ width:"300px",height:"250px", position:"fixed", top:'60px', borderRadius:"10px", right:'2.5%', backgroundColor:"rgba(0, 128, 0)"}}>
           <div style={{display:"flex",flexDirection:"column",alignItems:"center", width:"100%", padding:"10px",height:"100%" ,}}>
           <div className='flex justify-end w-full ' onClick={()=>{
                if(!modal){
                    setModal(!modal)
                }else{
                    setModal(modal)
                }
                setModal(!modal)
            }} >
                <h1 className='text-white'>Close</h1>
            </div>
            <h1 className='text-white text-3xl mt-5'>Hello</h1>
            <div className='flex justify-evenly mt-10 w-full '>
                {buttons.map((item, index)=>(
                    <Link to={item.screen}>
                        <div key={index} className='flex items-center justify-center w-[120px] h-[40px] bg-[rgb(255,255,255)] rounded-[10px] cursor-pointer'>
                            <h1 className='text-black text-sm font-bold'>{item.text}</h1>
                        </div>
                    </Link>
                ))}
            </div>
            
           </div>
        </div>
    );
};
