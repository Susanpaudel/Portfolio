import React from 'react'
import pic1 from './images/1.jpg'
import pic2 from './images/2.jpg'
import pic3 from './images/3.jpg'
import pic4 from './images/4.jpg'
import pic5 from './images/5.JPG'
import pic6 from './images/6.jpg'
import pic7 from './images/7.jpg'
import pic8 from './images/8.jpg'
import pic9 from './images/9.jpg'
import pic10 from './images/10.jpg'
import pic11 from './images/11.jpg'

export const Photo = () => {
  return (
    <div className="container photo py-5">
    <div className="heading">
      <h3>Photo <span>Gallery</span></h3>
    </div>
    <div className="box">
      
      <div className="dream">
        <img src={pic1} alt="1"/>
           <img src={pic4} alt="1"/>
            
            
      </div>

        <div className="dream">
        <img src={pic6} alt="1"/>
         <img src={pic7} alt="1"/>
          <img src={pic8} alt="1"/>
           <img src={pic9} alt="1"/>
           <img src={pic3} alt="1"/>
           
            
      </div>

        <div className="dream">
        <img src={pic11} alt="1"/>
        <img src={pic10} alt="1"/>
        <img src={pic9} alt="1"/>
        <img src={pic5} alt="1"/>
        <img src={pic2} alt="1"/>
         
            
      </div>




    </div>





  </div>

  )
}
