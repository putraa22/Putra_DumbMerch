import React from 'react';
import Card from '../Product/Card';
import './home.css';


function HomePage() {
    return(
    <div className="homepage-content d-flex justify-content-start">
      <h2 className="homepage-h2">Product</h2>

      <div className="homepage-contents d-flex">

        <Card 
          imageUrl="https://www.jakartanotebook.com/images/products/41/1020/39390/2/taffware-air-mouse-wireless-mini-keyboard-rgb-24ghz-dengan-touch-pad-i8-black-141.jpg"
          title="Keyboard Mini"
          harga="200.000"
          stock="100"
         />


        <Card 
          imageUrl="https://images.unsplash.com/photo-1535381273077-21e00c27b1b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          title="Griting Card"
          harga="100.000"
          stock="10"
        />
      </div>
      
    </div>
    )
}

export default HomePage;