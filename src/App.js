import './App.css';
import Tabs from './components/Tabs/Tabs';
import React, { useEffect, useState } from 'react';
import { reqAxios } from './helpers/helpers.js';
import Navbar from './components/Navbar/Navbar';
import Comments from './components/Comments/Comments';
import Favs from './components/Favs/Favs';

const App = () =>{
  
  localStorage.setItem('favList', JSON.stringify([]));
  localStorage.setItem('reactComments', JSON.stringify([]));
  localStorage.setItem('angularComments', JSON.stringify([]));
  localStorage.setItem('vueComments', JSON.stringify([]));
  localStorage.setItem('all', JSON.stringify([]));

  const [all, setAll] = useState(true);
  let [allComments,setAllComments] = useState([])

  const getAllComments = async () => {
    const reactComments = await reqAxios('GET', `?query=reactjs&page=`+0, '', '');
    localStorage.setItem('reactComments', JSON.stringify(reactComments.data.hits));
    
    const react = reactComments.data.hits;

    const angularComments = await reqAxios('GET', `?query=angular&page=`+0, '', '');
    localStorage.setItem('angularComments', JSON.stringify(angularComments.data.hits));

    const angular = angularComments.data.hits;

    const vueComments = await reqAxios('GET', `?query=vuejs&page=`+0, '', '');
    localStorage.setItem('vueComments', JSON.stringify(vueComments.data.hits));
    
    const vue = vueComments.data.hits;

    allComments = react.concat(angular,vue);
    // console.log(allComments);
    localStorage.setItem('all', JSON.stringify(allComments));
  }
  
  useEffect(() => {
    getAllComments();
  },[all])

  return (
    <>
    <Navbar />
    <Tabs setAll={setAll} />
    {all ? <Comments /> : <Favs />}
    </> 
  );
}

export default App;
