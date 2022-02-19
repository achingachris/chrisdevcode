import React, { ReactNode } from 'react'

// defining components
type Props = {
  children?: ReactNode
  web_name?: string
}

const Layout = ({ children, web_name = 'Chris Achinga' }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
