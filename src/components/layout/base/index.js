import React from 'react'
import Navbar from '../navbar'

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default BaseLayout
