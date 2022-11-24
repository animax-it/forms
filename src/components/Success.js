import React, {useEffect } from 'react';




import { runFireworks } from '../utils/Firework';

const Success = () => {
  
  
  useEffect(() => {
    
    runFireworks();
  }, []);

  return (
    <div >
      <div >
        
        <h2>Your form is submitted !!! </h2>
        <p >Check your email inbox for the receipt.</p>
        <p >
          If you have any questions, please email
          <a  href="animesh.sharmag10@gmail.com">
          animesh.sharmag10@gmail.com          </a>
        </p>
        
      </div>
    </div>
  )
}

export default Success