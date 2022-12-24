import React,  {useState} from 'react'
import { Link} from 'react-router-dom';
import { SearchContainer } from '../../Container/SearchContainer';
import Logo from '../Logo'
import ProfileButton from '../ProfileButton'
import SearchBarInput from '../SearchBar/SearchBarInput'
import SearchInput from '../SearchBar/SearchInput'

export default function Header() {

  const [searchInputClicked, setSearchInputClicked] = useState(false)

  return (
    <div style={{width:"100%",
     backgroundColor:"rgba(0, 0, 3, 0.5)", 
     position:"fixed", backdropFilter:"blur(5px)"}}>
    <div className='flex fixed justify-center w-[100%] h-[75px] ' >
        <div className='flex justify-between w-[95%] h-full '>
          <div className='flex items-center'>
            <Logo/>
          </div>
          <SearchBarInput  searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>
          <div className='flex justify-end items-center w-[130px]'>
          <SearchInput searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>
          {searchInputClicked ? <SearchContainer searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>:null}
            <ProfileButton/>
          </div>
        </div>
    </div>
     <div className='flex justify-center items-end w-[100%] h-[150px] ' > 
     <div className='flex flex-col justify-between w-[95%]  '>
           <div className='flex justify-evenly items-center w-full h-[100px]   min-w-[300px]'>
                 <Link to="/"><h2 className='text-xl font-bold text-[green]'>Concerts</h2></Link>
                 <Link to="/spectacles"><h2 className='text-xl font-bold text-[green]'>Spectacles</h2></Link>
                 <Link to="/festivales"><h2 className='text-xl font-bold text-[green]'>Festivals</h2></Link>
           </div>
     </div>
</div>
</div>
  )
}
