import React from 'react'
import Navabr from './Navabr'
import Footer from './Footer'
import Featured from './Featured'

const Layout = ({children}) => {
  return (
    <>
     <Navabr/>
     <Featured>
      {children}
     </Featured>
     <Footer/>
    </>
  )
}

export default Layout