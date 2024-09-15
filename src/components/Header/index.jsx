import React, { useState } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg'
import { Button } from '../Button'
import { NavItem } from '../Nav-item'
import { NavMenu } from '../Nav-menu'
import { COMPANY, FEATURES } from './constants'
import { MobileMenu } from '../Mobile-menu'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className='flex'>
        <LogoIcon/>
        <nav className='hidden xl:flex space-x-6 ml-8 items-center'>
            <NavItem text='Feature'>
              <NavMenu items={FEATURES}/>
            </NavItem>
            <NavItem text='Company'>
              <NavMenu items={COMPANY}/>
            </NavItem>
            <NavItem text='Careers'/>
            <NavItem text='About'/>
        </nav>
        <div className="hidden xl:flex ml-auto space-x-5">
          <Button>
            Login
          </Button>
          <Button hasBorder={ true }>
            Register
          </Button>
        </div>
        <div 
          className="flex xl:hidden ml-auto cursor-pointer z-30"
          onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MenuCloseIcon/> : <MenuIcon />}
        </div>
        <MobileMenu isOpen = {isMobileMenuOpen}/>
    </header>
  )
}
