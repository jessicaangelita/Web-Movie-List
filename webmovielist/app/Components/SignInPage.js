'use client'

import React, { useContext, useEffect, useRef, useState } from "react"
import Header from "./Header";
import { BiHide, BiShow } from "react-icons/bi"
import AuthContext from "../Context/AuthProvider";
import axios from '../api/signin';

const SIGNIN_URL = '/auth'

export default function SignInPage() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setScuccess] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(username, password);

        try {
            const response = await axios.get(SIGNIN_URL, 
                JSON.stringify({username, password}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                console.log(JSON.stringify(response?.data));
                setAuth({username, password})
                setUsername('');
                setPassword('');
                setScuccess(true);
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status == 400) {
                setErrMsg('Missing Username or Password')
            } else if (error.response?.status == 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Sign In Failed')
            }
            errRef.current.focus();
        }
    }

    // const handleSignIn = async () => {
    //     try {
    //         const response = await axios.post('../api/signin', {
    //             username,
    //             password,
    //         });
    //         if (response.status == 200) {
    //             setMessage('Sign In Success');
    //         } else {
    //             setMessage('Sign In Failed')
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         setMessage('Sign In Failed');
    //     }
    // };

    return (
        <>
            {success ? (
                <section>
                    <div className="flex items-center justify-center h-screen">
                        <div className="flex flex-col mt-16 items-center">
                            <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[15rem]">
                                <h1 className="text-3xl text-white font-semibold mb-8 text-center">You are logged in!</h1>
                                <br/>
                                <p>
                                    <a href="/" className="text-xl text-white font-semibold mb-8 text-center">Go to Home</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col mt-16 items-center">
                        <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[27.5rem]">
                            <h1 className="text-3xl text-white font-semibold mb-8">Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Username: 
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none mb-3"
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Password: 
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none pr-12" // Tambahkan padding right
                                        required
                                    />
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2"> {/* Atur tata letak ikon */}
                                        {showPassword ? (
                                        <BiHide onClick={() => setShowPassword(false)} className="cursor-pointer text-black" />
                                        ) : (
                                        <BiShow onClick={() => setShowPassword(true)} className="cursor-pointer text-black" />
                                        )}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-700 text-white py-3 px-4 mt-5 rounded-md hover:bg-green-900"
                                    // onClick={handleSignIn}
                                >
                                    Sign In
                                </button>
                                <p className="text-white">{message}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            )}
        </>
        
    )
}