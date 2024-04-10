import React from 'react'
import { Left } from '../components/Signup/Left'
import { RightSection } from '../components/Signup/RightSection'

export const SignupPage = () => {
  return (
    <div className='grid grid-cols-2 w-full '>
        <Left/>
        <RightSection/>
    </div>
  )
}