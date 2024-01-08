import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/m-njot-singh')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // })
    return (
        <div className='bg-gray-700 p-4 rounded-md text-white text-3xl '>Github Followers:{data.followers}
            <img  src={data.avatar_url} alt='Git Picture'/>
        </div>
    )
}

export default Github

export  const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/m-njot-singh')
    return response.json()
}
