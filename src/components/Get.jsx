import React from 'react'
import styles from '../style'
import Message from './Message'

const Get = () => {
  return (
    <>
    <section className={`${styles.padding} flex-col sm:flex-row flex justify-between w-full  bg-white ${styles.paddingX}`}>

      <div className='  flex flex-col sm:w-[40%] ' >
        <h1 className='sm:text-4xl text-xl font-bold mt-6  ' >Get in touch </h1>

        <p className=' sm:text-xl  font-light text-xs' >
          Do not hesitate to reach out Just fill in the contact form here and we'll be sure to reply as fast as possible 
        </p>

        <h1 className='sm:text-4xl text-xl font-bold mt-6  ' >Our Office  </h1>

        <p className=' sm:text-xl  font-light text-xs' >
          Unit 36, 416 Brixton Road, Ile-Ife Osun
        </p>

        <h1 className='sm:text-4xl text-xl font-bold mt-6  ' >Message Us   </h1>

        <p className=' sm:text-xl  font-light text-xs' >
          oyetolamuiz81@gmail.com | +2349041589381
        </p>

        <h1 className='sm:text-2xl font-bold mt-6 text-xs  ' >Follow us   </h1>


        <div className=' flex gap-7 pt-3 sm:text-2xl text-xl ' >
          <a href=' https://wa.me/2349041589381' className=' fa-brands text-[lime] fa-whatsapp '></a>
          <a href=' https://www.instagram.com/low.key_dev?igsh=MWl4NXk5OTJ2aXBmNw%3D%3D&utm_source=qr' className=' fa-brands text-[lime] fa-instagram '></a>
          <a  href=' ' className=' fa-brands fa-facebook text-[lime] '></a>
        </div>


      </div>

      <div className={` sm:w-[40%] w-full flex mt-8 `}>
        <Message/>
      </div>






    </section>
    </>
  )
}

export default Get