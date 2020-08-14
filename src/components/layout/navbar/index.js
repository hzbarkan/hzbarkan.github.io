import React, { useState } from 'react'
import { MDBNavbar, MDBNavbarNav, MDBCollapse, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact'
import { NavBrand, NaviLink } from './styles'

const navItems = [
  'Home',
  'About me',
  'Photoblog (TBA)'
]

const Navbar = () => {
  // state for showing side menu toggle
  const [open, setOpen] = useState(false)

  return (
    <MDBNavbar dark scrolling transparent fixed='top' color='elegant-color-dark' expand='md'>
      <MDBNavbarToggler onClick={() => setOpen(!open)} />
      <MDBCollapse isOpen={open} navbar>
        <MDBNavbarNav left>
          {navItems.map((nav, i) => (
            <NaviLink key={i}>{nav}</NaviLink>
          ))}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default Navbar
