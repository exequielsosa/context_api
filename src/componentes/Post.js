import React from 'react';
import posts from '../data/post';
import {useParams, Redirect} from 'react-router-dom';

const Post = () => {
    const {id} = useParams();
    
    
    return (
        <>
            {posts[id-1] ?
            <div>
            <h2>{posts[id-1].titulo}</h2>
            <p>{posts[id-1].texto}</p>
            </div>
            :
            <Redirect to="/" />
                
            }
        </>

     );
}
 
export default Post;


