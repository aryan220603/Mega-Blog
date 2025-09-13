import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div 
      className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold shadow-lg"
      style={{ width: width, height: width, fontSize: `${parseInt(width) * 0.4}px` }}
    >
      MB
    </div>
  )
}

export default Logo