import React from 'react'
import { ViewGridIcon } from '@heroicons/react/solid'


function Header() {
  return (
    <header className="flex justify-between p-5">
      {/* Left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />
        {/* Avatar */}
        <img
          loading="lazy"
          src="https://lh3.googleusercontent.com/ogw/ADea4I5b16leucXkeaGU6eWRUcFZdeiRUYBFUr3gYROBRA=s64-c-mo" 
          className="rounded-full h-10 cursor-pointer transition duration-150 hover:scale-110"
        />
      </div>
    </header>
  )
}

export default Header
