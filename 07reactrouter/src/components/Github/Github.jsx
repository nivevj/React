import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nivevj').then((response)=>response.json()).then((data)=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github followers {data.followers}
        <img src={data.avatar_url} width={300} alt='profile' />
    </div>
  )
}

//more optimized method

export default Github
export const githubinfo = async()=>{
    const response = await fetch('https://api.github.com/users/nivevj')
    return response.json()
}