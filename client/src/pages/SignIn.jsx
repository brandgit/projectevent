import React,{useState,useContext} from 'react'
import Logo from '../components/Logo'
import { useNavigate,Link} from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setIdUser } from '../feature/user.slice';
import { UserContext } from '../context/UserContext';

function Clear() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export default function SignIn() {
  const navigate = useNavigate()
  const {value, setValue} = useContext(UserContext)

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [address, setAddress] = useState('');
  const [ville, setVille] = useState('');
  const [pays, setPays] = useState('');
  const [cp, setCp] = useState('');
  const [mail, setMail] = useState('');
  const [mdp, setMdp] = useState('');
  const dispatch = useDispatch();
  
  const handleLogin = (e) =>{
    e.preventDefault();

    axios({
      method:"post",
      url:'http://127.0.0.1:5000/api/user/login',
      data:{
        mail: mail,
        mdp: mdp,
      }
    }).then((res) =>{
      if(res.data.errors){
        console.log("Erreur dans la saisie")
      }else{
        console.log("Vous êtes connecter")
        console.log(res.data.user)
        dispatch(setIdUser(res.data.user))
        setValue("Nouvelle Value BRAND")
        navigate("/")
      }
    }).catch((err)=>{
        console.log(err);
        console.log("Une du server");
      })
  }
  return (
        <div className='flex items-center justify-center w-full h-[100vh] min-w-[360px] bg-black'>
          <div  className='pop-up'>
          <div className='px-2 flex items-center w-full h-[70px]'>
            <Link to="/">
              <Logo />
            </Link>
            <div className='flex justify-evenly items-center w-[250px] h-[100%] bg-transparent '>
              <Link to="/"><h1 className='text-white font-bold' >Home</h1></Link>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex w-full p-4'>
              <h3 className='text-white text-xl'>START FOR FREE</h3>
            </div>
            <div className='flex justify-center w-full p-4'>
              <h3 className='font-bold text-3xl text-[green]'>LOG IN</h3>
            </div>
            <div className='flex w-full p-5 '>
              <h3 className='text-white'>Already member ? </h3>
              <h3 className='text-[green] font-bold ml-2'>Sign up</h3>
            </div>
          </div>
    
          <form className=' w-full px-4' action='' onSubmit={handleLogin} id="sin-up-form">
            <div className='w-full py-7 '>
              <input  autoFocus className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="mail" id="mail" placeholder="Email" onChange={(e) => setMail(e.target.value)} value={mail}/>
              <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"password"} name="mdp" id="mdp" placeholder="Password" onChange={(e) => setMdp(e.target.value)} value={mdp}/>
            </div>
            <div className='flex justify-between w-[320px]'>
              <button onClick={Clear} className=' w-[49%] h-[50px] rounded-[15px] bg-[grey] text-white font-bold'>Clean</button>
              <input className='w-[49%] h-[50px] rounded-[15px] bg-[green] text-white font-bold' type={"submit"} value="Login" >
              </input>
            </div>
          </form>
          </div>
        </div>
  )
}
