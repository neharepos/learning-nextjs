"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation"
import {axios} from "axios";

export default function SignupPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })


    const onSignuo = async() => {
        
    }


    return(
        <div className="flex">
            <h1 className="text-center text-white text-2xl">Signup</h1>
        </div>
    )
}