
import React from 'react';
import TweetBox from './TweetBox';

export default function TweetBox( {tweets} ) {
  return (
    <div>
        {tweets.map((tweet, index)=>(
            <TweetBox {... tweet} key={index} />
        ))}
    </div>
  )
}