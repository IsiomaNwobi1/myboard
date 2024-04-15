import React from 'react'
import { Left } from '../components/InitiateReset/Left'
import { Right } from '../components/InitiateReset/Right'

const InitiateRestPage = () => {
  return (
    <div>
      <div className='grid grid-cols-2 w-full '>
        <Left />
        <Right />
    </div>
    </div>
  )
}

export default InitiateRestPage
