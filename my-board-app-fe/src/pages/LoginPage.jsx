import React from 'react'
import { RightSection } from '../components/Login/RightSection'
import { LeftSection } from '../components/Login/LeftSection'

export const LoginPage = () => {
  return (
    <div className='grid grid-cols-2 w-full fixed'>
        <LeftSection />
        <RightSection />
    </div>
  )
}
