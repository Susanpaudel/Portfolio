import React from 'react'
import avatar from '../image/susan.jpg'


export const Hero = () => {
  return (
    <>
    <div className="container py-5">
        <div className="row py-3">
            <div className="col-12">
                <h1 className="hero__title text-center">
                    Susan Paudel<br/>
                    Full Stack Web Developer<br/>
                    Based in Nepal
                </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 py-5 order-lg-0 order-md-2 order-sm-2 order-2">
                <div className="info py-3">
                    <p className='text-secondary'>BIOGRAPHY</p>
                    <span className='fs-5'>
                    Work for money and design for love! I’m Susan, an Full Stack Developer based in Nepal.
                    </span>
               </div>
               <div className="contact py-3">
                    <p className='text-secondary'>CONTACT</p>
                    <span className='fs-5'>
                    Hetauda, Nepal<br/>
                    susanpaudel15@gmail.com<br/>
                    9814228660
                    </span>
               </div>
               <div className="contact py-3">
                    <p className='text-secondary'>SERVICES</p>
                    <span className='fs-5'>
                    Website Development<br/>
                    Web Application<br/>
                    Laravel
                    </span>
               </div>
            </div>
            <div className="col-lg-6 text-center py-5 order-0 order-lg-1 order-md-0 order-sm-0">
                <div className="personal_image mx-auto">
                    <picture>
                    <img src={avatar} className='img-fluid' alt="images"/>
                    </picture>
                </div>
            </div>
            <div className="col-lg-3 text-lg-end py-5 order-3 order-sm-3 order-md-3">
                <div className="exp py-3">
                        <p className='text-secondary'>YEARS OF<br/>
                         EXPERIENCE</p>
                        <h1>1</h1>
                </div>
                <div className=" py-3">
                        <p className='text-secondary'>SATISFITATION<br/>
                        CLIENTS</p>
                        <h1>100%</h1>
                </div>
                <div className=" py-3">
                        <p className='text-secondary'>CLIENTS ON WORLWIDE</p>
                        <h1>+12</h1>
                </div>
                <div className=" py-3">
                        <p className='text-secondary'>PROJECTS DONE</p>
                        <h1>100</h1>
                </div>
            </div>
            <div className="col-lg-12 order-1 order-md-3 order-sm-3">
            <span className='fs-5 text-justify'>
            Susan is a fullstack developer passionate to build web application for your busineess dream. He loves to build website and has been playing with different web technologies like Html,css,bootstrp,jquery,Laravel,React and so on. He is very eager to learn new technologies when he get time for it. Working with him is a step to take your business to the next level with new advanced technologies.
                    </span>
            </div>
        </div>
        <hr/>
    </div>
    </>
  )
}
