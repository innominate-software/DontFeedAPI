package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Role;
import com.dontfeed.Dont.Feed.model.enumerator.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}