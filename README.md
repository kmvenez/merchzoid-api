This application is at it's core an ecommerce platform.  It's designed with a simplistic UI for users to be able to upload old band merchandise for a designated price, and utilize Stripe to perform the transaction.

# Planning Story:
This application began by setting up the backend with Express.  Once that was up and functional, then the frontend was created with React and Bootstrap.

# User Stories:
* As a person looking to make a few extra dollars by cleaning out my closet, I want to be able to upload my item for sale with minimal inputs on a UI that isn't too crowded.
* As a person who is a fan of a certain band but on a tighter budget, I want to be able to purchase their merchandise at a lower cost from a trustworthy source.
* As a unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a signed in user, I want to be able to upload and delete my merchandise as I see fit.

# Technologies Used:
Javascript, HTML/CSS, React, React Bootstrap, Axios, Mongoose, Express.

# Unsolved Problems:
Deleting once a purchase is completed, not just when clicking the 'Delete' button.

[Wireframe:](https://imgur.com/7KitEdD)

[ERD:](https://imgur.com/a/Xu5Wb5G)

[Alternate Repo:](https://github.com/kmvenez/merchzoid-api)

[Heroku:](https://thawing-earth-07651.herokuapp.com/)

[Deployed Client-Side Link:](https://kmvenez.github.io/merchzoid-client/#/)

# Catalog of Routes
Verb         |	URI Pattern
------------ | -------------
POST | /sign-up
POST | /sign-in
PATCH | /change-password
DELETE | /sign-out
GET  |  /merch
GET | /merch/:id
POST | /add-merch
PATCH | /merch-update/:id
DELETE | /delete-merch/:id
