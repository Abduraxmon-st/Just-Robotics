import { InstagramIcon } from '@/assets/icons/InstagramIcon'
import { Logo } from '@/assets/icons/Logo'
import { Telegram } from '@/assets/icons/TelegramIcon'
import { YoutubeIcon } from '@/assets/icons/YoutubeIcon'
import React from 'react'

export const Footer = () => {
  return (
    <div className='footer bg-[#FFE000]'>
        <div className="container mx-auto px-4 pt-7">
          <div className='flex flex-wrap gap-8 lg:gap-[140px]'>
            <div>
              <Logo />
              <p className='font-sans font-bold text-sm leading-[22px] mt-4 mb-5'>SLOGAN lLorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
              <div className='flex items-center gap-2'>
                <button><Telegram /></button>
                <button><YoutubeIcon /></button>
                <button><InstagramIcon width={22} height={22} fill='black'/></button>
              </div>
            </div>
            <div>
                <p className='font-[Involve] font-black text-[26px] leading-[100%]'>Курсы</p>
                <ul className='flex flex-col gap-[10px] mt-1 font-[Involve] text-xl leading-[100%]'>
                  <li>Работотехника</li>
                  <li>Английский для взрослых</li>
                  <li>Английский для детей</li>
                  <li>Шахмат</li>
                  <li>Живопись</li>
                </ul>
            </div>
            <div>
                <p className='font-[Involve] font-black text-[26px] leading-[100%]'>Контакты</p>
                <ul className='flex flex-col gap-[10px] mt-1 font-[Involve] text-xl leading-[100%]'>
                  <li>Телеграм</li>
                  <li>Инстаграм</li>
                  <li>Ютюб</li>
                </ul>
            </div>
          </div>
          <div className='py-5 font-[Involve] font-semibold text-sm leading-[100%]'>Ideallux.com © 2000-2024, All Rights Reserved</div>
        </div>
    </div>
  )
}
