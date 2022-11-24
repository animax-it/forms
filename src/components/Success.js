import React, {useEffect } from 'react';




import { runFireworks } from '../utils/Firework';

const Success = () => {
  
  
  useEffect(() => {
    
    runFireworks();
  }, []);

  return (
    <div >
      <div className = "planHead" >
        
        <h1 >Your form is submitted !!! </h1>
        <p >Check your email inbox for the receipt.</p>
        <p >
          If you have any questions, please email : 
          <a  href="animesh.sharmag10@gmail.com">
             animesh.sharmag10@gmail.com          
          </a>
        </p>
        
      </div>
    </div>
  )
}

export default Success