import React from 'react'
// import Image from 'next/image'
import Image from 'next/future/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl text-[#ff8000]'>À propos</p>
          <h2 className='py-4'>Qui suis-je</h2>
          <p className='py-2'>
            Nobis aliter videtur, recte secusne, postea; Honesta oratio,
            Socratica, Platonis etiam. Sed plane dicit quod intellegit. Eam tum
            adesse, cum dolor omnis absit; Nunc omni virtuti vitium contrario
            nomine opponitur. Is es profecto tu.
          </p>
          <p className='py-2'>
            Apparet statim, quae sint officia, quae actiones. Quid Zeno?
            Invidiosum nomen est, infame, suspectum. Dicimus aliquem hilare
            vivere; Sed ad rem redeamus; Quae contraria sunt his, malane?
          </p>
          <p className='py-2 underline cursor-pointer'>
            Voici quelques uns de mes derniers projets
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src='/assets/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg'
            alt='laptop'
            width={100}
            height={100}
            className='aspect-[3/4]'
          />
        </div>
      </div>
    </div>
  )
}

export default About
