'use client';
import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import MiniDrawer from './TestNav';

function LayoutWrapper({ children }) {
  const [open, setOpen] = useState(true);
  return (

    <div className=' flex'>
      {/* <Nav openSidebar={open} /> */}
      <MiniDrawer>
        {children}
      </MiniDrawer>

    </div>



  );
}

export default LayoutWrapper;
