'use client'
import React, { useEffect, useRef, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function SignUpPage() {
    const {data:session} = useSession()

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await signIn("credentials", {
                username, password, redirect: false
            })
            console.log(res)
            console.log(session)

            if (res.error == 'CredentialsSignin') {
                setMessage("Sign In Failed");
                setErrMsg("Invalid username or password");
                setUsername("");
                setPassword("");
                return
            }else{
                setMessage("Sign In Success");
                setSuccess(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const router = useRouter();

    const handleGoToHome = () => {
        router.push('/')
    }

    return (
        <>      
            {success ? (
                <section>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col mt-16 items-center">
                        <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[15rem]">
                            <h1 className="text-3xl text-white font-semibold mb-8 text-center">
                                You are logged in!
                            </h1>
                            <h1 className="text-lg text-white font-medium text-center">
                                Welcome, {session?.user?.firstName} {session?.user?.lastName}
                            </h1>
                            <br/>
                            <div className="text-lg text-slate font-bold mb-8 text-center">
                                <button
                                    type="text"
                                    className="bg-slate-100 hover:bg-orange-200 p-2 rounded-lg text-center"
                                    onClick={handleGoToHome}
                                >
                                    Go to Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            ) : (
                <section>
                    
                    <div className="flex flex-col items-center justify-center h-screen">
                        <p
                            ref={errRef}
                            className={errMsg ? "flex justify-center text-slate font-medium bg-red-200 border-red-500 p-4 border-4 shadow-lg rounded-lg w-96 " : "offscreen"}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>
                        <div className="flex flex-col mt-16 items-center">
                            <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-xl w-[35rem] h-[27.5rem]">
                                <h1 className="text-3xl text-white font-semibold mb-8">
                                    Sign In
                                </h1>
                                <form onSubmit={handleSubmit}>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-white"
                                    >
                                        Username
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
                                        Password    
                                    </label> 
                                    <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none pr-12"
                                        required
                                    />
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        {showPassword ? (
                                        <BiHide
                                            onClick={() => setShowPassword(false)}
                                            className="cursor-pointer text-black"
                                        />
                                        ) : (
                                        <BiShow
                                            onClick={() => setShowPassword(true)}
                                            className="cursor-pointer text-black"
                                        />
                                         )}
                                    </div>
                                    </div>
                                    <button
                                        className="w-full bg-orange-200 text-slate font-medium py-3 px-4 mt-5 rounded-md hover:bg-orange-300"
                                    >
                                        Sign In
                                    </button>
                                    <p className="text-red-300 mt-5">{message}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}