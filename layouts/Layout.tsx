import React, { ReactNode } from 'react'
import Footer from './components/Footer'
import MetaTags from './components/MetaTags'
import NavBar from './components/NavBar'

// defining components
type Props = {
  children?: ReactNode
  web_name?: string
}

const Layout = ({ children, web_name = 'Chris Achinga' }: Props) => {
  return (
    <>
      <MetaTags />
      <div>
        <NavBar />
        <main className='container'>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout
