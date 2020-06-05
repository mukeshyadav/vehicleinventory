import React from 'react'
import Header from './components/header'

function App () {
  return (
    <div className='app'>
      <Header />
      <div className='w-full max-w-screen-xl mx-auto px-6'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-2'>
            Vehicle
          </div>
          <div className='col-span-1'>
            Details
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
