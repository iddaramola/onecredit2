A rating app
author: idowu daramola
location: lagos
address: idowu.daramola@gmail.com


Notes for developers that may want to extend this app:

This is a simple NodeJs application using SailsJs as the server and AngularJs for client-side manipulations.
The Sails server serve static files from the assets/ directory. No server-side copmilation of views is required.
You are invited to extend the app by creating dynamic views using EJS.
The two major files, apart from linked external files, that makeup the app can be found in assets/index.html and assets/js/onecredit.js.

Tests for application are written in Jasmine and can be found in assets/js/onecredit.js



Notes for users

The simply displays a list of books and rating scale for each book.
The books are displayed with the same default average rating of 20%.
However users are free rate each book.
Use and share alike