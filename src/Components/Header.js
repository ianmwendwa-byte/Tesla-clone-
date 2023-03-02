import React,{useState}from 'react';
import {Link} from "react-router-dom";
 function Header() {
  const [burgerStatus, setBurgerStatus]=useState(false);
  return (
    <div>
    <nav>
       <Link to='/'>
         <img src='/images/logo.svg' alt="TESLA" style={{ padding:'0.5rem 1rem' }}/>
       </Link>
       <div className='menu'>
       
        <Link className='Link' to='S'>Model S</Link>
        <Link className='Link' to='Model3'>Model 3</Link>
        <Link className='Link' to='ModelX'>Model X</Link>
        <Link className='Link' to='ModelY'>Model Y</Link>
        <Link className='Link' to='SolarRoof'>Solar Roof</Link>
        <Link className='Link' to='SolarPanel'>Solar panels</Link>
       </div>
       <div className='right-menu'> 
       <Link className='Link mob'>Shop</Link>
       <Link className='Link mob'> Account</Link>
       <Link className='Link' onClick={()=> setBurgerStatus(true)}> menu</Link> 
       </div>
    </nav>
    
     <div className='nav-side' style={{right:burgerStatus? "0px":"-600px"}}>
      <div className='close' onClick={()=> setBurgerStatus(false)}> 
        <img src='/images/icon-close.svg' alt="close"/>
      </div>
      <div className='mobile-menu'>
        <Link className='Link' style={{marginTop:"1rem"}} to='S'>Model S</Link>
        <Link className='Link' to='Model3' >Model 3</Link>
        <Link className='Link' to='ModelX'>Model X</Link>
        <Link className='Link' to='ModelY'>Model Y</Link>
        <Link className='Link' to='SolarRoof'>Solar Roof</Link>
        <Link className='Link' to='SolarPanel'>Solar panels</Link>
      </div>
     <Link style={{marginTop:"1rem"}}>Existing inventory</Link>
     <Link>Used inventory</Link>  
     <Link>Trade-In</Link>
     <Link>Demo Drive</Link>
     <Link>Insurance</Link>
     <Link>Cybertruck</Link>
     <Link>Roadster</Link>
     <Link>Semi</Link>
     <Link>Charging</Link>
     <Link>Powerwall</Link>
     <Link>Commercial Energy</Link>
     <Link>Utilities</Link>
     <Link>Find Us</Link>
     <Link>Support</Link>
     <Link>Investor Relations</Link>
     <Link className='phone'>Shop</Link>
       <Link className='phone'> Account</Link>
     <Link><div>
       <p>United state</p>
       </div>
       <p>English</p>
       </Link>
    </div>
    </div>


  )
}
export default Header