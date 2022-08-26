import './App.css';
import Comments from './components/Comments/Comments';
import Favs from './components/Favs/Favs';
import Tabs from './components/Tabs/Tabs';
import React, { useEffect, useState } from 'react';
import { reqAxios } from './helpers/helpers.js';
import Navbar from './components/Navbar/Navbar';

const App = () =>{
  
  localStorage.setItem('favList', JSON.stringify([]));
  localStorage.setItem('reactComments', JSON.stringify([]));
  localStorage.setItem('angularComments', JSON.stringify([]));
  localStorage.setItem('vueComments', JSON.stringify([]));
  
  const [all, setAll] = useState(true);

  const getReactComments = async () => {
    const data = await reqAxios('GET', `?query=reactjs&page=`+0, '', '');
    localStorage.setItem('reactComments', JSON.stringify(data.data.hits));
  }

  const getAngularComments = async () => {
    const data = await reqAxios('GET', `?query=angular&page=`+0, '', '');
    localStorage.setItem('angularComments', JSON.stringify(data.data.hits));
  }

  const getVueComments = async () => {
    const data = await reqAxios('GET', `?query=vuejs&page=`+0, '', '');
    localStorage.setItem('vueComments', JSON.stringify(data.data.hits));
  }

  useEffect(() => {
    getReactComments();
    getAngularComments();
    getVueComments();
  },[])

  return (
    <>
    <Navbar />
    <Tabs setAll={setAll} />
    { all ? <Comments /> : <Favs />}
    </> 
  );
}

export default App;
