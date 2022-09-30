import React from 'react'
import { Button } from '../../GlobalStyles'
import { MobileIcon, Nav, NavbarContainer, NavBarHome, NavBarPages, NavBtnLink, NavItem, NavLinks, NavMenu } from './Navbar.elements'
import { FaBars } from "react-icons/fa";

const NavBar = ({toggle}) => {
  return (
    <Nav>
        <NavbarContainer>
            <NavBarHome to='/'>Home</NavBarHome>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='/proyectosfull'>
                        Proyectos
                    </NavLinks>
                </NavItem>
                {/* <NavItem>
                    <NavLinks to='about'>
                       Sobre mi
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='skills'>
                       Skills
                    </NavLinks>
                </NavItem> */}

                <NavBtnLink to='/contacto'>
                        <Button  >Contacto</Button>
                    </NavBtnLink>
            </NavMenu>
        </NavbarContainer>
    </Nav>
  )
}

export default NavBar