import React from 'react'
import { Button } from '../../GlobalStyles'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>Inicio</SidebarLink>
          <SidebarLink to='/proyectosfull' onClick={toggle}>Proyectos</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contacto' >Contacto</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
