import React from 'react';
import {Link} from 'react-router-dom';

function Home (){
    return(
          <div className='back-image'>
            <div className='perfume-flex home-container'>
            <h1 className='col-4'>Men's wear World</h1>
            <nav className='perfume-flex col-8 home-top'>
              
              <Link className='link-btn' to='/home'>Home</Link>
              <Link className='link-btn' to='/about1'>About</Link>
              <Link className='link-btn' to='/dashboard'>Dashboard</Link>
              <Link className='link-btn' to='/product'>Product</Link>
            </nav>
            </div>
            <div className='home-head'>
            <h1>Welcome To Our Website</h1>
            <p></p>
            </div>
            </div>
      );
}    
export default Home;