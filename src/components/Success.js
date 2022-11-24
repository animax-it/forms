import React, {useEffect } from 'react';
import { runFireworks } from '../utils/Firework';

const Success = () => {

  useEffect(() => {
    
    runFireworks();
  }, []);

  return (
    <div >
      <div className = "marginAndPadding" >
        
        <h1 >Your form is submitted !!! </h1>
        <p >Check your email inbox for the receipt.</p>
        <p >
          To submit a new form click &nbsp;
          <a  href="https://localhost:3000">
             here         
          </a>
        </p>
        
      </div>
    </div>
  )
}

export default Success