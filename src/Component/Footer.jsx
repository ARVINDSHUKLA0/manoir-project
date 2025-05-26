import React from 'react' 
import '../ComponentStyle/Footer.css'

const Footer = () => {
  return ( 
      <>
        <footer>
             <div>
                  <div className="row m-0">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-3">
                            <ul className='m-0 p-0'>
                                 <li className='list-style-none text-uppercase fs-15 fw-bold mb-2'>resources</li>
                                 <ul className='m-0 p-0'>
                                <li className='list-style-none text-uppercase fs-12 py-1'>locate a gallery</li>
                                <li className='list-style-none text-uppercase fs-12 py-1'>view catalogue</li>
                                <li className='list-style-none text-uppercase fs-12 py-1'>request a catalogue</li>
                                <li className='list-style-none text-uppercase fs-12 py-1'>monoir members program </li>
                                 </ul>
                            </ul>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-3">
                            <ul className='m-0 p-0'>
                                 <li className='list-style-none text-uppercase fs-15 fw-bold mb-2'>customer experience</li>
                                 <ul className='m-0 p-0'>
                                    <li className='list-style-none text-uppercase fs-12 py-1  '>contact us</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1 '>placing an order</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1 '>shipping & delivery</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1 '>return & exchanges</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>monoir gift card</li>
                                    <li className='list-style-none fs-12 py-1 '>FAQs</li>
                                 </ul>
                            </ul>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-3">
                            <ul className='m-0 p-0'>
                                 <li className='list-style-none text-uppercase fs-15 fw-bold mb-2'>our company</li>
                                 <ul className='m-0 p-0'>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>letters form the ceo</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>leadership team</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>investor relations</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>press</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>careers</li>
                                 </ul>
                            </ul>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-3">
                            <ul className='m-0 p-0'>
                                 <li className='list-style-none fs-15 fw-bold text-uppercase mb-2'>legal</li>
                                 <ul className='m-0 p-0'>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>privacy</li>
                                    <li className='list-style-none text-uppercase fs-12 py-1'>terms of use</li>
                                 </ul>
                            </ul>
                      </div>
                  </div>
             </div>
        </footer>
      </>
  )
}

export default Footer