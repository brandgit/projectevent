import React from 'react'
import Wrapper from '../components/global/Wrapper'
import Header from '../components/Header/Header'

export default function Profile() {
  return (
    <Wrapper>
        <Header/>
        <h1 className='text-3xl font-bold underline'>
          Profile
        </h1>
    </Wrapper>
  )
}
