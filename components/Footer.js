import React from 'react'

function Footer() {
  return (
    <div className="text-sm text-gray-500 bg-gray-100 px-5">
      <div className="border-b border-gray-300 w-full py-3">
        <p>India</p>
      </div>
      <div className="sm:flex sm:justify-between py-3">
        <div className="flex space-x-4 justify-center">
          <p className="footerLink">About</p>
          <p className="footerLink">Advertising</p>
          <p className="footerLink">Business</p>
          <p className="footerLink">How Search Works</p>
        </div>
        <div className="flex space-x-4 justify-center">
          <p className="footerLink">Privacy</p>̉̉̉̉
          <p className="footerLink">Terms</p>
          <p className="footerLink">Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
