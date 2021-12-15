# Unit 3 Solo Project

## Overview ##

Háblame is a resource for learners of Spanish that pulls resources from Merriam Webster's dictionaryAPI and Linguatool from RapidAPI to look up translations as well as Spanish collocations and example sentences for those phrases. Users can save collocations they find useful for later reference.

## WireFrames ##

![login-page](/wireframes/LoginPage.png)

![signup-page](./wireframes/SingupPage.png)

![home-page](./wireframes/HomePage.png)

![collocation-page](./wireframes/CollocationPage.png)

-- Stretch Goal Pages --

![news-page](./wireframes/NewsPage.png)

![resource-page](./wireframes/ResourcePage.png)


## ERD ##

![ERD-graphic](./ERD.png)

## Component Tree ##

![component-tree](./wireframes/ComponentTree.png)

## Backend Routes Inventory ##

[1] app.post('/users', ...)                 // create user 
[2] app.post('/users/login', ...)           // login user
[3] app.get('/words', ...)                  // search translations
[4] app.get('/collocations', ...)           // search collocations
[5] app.post('/users/collocation', ...)     // save collocation
[6] app.delete('/users/collocation', ...)   // delete collocation

## User Stories ##

[1] On landing page, I can either sign up or login
[2] On the home page, I see a nav bar on the left, a search tool in the middle to look up word definitions in Spanish, and a separate search tool on the right to look up collocations for specific words in Spanish
[3] On the home page, I can log out by clicking a button in the nav bar
[4] In the collocations pane of the home page, I can save specific search results to my account via a button
[5] On the home page, I can access my saved collocations via a link in the nav bar
[6] On the collocations page, I can see a list of my saved collocations, if any
[7] On the collocations page, I can click on a saved collocation and the example sentence will appear on the right
[8] In the list of saved collocations, I can delete a specific one via a button next to it


## Stretch Goals ##

[1] Create a static News Page that I can personally update throughout time
[2] Create a static Resources Page that I can personally update throughout time
[3] (For after the SEIR) Find APIs for other languages and create the same functionality this app has for students of those languages