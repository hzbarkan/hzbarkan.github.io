import styled from 'styled-components'
import { MDBNavbarBrand } from 'mdbreact'

export const NavBrand = styled(MDBNavbarBrand)`
  font-family: 'Oswald';
  font-size: 20pt;
  font-weight: 400;
`

export const NaviLink = styled.a`
  font-family: 'Oswald';
  color: #ffffff !important;
  text-decoration: none;
  cursor: pointer;
  margin: 15px 15px;

  &:hover {
    color: #ffffff;
    opacity: 0.5;
    transition: .2s;
  }

  &:visited {
    color: #ffffff;
  }
`
