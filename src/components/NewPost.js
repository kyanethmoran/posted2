import React from 'react'
import '../components/NewPost.css'
import * as MdIcons from 'react-icons/md';

function NewPost() {
  return (
    <div>
        <div class="container px-4 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="card">
                    <div class="row px-3 form-group">
                        <textarea class="text-muted bg-light mt-4 mb-3" placeholder="Hi, what's on your mind today?"></textarea> 
                    </div>
                    <div class="row px-3">
                    <div>
                        <button><MdIcons.MdAddCircle/></button>
                    </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewPost