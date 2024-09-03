import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const RootLayout = ({ children }) => {
  return (
    <div>
        <HeaderBox />
        {children}
    </div>
  )
}

export default RootLayout