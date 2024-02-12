import React from 'react'
import Button from './Button'

function SideBar() {
  return (
    <div>

        <Button children={`Hello jsx from Sidebar`} bgColor='bg-gray-900' textColor='text-white' className='shadow-xl' />
    </div>
  )
}

export default SideBar