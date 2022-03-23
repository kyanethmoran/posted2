import React, { useEffect, useState } from 'react'
import '../components/ProfileDetails.css'
import axios from 'axios';

export default function ProfileDetails() {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState();

    let currentuser = window.sessionStorage.getItem('activeUser');

    const dbURL = 'https://posted2-8df76-default-rtdb.firebaseio.com/'
    const jsonEXT = '.json'

    useEffect(()=>{
        getInfo();
    },[])
    
    function getInfo(){
        axios.get(dbURL+currentuser+jsonEXT).then(response =>{
                setInfo(response.data);
                console.log(info, 'hi');
                setLoading(false);            
        })
    }
    console.log(info, 'hi2')
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
    <div>
        
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center"> 
                    <button className="btn btn-secondary"> 
                        <img src="" alt="current user" height="100" width="100" />
                    </button> 
                    <span className="name mt-3">{info.firstName}</span> 
                    <span className="idd">@{info.userName}</span>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3"> 
                        <span className="number">1254<span class="follow">Followers</span></span> 
                    </div>
                    <div className=" d-flex mt-2"> 
                        <button className="btn1 btn-dark">Edit Profile</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}










// useEffect(()=>{
    //     axios.get(dbURL+currentuser+jsonEXT).then(response =>{
    //         const userInfo = res.data;
    //         console.log(userInfo,'info from myahwattz')
    //     })
    // }, [])