import '../css/Navbar.css';
import wb from '../image/wb.png';
import React, {useEffect, useState} from "react";
import { Link,useLocation } from 'react-router-dom';

function Navbar(){
 const [mobileNavBar, setMobileNavBar]=useState(false);
 const[activeNav, setActiveNav]=useState(false);

 const location=useLocation();
 useEffect(()=>
 {setActiveNav(location.pathname)}
    ,[location]);
 

 const hamburger=(value)=>
 {setMobileNavBar(value);}
    
    return (
     
     <>
   <nav>
        <div className="navbar">
            <div className="desktop-nav">
                <ul>
                    {
                        activeNav==="/"?
                        "":
                    <li className="desktop"><Link to="/">Home</Link></li>
                    }
                    {
                        activeNav==='/about'?
                        ""
                        :
                    <li className="desktop"><Link to="/about">About</Link></li>
                    }
                    {
                        activeNav==='/skills'?
                        "":
                    <li className="desktop"><Link to="/skills">Skills</Link></li>
                    }
                    {
                        activeNav==='/contact'?
                        "":
                    <li className="desktop"><Link to="/contact">Contact</Link></li>
}


                </ul>
              
            </div>
            
            <div className="hamburger" >
                {
                    !mobileNavBar ?
                <img src={wb}  onClick={()=>hamburger(true)}></img>:  
                <div className='cross'><span onClick={()=>hamburger(false)} >&times;</span></div>
}
            </div>
        </div>
        {/* {

mobileNavBar ?

 <div className="mobile-nav" id="mbnav">
     <span onClick={()=>hamburger(false)}>&times;</span>
         <ol>< Link to="/" onClick={()=>hamburger(false)}>Home</Link></ol>
         <ol><Link to="/about" onClick={()=>hamburger(false)}>About</Link></ol>
         <ol><Link to="/skills" onClick={()=>hamburger(false)}>Skills</Link></ol>
         <ol><Link to="/contact" onClick={()=>hamburger(false)} >Contact</Link></ol>
   
 </div>
 :
 
 ""
} */}
  
    </nav>
    {

mobileNavBar ?

 <div className="mobile-nav" id="mbnav">
     {/* <span onClick={()=>hamburger(false)}>&times;</span> */}
         <ol>< Link to="/" onClick={()=>hamburger(false)}>Home</Link></ol>
         <ol><Link to="/about" onClick={()=>hamburger(false)}>About</Link></ol>
         <ol><Link to="/skills" onClick={()=>hamburger(false)}>Skills</Link></ol>
         <ol><Link to="/contact" onClick={()=>hamburger(false)} >Contact</Link></ol>
   
 </div>
 :
 
 ""
}

</>

    );
}

export default Navbar;