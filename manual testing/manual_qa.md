# Manual QA

Most of this qa feedback is result of a exploratory testing session of ~ 40min where I found many bugs/improvements

## Bugs
* Delete Movie endpoint (/api/movie/:id) returns 200 OK HTTP response but deletes a different movie, not the one with the id **(Flaky feature, not working as expected)**

	**Pre-requisites:** Movies created in the app
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Execute Delete endpoint with a known id (For this testc case we used id: 62d452162fb3283e492da2f8)

	![This is a alt text.](/screenshots/stc_1.png "Support Test case")

	1. Go to any tool to execute delete endpoint, in our case we used Postman
	(DELETE - http://localhost:5001/api/movie/62d452162fb3283e492da2f8)

	**Expected Result:** 200 OK HTTP code response with response body related to the movie we wanted to delete (Deleting the movie with the id provided)

	**Actual Result:** 200 OK HTTP code response with response body from a different movie
	(Different movie deleted) and the movie with the id used

	![This is a alt text.](/screenshots/bug_0.png "Bug")

	**PS:** if we continue executing the delete request call, it deletes random movies in the app.


* List Movies endpoint (/api/movies) returns 404 when there is no Movies

	**Pre-requisites:** No movies created in the app
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Open the app in the browser
	1. Go to the List Movies section

	**Expected Result:** 200 OK HTTP code response with no movies

	**Actual Result:** 404 Not Found HTTP code response with no movies

* Time is not a required field
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Open the app in the browser
	1. Go to Create Movie
	1. Fill any Name (We used _12 Angry Men)
	1. Fill any Rating (We used _8.9_)
	1. Click Add Movie button

	**Expected Result:** An error message alert regarding Time field required

	**Actual Result:** Successful message alert displaying "Movie Inserted successfully"

	![This is a alt text.](/screenshots/bug_2.png "Bug")

* Error messages are not displayed in the UI
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Open the app in the browser
	1. Go to Create Movie
	1. Click Add Movie button

	**Expected Result:** An error message alert regarding fields required

	**Actual Result:** No messages, after clicking Add Movie it does nothing and remains in the Create Movie page, after opening the devtools and check Network tab, we realized it's complaining  with a 400 BAD Request HTTP code response Error

	![This is a alt text.](/screenshots/bug_3.png "Bug")

* Not possible filter by Time

	**Pre-requisites:** Movies created in the app
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Open the app in the browser
	1. Check the Time column

	**Expected Result:** An input text field to filter Time column the same way we have in the other fields.

	**Actual Result:** No input text field for filtering Time

	![This is a alt text.](/screenshots/bug_4.png "Bug")

* There is a Typo with UPDATE word

	**Pre-requisites:** Movies created in the app
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Open the app in the browser
	1. Check the Update option at the end of the row

	**Expected Result:** _Update_ word

	**Actual Result:** Upadate word

	![This is a alt text.](/screenshots/bug_5.png "Bug")

* There is a Typo with you word in the confirm pop up when click Delete button

	**Pre-requisites:** Movies created in the app
	
	**Environment:** Local
	
	**Browser**: Chrome Version 99.0.4844.83 (Official Build) (x86_64)
	
	**Steps to reproduce:**
	1. Open the app in the browser
	1. Go to any row with a movie
	1. Click Delete button

	**Expected Result:** _you_ word

	**Actual Result:** tou word

	![This is a alt text.](/screenshots/bug_6.png "Bug")




## Improvements

* [UI] Rating field should be restricted to only valid rating numbers 

	* [UI] Rating field allows 'e' concatenated with multiple numbers

	![This is a alt text.](/screenshots/imp_1.png "Improvement")

	* [UI] Rating field allows + sign

	![This is a alt text.](/screenshots/imp_2.png "Improvement")

	* [UI] Rating field allows - sign

	![This is a alt text.](/screenshots/imp_3.png "Improvement")

* Movie name field has no limit in characters
	
	We used this text as Movie Name:

	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu lectus et metus consequat aliquet eget nec lacus. Sed mi nisi, accumsan ut interdum vitae, faucibus in nunc. In mi dolor, posuere sit amet nunc ut, scelerisque aliquam metus. Nam eget tristique ligula. Suspendisse sit amet vehicula erat. Maecenas pellentesque nisl sed ex congue pellentesque. Phasellus sed sapien a nunc auctor dignissim in in lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero non orci ornare hendrerit. Proin vitae sollicitudin nunc. Donec metus erat, scelerisque vel orci ac, rhoncus aliquam justo. Aliquam dapibus et nibh sed congue. Duis nec feugiat ante, ac convallis magna. Nulla at justo a urna ultricies blandit nec nec turpis.

	![This is a alt text.](/screenshots/imp_4.png "Improvement")


* Time field Should be restricted only to time values (Numbers and letters {h, m, s}) and limit in characters

![This is a alt text.](/screenshots/imp_5.png "Improvement")


* When Deleting a movie, the alert refers to the ID of the movie, it is complicated to read/understand, The movie name would be more human-friendly

![This is a alt text.](/screenshots/imp_6.png "Improvement")

* When updating a movie, after the update, it remains in the Create movie page, a better UX would be take the user to the List movies

* After updating a movie, the fields are cleaned but we can enter again any info and press update again and the changes will be applied, not a good experience to update a movie we don't have any information