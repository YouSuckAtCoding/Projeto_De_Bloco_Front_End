import '../Home/Home.css'
import React, { useState, useEffect } from 'react';
import {GetAll} from '../../Urls/PostUrls.js'

function Home() 
{

    const [posts, setPosts] = useState([]);

    const getPosts = async () => 
        {
        const response = await fetch(GetAll);

        const data = await response.json();

        console.log(data);

        setPosts(data);
    }
    
    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div className="Home">
            <div className='CardContainer'>
                {posts.map((post) => {
                    return (
                        <ul className='postList' key={post.id}>
                            <li className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Autor: {post.user.Name}</h5>
                                    <p className="card-text">{post.description}</p>
                                </div>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );

}

export default Home;