import React from 'react';
import Posts from '../components/Posts';
import ProfileDetails from '../components/ProfileDetails';

function Profile(){

    return(
        <div className='profile row'>
            <div>
                <ProfileDetails />
            </div>
            <div>
                <Posts />
            </div>
        </div>
    );
}

export default Profile;