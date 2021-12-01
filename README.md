# Weather-App

## Description

This is an app using an external weather server-based API from openweathermap.org. It was created to check the current and 5 day forecast of a given city, which might be useful for travelling plans. I learned a good bit about the impact of chaining functions and the headaches lots of chaining calls can make in the event a bug needs to be sorted out. I also learned that you can "modularize" the code across multiple sheets to help tidy aspects of the code. I also started using "template literals" which was a fun thing to learn (courtesy of my tutor). Being able to decipher error codes in the console and fixing code effectively is getting easier. I also didn't use Jquery to continue to develop my understanding of plain JavaScript functionality and not create confusion between what's a Jquery method and what is a Javascript method.

repo URL: https://github.com/RossWestwater/Weather-App
deployed site URL: https://rosswestwater.github.io/Weather-App/

![picture of the weather app after a few searches, then a refresh](/assets/images/Weather_App.png)

## Tests

Using bootstrap as the primary styling source was nice. I noticed some issues with CSS interacting with bootstrap formatting and discovered that I had to use ID's and element names instead of class names to assign overriding CSS properties to elements. I also had to overcome some issues with the search history buttons and local storage. For the buttons I capped the storage at 10 items and removed history details after that, so you don't have a zillion buttons after refreshing. Because of where the local storage save was being called in my chain of functions, I had some issues with seach history buttons being created for searches that didn't return a result (ie. searching for misspelled cities, or just "a;lsdfj;a" or something to that effect). My solution was to restructure the calls into more logical areas (ie. after getCity(), since that had coding to prevent invalid city inputs). 