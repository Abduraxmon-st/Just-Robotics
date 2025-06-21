import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import BgImage from '../assets/img/dotLine.png'
import Robot from '../assets/img/orangeRobot.png'
import CardPic1 from '../assets/img/cardPic.png'
import CardPic2 from '../assets/img/card_2.png'
import CardPic3 from '../assets/img/card_3.png'
import CardPic4 from '../assets/img/card_4.png'
import CardPic5 from '../assets/img/card_5.png'
import VdSkelet from '../assets/img/videoskelet.jpg'
import { CustomButton } from '@/components/Button'
import { Card } from '@/components/Card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { YMap } from '@/components/YMap'
import { InputForm } from '@/components/InputForm'

const images = [CardPic1, CardPic2, CardPic3, CardPic4, CardPic5];

export const Homepage = () => {

  return (
   <div className='bg-[#121212]'>
      <Navbar />
         <div className='main'>
            <div className='container mx-auto'>
               <div className='header relative z-11 w-full h-55 sm:h-90 xl:h-152 lg:shadow-[0px_100px_150px_0px_#00000060]'>
                  <img className='relative  w-full h-full object-cover rounded-b-xl sm:rounded-b-3xl xl:rounded-b-4xl' src={BgImage}/>
                  <div className='absolute flex flex-col gap-1.5 sm:gap-3 top-4  sm:top-7 xl:top-12 left-5 xl:left-[60px] 2xl:left-[50px] p-4 sm:p-7 xl:p-13 sm:py-5 xl:px-[50px] rounded-2xl xl:rounded-4xl bg-white'>
                     <h1 className='font-semibold text-[32px] sm:text-5xl xl:text-[84.35px] leading-[30px] sm:leading-[100%] '>JustRobotics</h1>
                     <p className='max-w-37 sm:max-w-60 xl:max-w-130 font-semibold sm:text-2xl xl:text-[40px] leading-4 sm:leading-[100%] xl:leading-[42px]'>твой проводник в мир технологий и искусства</p>
                     <p className='max-w-39 sm:max-w-60 xl:max-w-full xl:mt-17 text-sm sm:text-xl leading-4 sm:leading-[100%]'>получите бесплатное первое занятие</p>
                     <CustomButton className='w-max h-max px-2 py-2.5 sm:px-9 xl:px-11 sm:py-3.5 xl:py-5.5 font-[Involve] text-[#ffe000] font-bold text-sm sm:text-[18px] xl:text-2xl leading-[10px] sm:leading-[100%] tracking-wide uppercase' title='Перейти к курсам' />
                  </div>
                  <img className='absolute bottom-2 right-0 w-46 sm:w-80 xl:w-150 2xl:w-170' src={Robot} />
               </div>
               <div className='relative z-10 flex flex-wrap justify-center md:justify-evenly gap-2.5 mt-7 lg:mt-0 lg:px-2'>
                  <Card 
                  ParentClass='cardInfoBox text-center w-49 md:w-55  lg:w-[29%] py-6 lg:pt-11 xl:pt-20 lg:pb-5 xl:pb-8 shadow-[0px_0px_16px_0px_#FFDE00B2] rounded-2xl lg:rounded-b-4xl lg:rounded-t-none' 
                  title='300+' TitleClass='font-extrabold text-xl md:text-[28px] lg:text-[60px] xl:text-[80px] 2xl:text-[120px] leading-[100%]' 
                  desc={`Довольных студентов`} DescClass='max-w-30 lg:max-w-40 xl:max-w-55 2xl:max-w-70 mt-0.5 mx-auto font-[Involve] font-semibold text-xs md:text-lg lg:text-2xl xl:text-3xl 2xl:text-[40px] leading-[15px] md:leading-[100%]' />
                  
                  <Card 
                  ParentClass='cardInfoBox text-center w-49 md:w-55  lg:w-[29%] py-6 lg:pt-11 xl:pt-20 lg:pb-9 xl:pb-8 shadow-[0px_0px_16px_0px_#FFDE00B2] rounded-2xl lg:rounded-4xl lg:rounded-t-none' 
                  title='25+' TitleClass='font-extrabold text-[32px] md:text-4xl lg:text-[60px] xl:text-[80px] 2xl:text-[120px] leading-[100%]' 
                  desc={`Препадавателей`} DescClass='mt-1.5 font-[Involve] font-semibold text-xs md:text-lg lg:text-2xl xl:text-3xl 2xl:text-[40px] leading-[15px] md:leading-[100%]' />

                  <Card 
                  ParentClass='cardInfoBox text-center w-49 md:w-55  lg:w-[29%] py-6 lg:pt-11 xl:pt-20 lg:pb-9 xl:pb-8 shadow-[0px_0px_16px_0px_#FFDE00B2] rounded-2xl lg:rounded-4xl lg:rounded-t-none' 
                  title='60+' TitleClass='font-extrabold text-[32px] md:text-4xl lg:text-[60px] xl:text-[80px] 2xl:text-[120px] leading-[100%]'
                  desc={`Групп`} DescClass='mt-1.5 font-[Involve] font-semibold text-xs md:text-lg lg:text-2xl xl:text-3xl 2xl:text-[40px] leading-[15px] md:leading-[100%]' />
               </div>
            </div>
            <div className='relative xl:-top-15 mt-7 lg:mt-10 px-4 py-2.5 md:py-7 lg:py-10 xl:py-25 bg-white font-[Involve]'>
               <div className='container mx-auto'>
                  <p className='text-[17px] lg:text-[20px] xl:text-2xl font-medium leading-[120%] lg:leading-[150%] tracking-wider'><span className='font-bold'>JustRobotics </span>– это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха.</p>
                  <p className='mt-6 xl:mt-0  text-[17px] lg:text-[20px] xl:text-2xl font-medium leading-[120%] lg:leading-[150%] tracking-wider'><span className='font-bold'>JustRobotics </span>– это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.</p>
               </div>
            </div>
            <div className='container mx-auto'>
               <h2 className='mt-7.5 text-center uppercase text-[#F0D625] font-bold text-xl md:text-2xl lg:text-4xl xl:text-8xl xl:max-w-[900px] xl:mx-auto leading-[30px] lg:leading-[100%]'>Авторские кусы от JustRobotics</h2>
               <div className='overflow-x-auto'>
                  <div className='flex gap-5 xl:gap-10 xl:justify-center w-min lg:w-full lg:flex-wrap py-10 px-4'>
                  {[1, 2, 3, 4, 5].map((index) => (
                     <Card key={index} ParentClass='flex flex-col justify-between w-[300px] xl:w-[450px] h-[350px] xl:h-[500px] p-4 xl:p-8 shadow-[0px_0px_16px_0px_#FFDE00B2] rounded-4xl xl:rounded-[40px]'
                  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
                  TitleClass='font-[Involve] font-semibold text-xl'
                  button={<Button className='w-[70%] h-10 xl:h-15 ml-auto rounded-4xl xl:text-xl'>Подробнее о курсе 
                     <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="text-[2xl]" aria-hidden="true" focusable="false" tabIndex={-1} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth={2} d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" /></svg>
                  </Button>}
                  pic={<img className='h-43 xl:h-60 object-cover rounded-2xl xl:rounded-[20px]' src={images[index - 1]} />}
                  />
                  ))}
                  </div>
               </div>
               <h2 className='mt-7.5 text-center uppercase text-[#F0D625] font-bold text-xl md:text-2xl leading-[30px] lg:leading-[100%]'>отзывы</h2>
               <Carousel 
               plugins={[
                  Autoplay({
                     delay: 4000,
                  }),
               ]} className='mt-7.5'>
                  <CarouselContent>
                  {Array.from({ length: 18 }, (_, i) => i + 1).map((index) => (
                     <CarouselItem className="basis-[55%] sm:basis-[37%] md:basis-[32%] lg:basis-[24%] xl:basis-[20%] 2xl:basis-[18%]" key={index}><img className='w-[220px] h-[310px] rounded-[12px]' src={VdSkelet} alt="" /></CarouselItem>
                  ))}
                  </CarouselContent>
               </Carousel>
               <h2 className='mt-7.5 xl:mt-20 text-center uppercase text-[#F0D625] font-bold text-xl md:text-2xl lg:text-4xl xl:text-8xl  xl:mx-auto leading-[30px] lg:leading-[100%]'>получите бесплатный первый урок</h2>
            </div>
            <div className='container mx-auto mt-7.5 px-2 xl:mt-20'>
               <InputForm />
               <div className='flex justify-between xl:gap-15 mt-6 md:mt-15 xl:mt-20 md:w-[60%] xl:w-max'>
                  <Button type='submit' className='w-[40%] md:w-[48%] xl:w-[310px] h-12 xl:h-20 bg-[#ffe000] text-black font-[Involve] font-bold text-md xl:text-3xl  leading-[100%] uppercase shadow-[0px_0px_36px_0px_#FFDE00B2]'>ФИЛИАЛ Ц4</Button>
                  <Button type='submit' className='w-[57%] md:w-[48%] xl:w-98 h-12 xl:h-20 bg-white text-black font-[Involve] font-bold text-md  xl:text-3xl leading-[100%] uppercase shadow-[0px_0px_36px_0px_#FFDE00B2]'>ФИЛИАЛ БЕРУНИ</Button>
               </div>
               <div className='flex justify-between mt-9 md:px-10 xl:px-30 text-white font-normal text-[10px] lg:text-2xl leading-[100%] font-[Involve]'>
                  <span className='flex items-center gap-2'><svg width={20} height={20} className='lg:w-10 lg:h-10' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.07 2.92786C13.1642 -0.976781 6.83251 -0.975844 2.92786 2.93001C-0.976781 6.83587 -0.975844 13.1675 2.93001 17.0721C6.83587 20.9768 13.1675 20.9759 17.0722 17.07C18.9474 15.1942 20.0006 12.6502 20 9.99786C19.9995 7.34591 18.9455 4.80278 17.07 2.92786ZM15.1447 13.9299C15.1442 13.9303 15.1438 13.9308 15.1433 13.9312V13.9279L14.6366 14.4312C13.9814 15.0948 13.027 15.3678 12.12 15.1512C11.2061 14.9066 10.3374 14.5172 9.54665 13.9979C8.81204 13.5284 8.13126 12.9796 7.51665 12.3612C6.95114 11.7998 6.4431 11.1834 5.99997 10.5212C5.51528 9.80864 5.13165 9.03239 4.85997 8.21454C4.54853 7.25376 4.80661 6.1995 5.52665 5.49122L6.11997 4.8979C6.28493 4.7322 6.55298 4.73161 6.71864 4.89657C6.71907 4.897 6.71954 4.89743 6.71997 4.8979L8.59329 6.77122C8.75899 6.93618 8.75958 7.20423 8.59462 7.36989C8.59419 7.37032 8.59376 7.37075 8.59329 7.37122L7.49329 8.47122C7.17767 8.78341 7.13798 9.2795 7.39997 9.6379C7.79782 10.1839 8.2381 10.6977 8.71665 11.1746C9.2502 11.7104 9.83024 12.1979 10.45 12.6313C10.8081 12.881 11.2935 12.8389 11.6033 12.5313L12.6666 11.4513C12.8316 11.2856 13.0996 11.285 13.2653 11.4499C13.2657 11.4504 13.2661 11.4508 13.2666 11.4513L15.1433 13.3313C15.309 13.4962 15.3096 13.7642 15.1447 13.9299Z" fill="#FFDE00" />
</svg>
                  Адрес Орьентир</span>
                  <span className='flex items-center gap-2'><svg width={20} height={20} className='lg:w-10 lg:h-10' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0016 5.91797C8.24844 5.91797 6.82031 7.34609 6.82031 9.09922C6.82031 10.0242 7.87656 11.8242 9.64219 13.9117C9.82344 14.1273 10.1766 14.1273 10.3578 13.9117C12.1516 11.793 13.1797 10.0367 13.1797 9.09922C13.1797 7.34609 11.7516 5.91797 9.99844 5.91797H10.0016ZM10.0016 9.99922C9.24844 9.99922 8.63906 9.38672 8.63906 8.63672C8.63906 7.88672 9.25156 7.27422 10.0016 7.27422C10.7516 7.27422 11.3641 7.88672 11.3641 8.63672C11.3641 9.38672 10.7516 9.99922 10.0016 9.99922Z" fill="#FFDE00" />
                  <path d="M10 9.08984C10.2503 9.08984 10.4531 8.88697 10.4531 8.63672C10.4531 8.38646 10.2503 8.18359 10 8.18359C9.74975 8.18359 9.54688 8.38646 9.54688 8.63672C9.54688 8.88697 9.74975 9.08984 10 9.08984Z" fill="#FFDE00" />
                  <path d="M10 0C4.47813 0 0 4.47813 0 10C0 15.5219 4.47813 20 10 20C15.5219 20 20 15.5219 20 10C20 4.47813 15.5219 0 10 0ZM11.0531 14.5031C10.7906 14.8125 10.4062 14.9906 10 14.9906C9.59375 14.9906 9.20937 14.8125 8.94687 14.5031C7.55937 12.8656 5.90938 10.6 5.90938 9.10312C5.90938 6.84687 7.74375 5.0125 10 5.0125C12.2563 5.0125 14.0906 6.84687 14.0906 9.10312C14.0906 10.6 12.4375 12.8656 11.0531 14.5031Z" fill="#FFDE00" />
                  </svg>
                  График работы</span>
                  <span className='flex items-center gap-2'><svg width={20} height={20} className='lg:w-10 lg:h-10' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM14.7558 15.1725C14.5933 15.335 14.38 15.4167 14.1667 15.4167C13.9533 15.4167 13.74 15.335 13.5775 15.1725L9.41083 11.0058C9.25417 10.85 9.16667 10.6383 9.16667 10.4167V5C9.16667 4.53917 9.54 4.16667 10 4.16667C10.46 4.16667 10.8333 4.53917 10.8333 5V10.0717L14.7558 13.9942C15.0817 14.32 15.0817 14.8467 14.7558 15.1725Z" fill="#FFDE00" />
                  </svg>
                  Номера телефонов</span>
               </div>
            </div> 
            <div className='max-w-[1600px] mx-auto mt-7.5 lg:mt-20'><YMap/></div>
         </div>
      <Footer />
   </div>
  )
}
