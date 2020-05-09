package com.dontfeed.Dont.Feed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
public class DontFeedApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("US/Central"));
	}

	public static void main(String[] args) {
		SpringApplication.run(DontFeedApplication.class, args);
	}

}
