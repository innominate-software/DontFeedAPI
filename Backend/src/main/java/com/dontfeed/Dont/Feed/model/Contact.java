package com.dontfeed.Dont.Feed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@NoArgsConstructor
@Entity(name = "Contact")
@Table(name = "contacts")
@JsonIgnoreProperties(value = {"contactLeagues"}, allowSetters = true)
public class Contact {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	private String name;

	private String job;

	@Embedded
	private ContactInformation contactInformation;

	@JsonIgnore
	@JsonProperty(value = "contactLeagues")
	@ManyToMany(mappedBy = "contacts")
	private List<League> league;

	@Override
	public String toString() {
		return "Contact{" +
				"id=" + id +
				", name='" + name + '\'' +
				", job='" + job + '\'' +
				", contactInformation=" + contactInformation +
				'}';
	}
}
