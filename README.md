#Flatlanders Gem Store

https://evening-beyond-4708.herokuapp.com/

##Approach

###Basic Angular Site
I started with a basic Angular app that I created by following along with the Code Scool "Shaping Up with Angluar" course. The opbject of this assignment was to integrate the app with Rails and serve it on Heroku. I started off by creating a new Rails app in the root folder of my app. I created a simple file structure under my app/assets/javascripts folder to house most of my Angular code. Images and HTML files for my directives were stored in the public folder. I had to create a simple controller and view page for my Angular app to load on. After getting some help from Tyler, my site was up and running. Lastly, I needed to update my gemfile so I could deploy to Heroku.

###Rails API
Following the Soup to Bits tutorial from Code School and what Tyler taught us in class, I set up a basic Rails API. This involved creating a new folder for my controller, updating the routes, and namespacing the API. The controller is just basic CRUD that outputs JSON.

###Single-Page CRUD
Using the Angular controller that Tyler created in class, I made a controller for my products store. Most of it moved directly over. Most of my time was getting the views set up correctly. I added Bootstrap formatting and made sure the ng-show, ng-hide, and ng-click items were all working. There were also a couple problems that I had with rendering the correct JSON object in my views. The objects were getting saved to the database but weren't automatically lading in the page.

##Resources
https://www.codeschool.com/code_tv/soup-to-bits-shaping-up-with-angular-js

##Collaborators
Tyler Morgan