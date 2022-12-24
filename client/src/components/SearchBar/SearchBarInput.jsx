import React from 'react'
import { MdSearch } from "react-icons/md";

export default function SearchBarInput({searchInputClicked, setSearchInputClicked}) {
  return (
    <div className='wrapperSearchBarInput'>
      <div className='flex items-center w-full h-full'>
        <div className='flex justify-between items-center p-[15px] w-full h-[40px] bg-[#eae5e54d] rounded-[10px] cursor-pointer' onClick={() =>{ setSearchInputClicked(!searchInputClicked)}}>
          <MdSearch size={30} color="gray" className='bg-transparent'/>
          <p className='text-[grey]'>Search</p>
        </div>
      </div>
    </div>
  )
}
