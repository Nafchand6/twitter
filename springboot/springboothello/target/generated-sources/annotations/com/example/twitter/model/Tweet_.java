package com.example.twitter.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Tweet.class)
public abstract class Tweet_ {

	public static volatile SingularAttribute<Tweet, Integer> id;
	public static volatile SingularAttribute<Tweet, String> text;
	public static volatile SingularAttribute<Tweet, String> user;

	public static final String ID = "id";
	public static final String TEXT = "text";
	public static final String USER = "user";

}

