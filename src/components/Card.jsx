import React from 'react'
import { Button } from './ui/button'

export const Card = ({pic, title, desc, button, ParentClass, TitleClass, DescClass, id}) => {
  return (
    <div key={id} className={`bg-[#F0D625] ${ParentClass}`}>
      {pic}
      <p className={TitleClass}>{title}</p>
      <p className={DescClass}>{desc}</p>
      {button}
    </div>
  )
}
