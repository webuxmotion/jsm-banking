import Sidebar from '@/components/Sidebar';
import React from 'react'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const loggedIn = {
    firstName: "Andrii",
    lastName: "Pereverziev"
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  )
}

export default RootLayout