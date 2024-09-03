import React from 'react'

const RootLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        SIDEBAR
        {children}
    </div>
  )
}

export default RootLayout