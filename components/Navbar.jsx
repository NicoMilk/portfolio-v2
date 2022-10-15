import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'

const Navbar = () => {
  const [nav, setnav] = useState(false)

  const handleNav = () => {
    setnav(!nav)
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
        <Image
          src='/assets/images/dino-logo.png'
          alt='Nico navbar logo'
          width='50'
          height='50'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b border-black'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Drawer menu layout */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200'
            : ''
        }>
        {/* Drawer menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src='/assets/images/dino-logo.png'
                alt='Nico drawer menu logo'
                width='50'
                height='50'
              />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className='border border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>{`Hi ! I'm a highly motivated fullstack JS developper`}</p>
            </div> */}
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase '>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest'>{`Let's talk !`}</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[40%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <TfiEmail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
