import React, { useEffect } from 'react'
import Header from './Navbar'
import Homepage from './Homepage'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import GoTop from './GoTop'

const Layout = () => {

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Immediate scroll for new page load
    });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <GoTop />
    </>
  )
}

export default Layout
