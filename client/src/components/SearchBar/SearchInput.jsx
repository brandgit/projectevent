import React from 'react'
import { MdSearch } from "react-icons/md";

export default function SearchInput({searchInputClicked, setSearchInputClicked})  {
  return (
    <div className='wrapperSearchInput'>
      <div  className='flex justify-end items-center w-full h-full cursor-pointer ' onClick={() =>{ setSearchInputClicked(!searchInputClicked)}}>
        <MdSearch size={20} color="white"/>
      </div>
    </div>
  )
}
