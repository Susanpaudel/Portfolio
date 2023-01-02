import React from 'react'
import htmllogo from '../image/image-6.png'
import bootstraplogo from '../image/bootstrap_color.png'
import figmalogo from '../image/figma_color.png'
import reactlogo from '../image/react.png'
import laravellogo from '../image/laravel.png'
import gitlogo from '../image/github.png'

export const Advantage = () => {
  /*  const counters=document.querySelectorAll('#counter');
counters.forEach((counter)=>{
  counter.innerHTML='0';
  const updateCounter=()=>{
    const target=+counter.getAttribute('data-target');
    const c=+counter.innerText;
    const incresement=target/200;
    if(c<target){
      counter.innerText=`${Math.ceil(c+incresement)}`;
      setTimeout(updateCounter,1);
    }
  }
  updateCounter();
});*/
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-12">
                <div className="adv_header text-center">
                   <h1>My Advantage</h1>
                </div>
            </div>
        </div>
        <div className="row py-5">
            <div className="col-6 col-md-4 col-lg-2 text-center my-3">
                <div className="exp_icon py-5">
                   <img src={htmllogo} alt="html_logo" className='img-fluid mb-4'/>
                   <h1 id="counter" data-target="50">50%</h1>
                </div>
                <p className='fw-bold exp_name pt-3'>HTML</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 text-center my-3">
                <div className="exp_icon py-5">
                   <img src={bootstraplogo} alt="boostrap_logo" className='img-fluid mb-4'/>
                   <h1>50%</h1>
                </div>
                <p className='fw-bold exp_name pt-3'>Bootstrap</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 text-center my-3">
                <div className="exp_icon py-5">
                   <img src={figmalogo} alt="figma_logo" className='img-fluid mb-4'/>
                   <h1>50%</h1>
                </div>
                <p className='fw-bold exp_name pt-3'>Figma</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 text-center my-3">
                <div className="exp_icon py-5">
                   <img src={reactlogo} alt="react_logo" className='img-fluid mb-4'/>
                   <h1>50%</h1>
                </div>
                <p className='fw-bold exp_name pt-3'>React</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 text-center my-3">
                <div className="exp_icon py-5">
                   <img src={laravellogo} alt="laravel_logo" className='img-fluid mb-4'/>
                   <h1>50%</h1>
                </div>
                <p className='fw-bold exp_name pt-3'>Laravel</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 text-center my-3">
                <div className="exp_icon py-5">
                   <img src={gitlogo} alt="git_logo" className='img-fluid mb-4'/>
                   <h1>50%</h1>
                </div>
                <p className='fw-bold exp_name pt-3'>Git Hub</p>
            </div>
        </div>
        <hr/>
    </div>
  )
}
