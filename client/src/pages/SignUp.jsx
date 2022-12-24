import React,{useState,useContext} from 'react'
import Logo from '../components/Logo'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link} from 'react-router-dom'

function Clear() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export default function SignUp() {

  const navigate = useNavigate()

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [address, setAddress] = useState('');
  const [ville, setVille] = useState('');
  const [pays, setPays] = useState('');
  const [cp, setCp] = useState('');
  const [mail, setMail] = useState('');
  const [mdp, setMdp] = useState('');

  const handleLogin = (e) =>{
    e.preventDefault();

    axios({
      method:"post",
      url:'http://127.0.0.1:5000/api/user/register',
      data:{
        mail: mail,
        mdp: mdp,
        nom: nom,
        prenom: prenom,
        ville: ville,
        address: address,
        pays: pays,
        cp: cp,
      }
    }).then((res) =>{
      if(res.data.errors){
        console.log("Erreur dans la saisie")
      }else{
        console.log("Vous êtes connecter")
        console.log(res.data.user)
        navigate("/signIn")
      }
    }).catch((err)=>{
        console.log(err);
        console.log("Une du server");
      })
  }

  const iduser = useSelector((state) => state.iduser.iduser);
  console.log("Id: "+iduser)
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
        <h3 className='text-white text-xl'>LET'S SEE WHAT'S NEW</h3>
      </div>
      <div className='flex justify-center w-full p-4'>
        <h3 className='font-bold text-3xl text-[green]'>CREATE A COUNT</h3>

      </div>
      <div className='flex w-full p-5 '>
        <h3 className='text-white'>Already member ? </h3>
        <h3 className='text-[green] font-bold ml-2'>Sign in</h3>
      </div>
    </div>
    <form className=' w-full px-4' action='' onSubmit={handleLogin} id="sin-up-form">
      <div className='w-full py-7 '>
        <input  className='flex  mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="nom" id="nom" placeholder="Nom" onChange={(e) => setNom(e.target.value)} value={nom}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="prenom" id="prenom" placeholder="Prenom" onChange={(e) => setPrenom(e.target.value)} value={prenom}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="address" id="address" placeholder="23 rue Laurent " onChange={(e) => setAddress(e.target.value)} value={address}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="ville" id="ville" placeholder="Ville" onChange={(e) => setVille(e.target.value)} value={ville}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="pays" id="pays" placeholder="Pays" onChange={(e) => setPays(e.target.value)} value={pays}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="cp" id="cp" placeholder="cp" onChange={(e) => setCp(e.target.value)} value={cp}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"text"} name="mail" id="mail" placeholder="Mail" onChange={(e) => setMail(e.target.value)} value={mail}/>
        <input  className='flex mt-7 items-center pl-[10px] w-[320px] h-[50px] rounded-[10px] bg-[grey] border-0 text-white' type={"password"} name="mdp" id="mdp" placeholder="Password" onChange={(e) => setMdp(e.target.value)} value={mdp}/>
        
      </div>
      <div className='flex justify-between w-[320px] mb-10'>
        <button onClick={Clear} className=' w-[49%] h-[50px] rounded-[15px] bg-[grey] text-white font-bold'>Clean</button>
        <input className='w-[49%] h-[50px] rounded-[15px] bg-[green] text-white font-bold' type={"submit"} value="Register" >
        </input>
      </div>
    </form>
    </div>
  </div>
  )
}
