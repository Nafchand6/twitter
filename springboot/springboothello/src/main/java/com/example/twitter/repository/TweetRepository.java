 package com.example.twitter.repository;

 import com.example.twitter.model.Tweet;
 import org.springframework.data.repository.CrudRepository;

 public interface TweetRepository extends CrudRepository<Tweet, Long> {



 }
