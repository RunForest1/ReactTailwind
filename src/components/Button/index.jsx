import React from 'react'

const borderStyles = 'border-2 border-almost-black rounded-lg '
const fieldStyles = 'text-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

export const Button = ({
    children = '',
    hasBorder = false,
    isField = false
}) => {
  return (
    <button className={`text-medium-gray px-5 py-2 ${hasBorder && borderStyles} ${isField && fieldStyles}`}>{children}</button>
  )
}
