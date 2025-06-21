import React from 'react'
import { Button } from './ui/button'


export const CustomButton = ({title, variant, className}) => {
  return (
   <Button className={className} variant={variant}>{title}</Button>
  )
}
