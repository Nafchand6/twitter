import React, { useState, useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post';
import FlipMove from "react-flip-move";


function Feed() {
    const [post, setPost] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch ("http://localhost:8080/tweet")
            const jsonResult = await result.json()
           setPost(jsonResult)
           
        }
        fetchData()
    }, [])
    
  
    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Latest Tweets</h2>
            </div>

            <TweetBox />
           <div style = {{maxHeight: '400px', overflow: 'auto'}}>
                {post.map(post => (
                <Post 
                key={post.id}
                id={post.displayName}
                user={post.user}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
              />
            ))}
             
             </div>
        </div>
    )
} 
export default Feed;