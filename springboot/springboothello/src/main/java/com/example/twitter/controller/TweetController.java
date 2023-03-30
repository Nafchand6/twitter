package com.example.twitter.controller;

import com.example.twitter.model.Tweet;
import com.example.twitter.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@CrossOrigin ("http://localhost:4000/")
@RequestMapping("/tweet")
public class TweetController {

    /* @Autowired
    TweetRepository tweetRepository; */
    @Autowired
    TweetService tweetService;

    @GetMapping("")
    public List<Tweet> getTweet() {

        return tweetService.getAllTweets();
    }

    @GetMapping("/tweet/{id}")
    public Tweet getTweet(@PathVariable Long id) {

        return tweetService.getTweet(id);
    }

    @PostMapping("")
    public Tweet postTweet(@RequestBody Tweet tweet) {
        return tweetService.createTweet(tweet);
    }

    @DeleteMapping("/tweet/{id}")
    public String deleteTweet(@PathVariable("id") Long id) {
        tweetService.deleteTweet(id);
        return "Deleted Tweet";
    }
}

