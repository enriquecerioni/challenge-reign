import './App.css';
import Comments from './components/Comments/Comments';
import Favs from './components/Favs/Favs';
import Tabs from './components/Tabs/Tabs';
import React, { useEffect, useState } from 'react';
import { reqAxios } from './helpers/helpers.js';
import Navbar from './components/Navbar/Navbar';

const App = () =>{
  
  localStorage.setItem('favList', JSON.stringify([]));
  const [all, setAll] = useState(true);
  // const [collectionReact, setCollectionReact] = useState([]);
  // const [collectionAngular, setCollectionAngular] = useState([]);
  // const [collectionVue, setCollectionVue] = useState([]);

  const getReactComments = async () => {
    // for (let i = 0; i < 3; i++) {
    //   const data = await reqAxios('GET', `?query=reactjs&page=${i}`, '', '');
    //   setCollectionReact(collectionReact => [...collectionReact.concat(data.data.hits)]);
    // }
    const data = await reqAxios('GET', `?query=reactjs&page=`+0, '', '');
    localStorage.setItem('reactComments', JSON.stringify(data.data.hits));
  }

  const getAngularComments = async () => {
    // for (let i = 0; i < 3; i++) {
    //   const data = await reqAxios('GET', `?query=angular&page=${i}`, '', '');
    //   setCollectionAngular(collectionAngular => [...collectionAngular.concat(data.data.hits)]);
    // }
    const data = await reqAxios('GET', `?query=angular&page=`+0, '', '');
    localStorage.setItem('angularComments', JSON.stringify(data.data.hits));
  }

  const getVueComments = async () => {
    // for (let i = 0; i < 3; i++) {
    //   const data = await reqAxios('GET', `?query=vuejs&page=${i}`, '', '');
    //   setCollectionVue(collectionVue => [...collectionVue.concat(data.data.hits)]);
    // }
    const data = await reqAxios('GET', `?query=vuejs&page=`+0, '', '');
    localStorage.setItem('vueComments', JSON.stringify(data.data.hits));
  }

  useEffect(() => {
    getReactComments();
    getAngularComments();
    getVueComments();
  },[])

  // const [collectionReact, setCollectionReact] = useState([])
  // const [collectionAngular, setCollectionAngular] = useState([])
  // const [collectionVue, setCollectionVue] = useState([])

  // const getData = async (name, collection, setCollection) => {
  //   for (let i = 0; i < 3; i++) {
  //     const data = await reqAxios('GET', `?query=${name}&page=${i}`, '', '');
  //     setCollection(collection => [...collection.concat(data.data.hits)]);
  //   }
  //   localStorage.setItem(`collection`, JSON.stringify(collection));
  // }

  // useEffect(() => {
  //   getData('reactjs',collectionReact,setCollectionReact);
  //   getData('angular',collectionAngular,setCollectionAngular);
  //   getData('vuejs',collectionVue,setCollectionVue);
  // },[])


  return (
    <>
    <Navbar />
    <Tabs setAll={setAll} />
    { all ? <Comments /> : <Favs />}
    </> 
  );
}

export default App;
