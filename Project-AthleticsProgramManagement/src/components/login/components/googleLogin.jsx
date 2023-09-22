import {GoogleLogin, GoogleLogout} from 'react-google-login'
import {gapi} from 'gapi-script'
import React, { useEffect, useState } from 'react'
import { Routes, Route, redirect, Router } from "react-router-dom";

function LoginG(){
    const clientId = "13073497204-u13c9a5kiak3cmriqqp160pat1skt3og.apps.googleusercontent.com"
    const [profile,setProfile] = useState(null)
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load("client:auth2",initClient)
    }, [])
    const onSuccess = (res) => {


        setProfile(res.profileObj)
        console.log("suc", res)
    }
    const onFailure = (res) => {
        console.log("fail", res)
    }
    const logOut = () => {
        setProfile(null)
    }
    return(
        <div>
        <br /><br /> 
        {profile ? ( 
            <div>
                 <img src={profile.imageUrl} alt="" />
                 <h3>Login Success</h3>
                 {/* <p>Name: {profile.name}</p>
                 <p>Email: {profile.email} </p> */}
                 <br /><br />
                <GoogleLogout clientId={clientId} buttonText='Log Out' onLogoutSuccess={logOut}/>
            </div>
        ): (
            <GoogleLogin
            clientId= {clientId}
            buttonText='Sign In With Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            />
        )}
       </div>
       
    )
}
export default LoginG;