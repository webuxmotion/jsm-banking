import React from 'react'
import Navigation from './Navigation'

const Sidebar = ({ user }: SidebarProps) => {
  

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Navigation />

        NAV
      </nav>

      FOOTER
    </section>
  )
}

export default Sidebar