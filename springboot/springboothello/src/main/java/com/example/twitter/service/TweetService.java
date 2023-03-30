package com.example.twitter.service;

import com.example.twitter.model.Tweet;
import com.example.twitter.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TweetService {
    // private final ModelMapper modelMapper;
    @Autowired
    TweetRepository tweetRepository;

    public List<Tweet> getAllTweets() {
         return (List<Tweet>) tweetRepository.findAll();
    }

    public Tweet getTweet(Long id) {
        Optional optTweet = tweetRepository.findById(id);
        Tweet tweet = (Tweet) optTweet.get();
        return tweet;
    }

    public Tweet createTweet(Tweet tweet) {
        Tweet savedTweet = tweetRepository.save(tweet);
        return savedTweet;
    }

    public void deleteTweet(Long id) {
        tweetRepository.deleteById(id);
    }
}




