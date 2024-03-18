import { NavLink } from 'react-router-dom'
import facebook from '../assets/footer/image 77.png'
import insta from '../assets/footer/image 79.png'
import youtube from '../assets/footer/image 80.png'
import twitter from '../assets/footer/image 78.png'
import googleplay from '../assets/footer/image 81.png'
import appstore from '../assets/footer/image 82.png'
import { PiCopyright } from "react-icons/pi";
function Footer() {
  return (
    <div className='bg-[#F1F1F1] w-full flex flex-col items-center'>
      <div className='w-11/12 pt-6 mb-10'>
        <ul className='flex flex-wrap gap-2 text-sm md:text-lg  font-medium items-center justify-around'>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/faqs'>FAQs</NavLink></li>
          <li><NavLink to='/investors'>Investors</NavLink></li>
          <li><NavLink to='/careers'>Careers</NavLink></li>
          <li><NavLink to='/Contact Us'>Contact Us</NavLink></li>
        </ul>
      </div>
      <div className='w-11/12 flex flex-col md:flex-row items-center justify-evenly'>
        <div className='flex flex-col items-center w-6/12 mb-8 md:mb-0'>
          <div className='w-full flex justify-center mb-2 md:mb-8 md:pb-6 md:border-b-2 border-b-[#D9D9D9]'>
            <span className='font-medium text-sm md:text-lg'>Follow Us On</span>
          </div>
          <div className='flex gap-4'>
            <img className='h-6 w-6' src={facebook} alt="" />
            <img className='h-6 w-6' src={insta} alt="" />
            <img className='h-6 w-6' src={youtube} alt="" />
            <img className='h-6 w-6' src={twitter} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center w-6/12'>
          <div className='w-full flex justify-center mb-2 md:mb-8 md:pb-6 md:border-b-2 border-b-[#D9D9D9]'>
            <span className='font-medium text-sm md:text-lg'>Download From</span>
          </div>
          <div className='flex gap-4'>
            <img className='h-6' src={googleplay} alt="" />
            <img className='h-6' src={appstore} alt="" />
          </div>
        </div>
      </div>
      <div className='w-11/12 flex items-center justify-center py-6 my-6 border-t-2 border-t-[#D9D9D9]'>
        <PiCopyright/>
        <p className='text-xs md:text-sm'>The Painter Company - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer