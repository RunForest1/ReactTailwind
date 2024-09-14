import React from 'react'
import {ReactComponent as ArrowDownIcon} from '../../images/icon-arrow-down.svg'

export const NavItem = ({text = '', children}) => {
    const [selected, setSelected ] = useState('');
  return (
    <div className='relative'>
        <div className="flex space-x-2 cursor-pointer items-center">
            <span className='text-medium-gray hover:text-almost-black' onClick={() => setSelected(text)}>{text}</span>
            <ArrowDownIcon/>
        </div>
        {children}
    </div>
  )
}
