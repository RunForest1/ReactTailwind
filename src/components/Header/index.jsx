import React from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { Button } from '../Button'
import { NavItem } from '../Nav-item'
import { NavMenu } from '../Nav-menu'
import { COMPANY, FEATURES } from './constants'

export const Header = () => {
  return (
    <header className='flex'>
        <LogoIcon/>
        <nav className='flex space-x-6 ml-8 items-center'>
            <NavItem text='Feature'>
              <NavMenu items={FEATURES}/>
            </NavItem>
            <NavItem text='Company'>
              <NavMenu items={COMPANY}/>
            </NavItem>
            <NavItem text='Careers'/>
            <NavItem text='About'/>
        </nav>
        <div className="ml-auto flex space-x-5">
          <Button>
            Login
          </Button>
          <Button hasBorder={ true }>
            Register
          </Button>
        </div>
    </header>
  )
}
