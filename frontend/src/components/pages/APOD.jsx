import React, { useEffect, useState } from 'react'
import Main from '../Main';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import '../../styles/APOD.css';

export default function APOD() {

  const [data,setData] = useState(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  //fetching data from NASA API
  useEffect(()=>{
    //checking user logged in
    if(localStorage.getItem("token")===null){
      window.location.href = '/Signin';
    }
    async function fetchAPIData() {
      const KEY = "0KWxFf3Pd5uEI2v9GmTcgzPikliIBnlKwjVfezeY";
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${KEY}&thumbs=${true}`
      try{
        const res = await fetch(url);
        const localData = await res.json()
        console.log(localData);
        setData(localData);
      }catch(error){
        console.log(error.message);
      }
    }
    fetchAPIData();
  },[])

  //! This function toggles the drawer
  const toggleDrawer = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="main-container">
      {data? (<Main image={data} onImageClick={toggleDrawer} />) :
      <div className="loadingState" > <i className="fa-solid fa-gear"></i> </div>}
      {data? (<Footer imageName={data.title}/>):''}
      {data? (<Sidebar isOpen={isSideBarOpen} toggleDrawer={toggleDrawer} imageName={data.title} imageDescription={data.explanation} imageDate={data.date}/>) : ''}
    </div>
  )
}
