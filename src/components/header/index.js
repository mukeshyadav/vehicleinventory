import React from 'react'

export default function Header () {
  return (
    <header className='flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 shadow-sm'>
      <div className='w-full max-w-screen-xl relative mx-auto px-6 flex items-center'>
        <h1 className='text-xl antialiased font-bold tracking-wider'>Vehicle Inventory Dashboard</h1>
      </div>
    </header>
  )
}
