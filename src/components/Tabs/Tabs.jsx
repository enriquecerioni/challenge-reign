import React from 'react';
import './tabs.css';

const Tabs = ({setAll}) =>{
  return (
    <div className='tabCenter'>
        <button className='buttonTab' onClick={() => setAll(true)}>All</button>
        <button className='buttonTab' onClick={() => setAll(false)}>Favs</button>
    </div>
  );
}

export default Tabs;