import React, { ReactNode } from 'react'
import Footer from './components/Footer'
import MetaTags from './components/MetaTags'
import styles from '../styles/Home.module.css'

// defining components
type Props = {
  children?: ReactNode
  web_name?: string
}

const Layout = ({ children, web_name = 'Chris Achinga' }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <MetaTags />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
