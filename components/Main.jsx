import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full max-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            {`"I’m so hungry I could eat a vegetable !"`}
            <em> - Al Bundy</em>
          </p>
          <h1 className='py-4 text-[#16161d]'>
            Salut ! Je m&apos;appelle
            <span className='text-[#ff8000]'>Nico</span>
          </h1>
          <h1 className='py-4 text-[#16161d]'>Développeur web fullstack JS</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi enim
            erit isdem istis fortasse iam utendum. Sed quid sentiat, non
            videtis. Quorum altera prosunt, nocent altera. Faceres tu quidem,
            Torquate, haec omnia; Ut nemo dubitet, eorum omnia officia quo
            spectare, quid sequi, quid fugere debeant? Duo Reges: constructio
            interrete.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedin />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <TfiEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
