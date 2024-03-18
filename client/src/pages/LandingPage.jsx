import bg from '../assets/landingPage/bg.png'
import logo from '../assets/landingPage/Group 2981.png'
import heroImg from '../assets/landingPage/hero image.png'
import heart1 from '../assets/landingPage/Frame 14386.png'
import heart2 from '../assets/landingPage/Frame 14386 (1).png'
import heart3 from '../assets/landingPage/Frame 14384.png'
import chooseUs1 from '../assets/landingPage/image 59.png'
import chooseUs2 from '../assets/landingPage/image 60.png'
import chooseUs3 from '../assets/landingPage/image 61.png'
import chooseUs4 from '../assets/landingPage/image 63.png'
import working1 from '../assets/landingPage/Group.png'
import working2 from '../assets/landingPage/12469787_Wavy_REst-03_Single-03_1-removebg-preview 1.png'
import working3 from '../assets/landingPage/Group (1).png'
import working4 from '../assets/landingPage/OBJECTS.png'
import working5 from '../assets/landingPage/91fa59e6781adbdced82e349bb595d99 1.png'
import table1 from '../assets/landingPage/la_users.png'
import table2 from '../assets/landingPage/uil_arrow-growth.png'
import table3 from '../assets/landingPage/fluent_person-feedback-16-regular.png'
import table4 from '../assets/landingPage/ion_card-outline.png'
import Footer1 from '../components/Footer1'
import whatsapp from '../assets/landingPage/Frame 1686552193.png'
import { useState } from 'react'

function LandingPage() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult]= useState(null);

  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value,
      }
    );
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!formData.firstname ||!formData.lastname || !formData.email || !formData.message){
      return setError('Please fill out all fields');
    }
    try{
      setLoading(true);
      const res = await fetch('/api/message/store',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success===false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      if(res.ok){
        setResult("Your response is recorded")
      }
    }catch(error){
      setLoading(false)
      setError(error.message);
    }
  }

  return (
    <div className='w-full relative flex items-center justify-center overflow-hidden'>
      <img className='absolute top-0 -z-10 w-full' src={bg} alt="" />
      <div className='w-full flex flex-col items-center justify-center'>
          <div className="w-11/12 flex items-center gap-2.5 font-medium py-3 mx-3">
             <img
               src={logo}
               width={45}
               alt=""
             />
             <h className="text-2xl">
               <span className="text-[#4db4bd]">P</span>
               <span className="text-[#fdab21]">A</span>
               <span className="text-[#e4225f]">I</span>
               <span className="text-[#5bb089]">N</span>
               <span className="text-[#fdab21]">T</span>
               <span className="text-[#4db4bd]">E</span>
               <span className="text-[#5bb089]">R</span>
             </h>
          </div>

          <div className='w-11/12 flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-7/12 lg:my-16'>
              <div className='lg:w-8/12'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-medium text-[#333333] leading-10 lg:leading-[60px] font-lato'>Transform Your Space: Your Ultimate Painter's Paradise</h1>
                <p className='text-[#333333] md:text-lg font-lato font-normal my-3 lg:my-6'>Discover the Boundless World of Home Transformation where Painting, Wallpaper, Waterproofing, and More Await Your Creative Touch!</p>
                <div className='w-full flex items-center justify-center'>
                  <div className='block lg:hidden w-8/12'>
                    <img className='' src={heroImg} alt="" />
                  </div>
                </div>
                <button className='bg-[#E4225F] text-white py-2 lg:py-3 px-8 rounded-full w-full my-6 lg:my-2 lg:w-auto'>Get started</button>
              </div>
              <div className='flex flex-col md:flex-row gap-4 my-16 lg:pr-4'>
                  <div className=' border-2 lg:bg-[#ffffff68] bg-[#e4225f1f] border-white rounded-3xl px-2 py-3'>
                    <div className='mb-6'>
                      <img src={heart1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#333333] text-sm text'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
                    </div>
                  </div>
                  <div className=' border-2 lg:bg-[#ffffff68] bg-[#e4225f1f] border-white rounded-3xl px-2 py-3'>
                    <div className='mb-6'>
                      <img src={heart2} alt="" />
                    </div>
                    <div>
                      <p className='text-[#333333] text-sm text'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
                    </div>
                  </div>
                  <div className=' border-2 lg:bg-[#ffffff68] bg-[#e4225f1f] border-white rounded-3xl px-2 py-3'>
                    <div className='mb-6'>
                      <img src={heart3} alt="" />
                    </div>
                    <div>
                      <p className='text-[#333333] text-sm text'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className='w-5/12 hidden lg:block'>
              <img className='' src={heroImg} alt="" />
            </div>
          </div>

          <div className='w-[94%] md:w-10/12 my-6'>
            <div className=''>
              <h1 className='text-2xl md:text-4xl text-[#333333]'>Why Choose Us?</h1>
            </div>
            <div className='flex justify-between my-6'>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={chooseUs1} alt="" />
                </div>
                <h1 className='text-center text-sm md:text-base my-2'>Trained Professionals</h1>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={chooseUs2} alt="" />
                </div>
                <h1 className='text-center text-sm md:text-base my-2'>Accurate Analysis</h1>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={chooseUs3} alt="" />
                </div>
                <h1 className='text-center text-sm md:text-base my-2'>Supervised Painting</h1>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={chooseUs4} alt="" />
                </div>
                <h1 className='text-center text-sm md:text-base my-2'>On-Time Delivery</h1>
              </div>
            </div>
          </div>
          
          <div className='w-10/12'>
            <div className='my-12'>
              <h1 className='text-4xl text-[#333333]'>How Does It Work?</h1>
            </div>
            <div className='flex items-center justify-between'>
              <div className='md:w-4/12 md:mx-16'>
                <div className='flex items-center gap-4'>
                  <span className='h-10 w-10 text-white flex items-center justify-center bg-[#230B34] text-xl rounded-full'>1</span>
                  <h1 className='text-3xl text-[#E4225F] font-semibold'>Book Visit Online</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <img className='block md:hidden size-4/5' src={working1} alt="" />
                </div>
                <div className='my-6'>
                  <p className='text-[#4F4F4F] text-base'>Book your painting services online for hassle-free home transformation and impeccable craftsmanship</p>
                </div>
              </div>
              <div className='w-5/12 hidden md:block'>
                <img className='h-[374.5px] w-[331.59px]' src={working1} alt="" />
              </div>
            </div>
            <div className='flex flex-row-reverse items-center justify-between'>
              <div className='md:w-4/12 md:mx-16'>
                <div className='flex items-center gap-4'>
                  <span className='h-10 w-10 text-white flex items-center justify-center bg-[#230B34] text-xl rounded-full'>2</span>
                  <h1 className='text-3xl text-[#E4225F] font-semibold'>Site Inspection</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <img className='block md:hidden size-4/5' src={working2} alt="" />
                </div>
                <div className='my-6'>
                  <p className='text-[#4F4F4F] text-base'>Expert evaluation ensures tailored solutions for your space's unique needs</p>
                </div>
              </div>
              <div className='w-5/12 hidden md:block'>
                <img className='h-[400px] w-[400px]'  src={working2} alt="" />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='md:w-4/12 md:mx-16'>
                <div className='flex items-center gap-4'>
                  <span className='h-10 w-10 text-white flex items-center justify-center bg-[#230B34] text-xl rounded-full'>3</span>
                  <h1 className='text-3xl text-[#E4225F] font-semibold'>Color Selection</h1>
                </div>
                <div className='my-4 flex items-center justify-center'>
                  <img className='block md:hidden size-4/5' src={working3} alt="" />
                </div>
                <div className='my-6'>
                  <p className='text-[#4F4F4F] text-base'>Explore a spectrum of hues to find the perfect palette for your vision</p>
                </div>
              </div>
              <div className='w-5/12 hidden md:block'>
                <img  src={working3} alt="" />
              </div>
            </div>
            <div className='flex flex-row-reverse items-center justify-between my-8'>
              <div className='md:w-4/12 md:mx-16'>
                <div className='flex items-center gap-4'>
                  <span className='h-10 w-10 text-white flex items-center justify-center bg-[#230B34] text-xl rounded-full'>4</span>
                  <h1 className='text-3xl text-[#E4225F] font-semibold'>Painting Begins</h1>
                </div>
                <div className='flex items-center justify-center my-4'>
                  <img className='block md:hidden size-4/5' src={working4} alt="" />
                </div>
                <div className='my-6'>
                  <p className='text-[#4F4F4F] text-base'>Watch your space come to life as skilled hands bring your chosen colors to fruition</p>
                </div>
              </div>
              <div className='w-5/12 hidden md:block'>
                <img  src={working4} alt="" />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='md:w-4/12 md:mx-16'>
                <div className='flex items-center gap-4'>
                  <span className='h-10 w-10 text-white flex items-center justify-center bg-[#230B34] text-xl rounded-full'>5</span>
                  <h1 className='text-3xl text-[#E4225F] font-semibold'>Finishing & Handover</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <img className='block md:hidden size-4/5' src={working5} alt="" />
                </div>
                <div className='my-6'>
                  <p className='text-[#4F4F4F] text-base'>Experience the final flourish as your transformed space is meticulously completed and delivered</p>
                </div>
              </div>
              <div className='w-5/12 hidden md:block'>
                <img  src={working5} alt="" />
              </div>
            </div>
          </div>

          <div className='w-[94%] md:w-10/12 md:my-16'>
            <div className='md:w-6/12 my-6 md:my-12'>
              <h1 className='text-xl md:text-4xl text-[#333333]'>Designers, Here’s what we bring to your creative table</h1>
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={table1} alt="" />
                </div>
                <h1 className='text-center font-medium text-[#333333] text-sm md:text-lg my-2'>Client Acquisition</h1>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={table2} alt="" />
                </div>
                <h1 className='text-center font-medium text-[#333333] text-sm md:text-lg my-2'>Exposure & Visibility</h1>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={table3} alt="" />
                </div>
                <h1 className='text-center font-medium text-[#333333] text-sm md:text-lg my-2'>Feedbacks & Ratings</h1>
              </div>
              <div className='flex flex-col items-center'>
                <div className='border-[3px] border-[#E4225F] rounded-full p-4 md:p-6'>
                  <img className='h-10 md:h-20' src={table4} alt="" />
                </div>
                <h1 className='text-center font-medium text-[#333333] text-sm md:text-lg my-2'>Payment Protection</h1>
              </div>
            </div>
          </div>

          <div className='w-10/12 flex flex-col md:flex-row my-8 md:my-16 justify-between'>
            <div className='my-6'>
              <h1 className='text-4xl font-semibold'>Connect with us</h1>
              <h1 className='text-base text-[#5F5F5F] font-semibold my-2'>Call us: <span className='font-normal'>+91 1234567890</span></h1>
              <span className='text-base text-[#5F5F5F] font-semibold my-2'>Write to us: <a href='mailto:thepaintercompany@gmail.com' className='font-normal'>thepaintercompany@gmail.com</a></span>
              <div className='w-fit mt-2'>
                 <a href="https://wa.me/+919876543210" target='_blank'>
                   <img className='h-10 md:h-12 rounded-full' src={whatsapp} alt="" />
                 </a>
              </div>
            </div>
            <div className='md:w-6/12'>
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <div className='flex gap-2 mb-4 md:w-10/12'>
                  <input type="text" id='firstname' onChange={handleChange} className='w-6/12 rounded-[3px] my-1 p-2 border outline-none' placeholder='First Name'/>
                  <input type="text" id='lastname' onChange={handleChange} className='w-6/12 rounded-[3px] my-1 p-2 border outline-none' placeholder='Last Name'/>
                </div>
                <label>Email Address</label>
                <div className=' mb-4'>
                  <input type="email" id='email' onChange={handleChange} className='md:w-10/12 w-full rounded-[3px] my-1 p-2 border outline-none' placeholder='Enter email address'/>
                </div>
                <label>Message</label>
                <div className=' mb-4'>
                <textarea type="text" id='message' onChange={handleChange} className='md:w-10/12 w-full rounded-[3px] my-1 p-2 border outline-none' placeholder='type your message' required />
                </div>
                <button disabled={loading} className='bg-[#E4225F] hover:bg-[#f75a8c] disabled:opacity-80 py-2 px-6 rounded-lg text-sm text-white'>
                {loading ? 'Loading...':'Send Message'}</button>
              </form>
              {error && <p className='text-red-500 mt-5'>{error}</p>}
              {!error && <p className='text-green-500 mt-5'>{result}</p>}
            </div>
          </div>

          <Footer1/>
      </div>
    </div>
  )
}

export default LandingPage;