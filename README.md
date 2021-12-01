# Weather-App

## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

This is an app using an external weather server-based API from openweathermap.org. It was created to check the current and 5 day forecast of a given city, which might be useful for travelling plans. I learned a good bit about the impact of chaining functions and the headaches lots of chaining calls can make in the event a bug needs to be sorted out. I also learned that you can "modularize" the code across multiple sheets to help tidy aspects of the code. I also started using "template literals" which was a fun thing to learn (courtesy of my tutor). Being able to decipher error codes in the console and fixing code effectively is getting easier.

repo URL: https://github.com/RossWestwater/Weather-App
deployed site URL: https://rosswestwater.github.io/Weather-App/

![picture of the weather app after a few searches, then a refresh](/assets/images/Weather_App.png)

## Tests
Using bootstrap as the primary styling source was nice. I also noticed some issues with CSS interacting with bootstrap formatting and discovered that I had to use ID's and element names instead of class names to assign overriding CSS properties to elements. I also had to overcome some issues with the search history buttons and local storage. For the buttons I capped the storage at 10 items and popped history details after that, so you don't have a zillion buttons after refreshing. Because of where the local storage save was being called in my chain of functions, I had some issues with seach history buttons being created for searches that didn't return a result (ie. searching for misspelled cities, or just "a;lsdfj;a" or something to that effect). My solution was to edit the array that was being saved to localstorage, then call for a re-save at the point a city search didn't yield a result and remove the created button. I had to do this in the function that first identifies if the input will actually bring up a city (ie. getCity(); ). Due to the alert, which happens too fast for my background button/search history cleanup to happen before the alert occurs, the fix is only effective, if inelegant. The alternative would be to restructure the calls and possibly consolidate functions, but I need to focus on the upcoming group project. 