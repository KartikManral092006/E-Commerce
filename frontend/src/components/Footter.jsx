import React from 'react'
import { assets } from '../assets/assets'

const Footter = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=''></img>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia vel odio, corporis optio sapiente temporibus ratione laboriosam doloribus atque! de aliquid.
            </p>
        </div>
        
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>CONTACT</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Help/FAQs</li>
                <li>Press</li>
                <li>Affiliate</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-3987-234-342</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>
      <div className='text-center text-gray-600 text-sm'>
        <hr/>
        <p className='py-5 text-sm text-center'>© 2023 Foreveryou. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footter
