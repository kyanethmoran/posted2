import React from 'react'
import '../components/ProfileDetails.css'

export default function ProfileDetails() {

  return (
    <div>
        
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card p-4">
                <div class=" image d-flex flex-column justify-content-center align-items-center"> 
                    <button class="btn btn-secondary"> 
                        <img src="" alt="current user" height="100" width="100" />
                    </button> 
                    <span class="name mt-3">NAME HERE</span> 
                    <span class="idd">@USERNAME</span>
                    <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
                        <span class="number">1069 <span class="follow">Followers</span></span> 
                    </div>
                    <div class=" d-flex mt-2"> 
                        <button class="btn1 btn-dark">Edit Profile</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
