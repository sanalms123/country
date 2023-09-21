import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Counry() {
    const router = useRouter()
    const [Data, setData] = useState()
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
         const data =  res?.data?.filter((items)=>{
           return items?.name?.common === router?.query?.Country
          })
        setData(data)

        });
      }, []);
  return (
    <div style={{flexDirection:"column"}} className='d-flex justify-content-center align-items-center'>
        <h1>{router?.query?.Country}</h1>
        <img width={300} height={200} src={Data &&Data[0].flags?.png}></img>
    </div>
  )
}

export default Counry