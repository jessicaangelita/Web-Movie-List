'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function testLogin() {
    const [user,setUser] =useState([])
    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://dummyjson.com/auth/login',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      data: {
                        username: 'kminchelle',
                        password: '0lelplR',
                      }
                })
                setUser(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
  return (
    <div className="flex h-screen ">
        <div className="m-auto ">
            <div className=' w-64 bg-green-800 text-yellow-200 p-5 rounded-xl  mb-10'>
                <div>
                    <h1>RESPONSE </h1>
                    <h1>id: {user.id}</h1>
                    <h1>username: {user.username}</h1>
                    <h1>firstName: {user.firstName}</h1>
                    <h1>lastName: {user.lastName}</h1>
                    <h1>email: {user.email}</h1>
                </div>
            </div>
        </div>  
    </div>
  )
}
