package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Contact;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, Long> {
	Optional<Contact> findContactByName(String name);
}
