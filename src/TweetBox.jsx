import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import './TweetBox.css';
import { useEffect } from 'react';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");


   {/*} useEffect(() => {
        const fetchData = async () => {
            const result = await fetch ("http://localhost:8080/tweet")
            const jsonResult = result.json()
            sendTweet(jsonResult)
           
        }
        fetchData()
    }, []) */}
    
    const sendTweet = async () => {
    const myData = {
        id: "",
        user: "Alee Hash",
        text: tweetMessage
    }
    const result  = await fetch ("http://localhost:8080/tweet", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(myData)
    })
    const resultInJson = await result.json();
    console.log(resultInJson);
    }


    return (
        <form>
        <div className = "tweetBox">
<<<<<<< Updated upstream
            <form>
=======
            
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
                <div className="tweetboxRow">
                <div style={{ flex: 0.1 }}>
                <div className="tweetboxOptions">
                <AddAPhotoIcon className="tweetboxOptionIcon" width={22} height={22} />
                <GifBoxIcon className="tweetboxOptionIcon" width={22} height={22} />
                <PollIcon className="tweetboxOptionIcon" width={22} height={22} />
                <EmojiEmotionsIcon className="tweetboxOptionIcon" width={22} height={22} />
                </div>

                <Button onClick =  {sendTweet}
                  type= "submit"
                className = "tweetBox__tweetButton">
                    Tweet
                </Button> 
        </div> 
       </div>
       </div>
       </form>
       );
>>>>>>> Stashed changes
}
export default TweetBox;