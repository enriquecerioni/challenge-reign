import React from 'react';
import './tabs.css';

const Tabs = ({setAll}) =>{
  return (
    <div className='tabCenter'>
        <button onClick={() => setAll(true)}>All</button>
        <button onClick={() => setAll(false)}>Favs</button>
    </div>
  );
}

export default Tabs;