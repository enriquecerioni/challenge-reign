import './App.css';
import Comments from './components/Comments/Comments';
import Favs from './components/Favs/Favs';
import Tabs from './components/Tabs/Tabs';
import { useEffect, useState } from 'react';
import { reqAxios } from './helpers/helpers.js'

const App = () =>{
  const [all, setAll] = useState(true);

  const getReactComments = async () => {
    const data1 = await reqAxios('GET', '?query=reactjs&page=0', '', '');
    const data2 = await reqAxios('GET', '?query=reactjs&page=1', '', '');
    const data3 = await reqAxios('GET', '?query=reactjs&page=2', '', '');
    const data = data1.data.hits.concat(data2.data.hits, data3.data.hits)
    localStorage.setItem('reactComments', JSON.stringify(data));
  }

  const getAngularComments = async () => {
    const {data} = await reqAxios('GET', '?query=angular&page=0', '', '');
    localStorage.setItem('angularComments', JSON.stringify(data.hits));
  }

  const getVueComments = async () => {
    const {data} = await reqAxios('GET', '?query=vuejs&page=0', '', '');
    localStorage.setItem('vueComments', JSON.stringify(data.hits));
  }

  useEffect(() => {
    getReactComments();
    getAngularComments();
    getVueComments();
  },[])

  return (
    <>
    <Tabs setAll={setAll} />
    { all ? <Comments /> : <Favs />}
    </> 
  );
}

export default App;
