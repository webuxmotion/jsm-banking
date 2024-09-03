import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const RootLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <HeaderBox />
        {children}
    </div>
  )
}

export default RootLayout