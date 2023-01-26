import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import './TweetBox.css';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = ""
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening?" 
                        type = "text" 
                    />
                </div>
                <input 
                    onChange = { (e) => setTweetImage(e.target.value) }
                    value = {tweetImage}
                    className = "tweetBox__imageInput"
                    placeholder = "Enter Image URL"
                    type = "text"
                />
                <Button 
                onClick = { sendTweet }
                className = "tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;