import React from 'react';
import NewPost from '../components/NewPost';
import Posts from '../components/Posts';
import ProfileDetails from '../components/ProfileDetails';


function Home() {
  return (
    <div className='home row'>
      <div>
        <ProfileDetails />
      </div>
      <div>
        <NewPost />
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
}

export default Home;