import { Logo } from '@/assets/icons/Logo'
import React from 'react'
import {Select} from './Select'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BurgerMenuIcon } from '@/assets/icons/BurgerMenuIcon'
import { LeadingIcon } from '@/assets/icons/LeadingIcon'
import { InfoUs } from '@/assets/icons/InfoUs'
import { MessageIcon } from '@/assets/icons/MessageIcon'
import { LinkedinIcon } from '@/assets/icons/LinkedinIcon'
import { InstagramIcon } from '@/assets/icons/InstagramIcon'
import { TwitterIcon } from '@/assets/icons/TwitterIcon'

export const Navbar = () => {
  const [NavisOpen, setNavisOpen] = React.useState(false)
  const NavOpenFn = () => {
  setNavisOpen((prev) => !prev);
  }
  return (
    <div className='navbar relative z-98 lg:border-t-[14px] lg:border-b-[14px] border-t-[10px] border-b-[10px] border-[#FFE000] border-solid bg-[#121212]'>
      <div className="container relative z-98 mx-auto xl:p-[23px] md:p-3 p-1 flex items-center justify-between px-4 bg-[#121212]">
        <Logo />
        <nav>
         <ul className='hidden md:flex items-center xl:gap-[46px] md:gap-4 lg:gap-7 md:text-[14px] xl:text-2xl leading-[100%] text-white'>
            <li><a href='#'>Главная</a></li>
            <li><a href='#'>О нас</a></li>
            <li><Select /></li>
            <li><a href='#'>Контакты</a></li>
         </ul>
        </nav>
        <Button variant='custom' className='hidden md:block xl:h-[62px] md:h-[50px] xl:px-[54px] md:px-5 font-bold xl:text-2xl md:text-xl leading-[100%] tracking-[0%] uppercase'>Позвонить</Button>
        <div className='flex justify-center items-center gap-[10px]'>
          <Tabs defaultValue="uz" className="xl:w-41 md:w-30">
            <TabsList className='w-full h-[30px] xl:h-13 bg-black p-0'>
              <TabsTrigger className='xl:text-[21.66px] md:text-[16px] leading-[100%] xl:rounded-[14px]' value="ru">RU</TabsTrigger>
              <TabsTrigger className='xl:text-[21.66px] md:text-[16px] leading-[100%] xl:rounded-[14px]' value="uz">UZ</TabsTrigger>
            </TabsList>
          </Tabs>
          <button onClick={NavOpenFn} className='md:hidden'><BurgerMenuIcon /></button>
        </div>
      </div>
      <div className={`absolute md:hidden z-9 w-full bg-black shadow-[0px_0px_50px_10px_black] transition-[top] duration-[0.5s] ${!NavisOpen ? '-top-130' : 'top-16'}`}>
        <ul className='p-5 pr-14 text-white font-[Involve] border-t-[10px] border-b-[10px] border-[#FFE000]'>
          <li className='flex items-center pl-2 py-4 text-2xl leading-[100%] border-[#FFFFFF1A] border-b-2'><LeadingIcon/> Главная</li>
          <li className='flex items-center pl-2 py-4 text-2xl leading-[100%] border-[#FFFFFF1A] border-b-2'><InfoUs/> О нас</li>
          <li className='flex items-center pl-2 py-4 text-2xl leading-[100%] border-[#FFFFFF1A] border-b-2'><MessageIcon/> Курсы</li>
          <li className='flex items-center pl-2 py-4 text-2xl leading-[100%] border-[#FFFFFF1A] border-b-2'><LeadingIcon/> Контакты</li>
        </ul>
        <span className='flex items-center gap-7 p-6'>
          <button><LinkedinIcon /></button> 
          <button><InstagramIcon width={18} height={19} fill='white'/></button> 
          <button><TwitterIcon /></button>
        </span>
      </div>
    </div>
  )
}
