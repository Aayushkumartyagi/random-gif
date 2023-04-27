import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useHook from '../hooks/useHook';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    // const[gif,setGif] = useState('');
    // const[loading,setLoading] = useState('false');
    // async function fetchData(){
    //   setLoading(true);
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //   const {data} = await axios.get(url);
    //   const imageSource = data.data.images.downsized_large.url;
    //   // console.log(imageSource);
    //   setGif(imageSource);
    //   setLoading(false);
    // }

    // useEffect( () => {
    //   fetchData();
    // },[])
    const  {gif,loading,fetchData} =useHook();
    function clickHandler(){
      fetchData();
    }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black\
    flex flex-col items-center gap-y-5 mt-[15px]
    '>
        <h1 className='mt-[15px] text-2xl uppercase underline font-bold'>A Random Gif</h1>
        {
          loading?(<Spinner/>):(<img src={gif} width="450"/>)
        }
        
        <button 
        className='w-10/12 bg-[#b8c2a3a8] rounded-lg text-lg py-2 mb-[20px]'
        onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}
export default Random
