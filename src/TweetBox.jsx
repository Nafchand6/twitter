import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
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
                <div className="tweetboxRow">
                <div style={{ flex: 0.1 }}>
                <div className="tweetboxOptions">
                <AddAPhotoIcon className="tweetboxOptionIcon" width={22} height={22} />
                <GifBoxIcon className="tweetboxOptionIcon" width={22} height={22} />
                <PollIcon className="tweetboxOptionIcon" width={22} height={22} />
                <EmojiEmotionsIcon className="tweetboxOptionIcon" width={22} height={22} />
                </div>
                <Button
                onClick = { sendTweet }
                className = "tweetBox__tweetButton">
                    Tweet
                </Button>
        </div>
       </div>
       </div>
       
    )

}

export default TweetBox;