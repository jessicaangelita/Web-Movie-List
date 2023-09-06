'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react"
import Header from "./Header";
import { BiHide, BiShow } from "react-icons/bi"

export default function SignInPage() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignInButton = () => {
        router.push("/");
    }

    return (
        <div>
           <Header/> 
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col mt-16 items-center">
                    <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[27.5rem]">
                        <h2 className="text-3xl text-white font-semibold mb-8">Sign In</h2>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Username
                            </label>
                            <input
                                type="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none mb-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Password
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

                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 px-4 rounded-md hover:bg-green-900"
                            // onClick={handleSignInButton}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}