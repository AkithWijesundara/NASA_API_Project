import React,{useState, useEffect} from 'react'
import ElementCard from '../ElementCard'
import '../../styles/Mars.css'
import Filter from '../Filter';
import Button from '../Button';
import dayjs from 'dayjs';


export default function Mars() {

  const [marsdata,setMarsData] = useState([]);

  //fetching data from NASA api
  useEffect(()=>{
    //checking if user still logged in
    if(localStorage.getItem("token")===null){
      window.location.href = '/Signin';
    }
    async function fetchAPIData() {
      const KEY = "0KWxFf3Pd5uEI2v9GmTcgzPikliIBnlKwjVfezeY";
      const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos" + `?earth_date=${date}&page=1&api_key=${KEY}`
      try{
        const res = await fetch(url);
        const localData = await res.json()
        setMarsData(localData.photos);
      }catch(error){
        console.log(error.message);
      }
    }
    fetchAPIData();
  },[])

  async function fetchAPIData() {
    const KEY = "0KWxFf3Pd5uEI2v9GmTcgzPikliIBnlKwjVfezeY";
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos" + `?earth_date=${date}&page=1&api_key=${KEY}`
    try{
      const res = await fetch(url);
      const localData = await res.json()
      setMarsData(localData.photos);
    }catch(error){
      console.log(error.message);
    }
  }

  const [selectedDate,setSelectedDate] = useState(null);
  const [date, setDate] = useState(dayjs(new Date).format('YYYY-MM-DD'));

  const handleChange = (value)=>{
    if(value){
      setDate(dayjs(value).format('YYYY-MM-DD'))
      setSelectedDate(value)
    }
    
    console.log(date)
  }
  const filter = ()=>{
    fetchAPIData()
  }

  return (
    <>
      <div className='filter-main'>
        <div className='filter-container'>
          <div className='filter-content'>
            <Filter name="date" value={selectedDate} onChange={handleChange}/>
          </div>
          
          <div className='filter-btn'>
            <i class="fa-solid fa-magnifying-glass" onClick={filter} ></i>
          </div>
        </div>
        
        
      </div>
      {<div className='mars-container'>
          {marsdata ? (marsdata.map((item)=>{
              return <ElementCard cardData={item}/> 
          })) : <div className="loadingState" > <i className="fa-solid fa-gear"></i> </div>}
      </div>}
    </>
  )
}
