import homebg1 from '../assets/homeScreen/Rectangle 2739.png'
import homebg2 from '../assets/homeScreen/image 53.png'
function Home() {
  return (
    <div className='w-full'>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='relative w-full md:w-7/12'>
          <img className=' w-fit' src={homebg1} alt="" />
          <div className='absolute top-0 w-full'>
            <div className='my-10 mx-10'>
              <h1 className='lg:text-[44px] lg:leading-[60px] text-[#6E5631] font-semibold'>INTERIOR DESIGN ON YOUR MIND?</h1>
              <form className='my-4 md:my-8 lg:my-16'>
                <div className='flex gap-4 md:gap-8 lg:gap-12 flex-wrap items-center'>
                  <div className='flex items-center gap-3'>
                    <input type="radio" className="appearance-none w-4 h-4 border border-[#6E5631] rounded-full checked:bg-[#E4225F]" />
                    <span className='text-sm font-medium'>Personalized Interior Design</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <input type="radio" className="appearance-none w-4 h-4 border border-[#6E5631] rounded-full checked:bg-[#E4225F]" />
                    <span className='text-sm font-medium'>Personalized Interior Design</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <input type="radio" className="appearance-none w-4 h-4 border border-[#6E5631] rounded-full checked:bg-[#E4225F]" />
                    <span className='text-sm font-medium'>Personalized Interior Design</span>
                  </div>
                </div>
              </form>
              <div className='w-fit'>
                <div>
                <h1 className='text-xl px-2 md:text-2xl font-semibold'>GET IN TOUCH</h1>
                </div>
                <div className='h-1 rounded-full bg-[#E4225F]'>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-5/12 hidden md:block'>
          <img className='w-auto' src={homebg2} alt="" />
        </div>
      </div>
      <div className='bg-[#E3D7DB] w-full flex items-center justify-center my-4'>
        <div className=' w-11/12 py-8 flex items-center justify-center'>
          <form className='flex flex-col gap-8 w-full'>
            <div className='w-full flex justify-center'>
              <h1 className='text-2xl font-semibold'>Create a dream home with our painting experts</h1>
            </div>
            <div className='flex gap-4'>
              <input type="text" placeholder='Name' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]'/>
              <input type="text" placeholder='Email' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]'/>
              <input type="text" placeholder='Phone Number' className=' bg-transparent border-b-[1px] border-b-[#E4225F]' />
            </div>
            <div className='flex gap-4'>
              <input type="text" placeholder='Address' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]' />
              <input type="text" placeholder='Pincode' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]'/>
            </div>
            <div className='flex gap-4'>
              <input type="text" placeholder='Date' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]'/>
              <input type="text" placeholder='Time' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]'/>
              <input type="text" placeholder='Carpet Area' className=' placeholder-[#656565] bg-transparent border-b-[1px] border-b-[#E4225F]'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;