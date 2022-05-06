import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout(props) {

  const { children } = props

  return (
    <div className='container p-5 mx-auto col-md-6'>
        <Header />
        { children }
        <Footer />
    </div>
  )
}
