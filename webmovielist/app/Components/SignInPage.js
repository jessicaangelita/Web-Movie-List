'use client'

import React, { useRef, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useAuth } from "../Context/AuthProvider";
import { useRouter } from "next/navigation";
import HeaderSignin from "./HeaderSignIn";

export default function SignUpPage() {
    const { setAuth } = useAuth();

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const dummyUsers = [
        {
            username: "Jessica",
            password: "Jessica123",
        },
        {
            username: "Dyandra",
            password: "Dyandra123"
        }
    ];

    const handleSignIn = () => {
        const user = dummyUsers.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            setMessage("Sign In Success");
            setUsername("");
            setPassword("");
            setSuccess(true);
        } else {
            setMessage("Sign In Failed");
            setErrMsg("Invalid username or password");
            errRef.current.focus();
        }
    };

    const router = useRouter();

    const handleGoToHome = () => {
        router.push('/Home')
    }

    return (
        <>
            <HeaderSignin/>
            {success ? (
                <section>
                    <div className="flex items-center justify-center h-screen">
                        <div className="flex flex-col mt-16 items-center">
                            <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[15rem]">
                                <h1 className="text-3xl text-white font-semibold mb-8 text-center">
                                    You are logged in!
                                </h1>
                                <br/>
                                {/* <h3 className="text-xl text-white font-semibold mb-8 text-center">
                                    <a href="/">
                                        Go to Home
                                    </a>
                                </h3> */}
                                <div className="text-xl text-white font-semibold mb-8 text-center">
                                    <button
                                        type="text"
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
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <div className="flex items-center justify-center h-screen">
                        <div className="flex flex-col mt-16 items-center">
                            <div className="max-w-4xl bg-green-800 px-14 py-12 rounded-lg shadow-md w-[35rem] h-[27.5rem]">
                                <h1 className="text-3xl text-white font-semibold mb-8">
                                    Sign In
                                </h1>
                                <form>
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
                                        type="button"
                                        onClick={handleSignIn}
                                        className="w-full bg-green-700 text-white py-3 px-4 mt-5 rounded-md hover:bg-green-900"
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