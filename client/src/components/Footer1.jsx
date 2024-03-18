import facebook from '../assets/landingPage/image 77.png'
import insta from '../assets/landingPage/image 79.png'
import youtube from '../assets/landingPage/image 78.png'
import twitter from '../assets/landingPage/image 80.png'
function Footer1() {
  return (
    <div className='w-full flex flex-col py-12 bg-[#F1F1F1] items-center justify-center'>
        <div className='w-10/12 flex items-center justify-center mb-4 pb-4 border-b-2 border-b-[#D9D9D9]'>
            <h1 className='font-semibold'>Follow Us On</h1>
        </div>
        <div className='w-10/12 flex gap-4 items-center justify-center mb-4 pb-4 border-b-2 border-b-[#D9D9D9]'>
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
        </div>
        <h1>©The Painter Company - All rights reserved</h1>
    </div>
  )
}

export default Footer1