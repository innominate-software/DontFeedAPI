package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.Embeddable;

@Data
@Embeddable
@NoArgsConstructor
public class ContactInformation {

	private Long phoneNumber;

	private String emailAddress;

	private String facebook;

	private String discord;

	@Override
	public String toString() {
		return "ContactInformation{" +
				"phoneNumber=" + phoneNumber +
				", emailAddress='" + emailAddress + '\'' +
				", facebook='" + facebook + '\'' +
				", discord='" + discord + '\'' +
				'}';
	}
}
