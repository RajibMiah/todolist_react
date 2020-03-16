import React from 'react'
import  { FaCoffee }  from 'react-icons/fa';

export default function header() {
    return (
        <header className = "header" data-testid = "header">
         <nav>
             <div className = "logo">
                <img src = "./image/logo.png" alt = "todoLogo"/>
             </div>
             <div className = "setting">
              <ul>
                  <li>+</li>
                  <li>
                  <FaCoffee/>
                  </li>
              </ul>
             </div>
         </nav>
        </header>
    )
}
