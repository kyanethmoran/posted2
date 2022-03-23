import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";


export default function Posts() {
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
                setLoading(false);            
        })
    }
    console.log(info, 'hi2')
    if(isLoading){
        return <div>Loading...</div>
    }


  return (
            <div>
              <div>
                <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                        <div className="card p-4">
                          <div className=" image d-flex flex-column justify-content-center align-items-center"> 
                            <span className="idd">@{info.userName}</span>
                            <span className="number">{info.posts[0].time}</span>
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                <span className="number">{info.posts[0].post}</span> 
                            </div>
                            <div className=" d-flex mt-2"> 
                              <span className="idd">{info.posts[0].likes} likes</span>
                              <span className="idd">{info.posts[0].dislikes} dislikes</span>
                            </div>
                            
                              
                              <div className=" d-flex mt-2"> 
                                <button className="btn1 btn-dark">Edit</button> 
                                <button className="btn1 btn-dark">Delete</button> 
                              </div>
                            
                        </div>
                      </div>
                </div>
              </div>
            </div>
  )
}
