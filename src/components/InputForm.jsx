import React, { useState } from 'react'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'

export const InputForm = () => {
   const [Uname, setUname] = useState()
   const [Uphone, setUphone] = useState()
   const [Uage, setUage] = useState()
   const [Uselect, setUselect] = useState()

   const FormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: Uname,
      phone: Uphone,
      age: Uage,
      course: Uselect,
    };
    console.log(data);
  };
  return (
    <form onSubmit={FormSubmit} action="" className='flex flex-col gap-4 md:gap-7 xl:justify-between md:flex-row md:flex-wrap md:justify-center xl:flex-nowrap xl:px-4 font-[Involve]'>
      <Input onChange={(e) => setUname(e.target.value)} className=' md:w-80 h-15 bg-white text-xl md:text-xl leading-[100%]' type="text" placeholder="Ваше имя" />
      <Input onChange={(e) => setUphone(e.target.value)} className=' md:w-80 h-15 bg-white text-xl md:text-xl leading-[100%]' type="num" placeholder="Номер телефона" />
      <Input onChange={(e) => setUage(e.target.value)} className=' md:w-80 h-15 bg-white text-xl md:text-xl leading-[100%]' type="number" placeholder="Возраст" />
      <Select onValueChange={setUselect}>
      <SelectTrigger className="w-full md:w-80  bg-white text-xl py-7">
        <SelectValue placeholder="Курсы" />
      </SelectTrigger>
      <SelectContent className='bg-white'>
        <SelectGroup>
          <SelectItem className='py-4 text-xl leading-[100%] border-b-2 border-[#ABABAB] rounded-none' value="Работотехника">Работотехника</SelectItem>
          <SelectItem className='py-4 text-xl leading-[100%] border-b-2 border-[#ABABAB] rounded-none' value="Живопись для взрослых">Живопись для взрослых</SelectItem>
          <SelectItem className='py-4 text-xl leading-[100%] border-b-2 border-[#ABABAB] rounded-none' value="Живопись для детей">Живопись для детей</SelectItem>
          <SelectItem className='py-4 text-xl leading-[100%] border-b-2 border-[#ABABAB] rounded-none' value="Шахмат">Шахмат</SelectItem>
          <SelectItem className='py-4 text-xl leading-[100%] rounded-none' value="Английский">Английский</SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
      <Button type='submit' className='h-15 bg-[#ffe000] text-black font-[Involve] font-bold text-2xl leading-[100%] uppercase shadow-[0px_0px_36px_0px_#FFDE00B2]'>получить</Button>
    </form>
  )
}
