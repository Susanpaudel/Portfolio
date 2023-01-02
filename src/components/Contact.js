import React,{ useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef();
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  let submit=(e)=>{
   e.preventDefault();
   if(!name){
    alert("Please enter your name")
   }else if(!email){
    alert("Please enter your email")
   }else if(email==='susanpaudel15@gmail.com' || email==='SUSANPAUDEL15@GMAIL.COM'){
    alert("This is my email address. Please enter your valid email address.")
   }else if(!message){
    alert("Please enter your message")
   }else{
    emailjs.sendForm('service_cywmlsj', 'template_j2jvp1f', form.current, 'vxnXAj8KlU7JJ8dEX')
        .then(() => {
            alert("Your mail send successfully!");
            setName('');
            setEmail('');
            setMessage('');
        }, () => {
            alert("Something went wrong!Please try again letter.");
        }
        );
    
  
   }
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-12 py-5">
                <h1>Let's Chat With Me !</h1>
            </div>
            <div className="col-lg-5">
            <div className='my-3'>
            <p className='text-secondary'>ADDRESS</p>
            <span>Hetauda,Nepal</span>
            </div>
            <div className='my-3'>
            <p className='text-secondary'>EMAIL</p>
             <span>susanpaudel15@gmail.com</span>
             </div>
             <div className='my-3'>
             <p className='text-secondary'>PHONE</p>
             <span>9814228660</span>
             </div>
            </div>
            <div className="col-lg-7">
            <form className="htmlForm my-3" onSubmit={submit } ref={form}>
                <p className='text-secondary text-uppercase'>TELL US ABOUT YOUR PROJECT AND GOALS.</p>
                    <div className="mb-3 input-field">
                        <input type="text" id="name" name="name" className="text-box" placeholder=" " value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <label htmlFor="name" className="htmlForm-label text-secondary ps-3">Full Name</label><span className="icon_htmlForm_reg"><i className="fa fa-user" aria-hidden="true"></i></span>
                    </div>
                    <div className="mb-3 input-field">
                        <input type="email" id="email" name='email' className="text-box" placeholder=" " value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label htmlFor="email" className="htmlForm-label text-secondary ps-3">Email</label><span className="icon_htmlForm_reg"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    </div>
                    <div className="mb-3 input-field">
                        <textarea type="text" id="message" row="3" className='text-box' name="message" value={message} placeholder=" " onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        <label htmlFor="password" className="htmlForm-label text-secondary ps-3">Message</label><span className="icon_htmlForm_reg"><i className="fa fa-message" aria-hidden="true"></i></span>
                    </div>
                
                    <div className="mb-3 contact_btn">
                        <button type="submit" className="btn w-100 fw-bold btn-lg text-light">SEND</button>
                    </div>
                </form>
            </div>
        </div>
        <hr/>
    </div>
  )
}
