Math Ladder:

This is a web based application built using MERN Stack which makes tedious learning process of mathematics fun and joy.
The application is user intuitive and helps the student to mark his performance and also the instructor to monitor the progress of the student. 
The instructor will be able to add and delete the users, autheticate the user and grade the assignments submitted by the user.


Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.


Prerequisites

The below software helps you to run the application smoothly.

1. Node.js
2. MongoDB - (Don't have to use this as we are using MongoDB Atlas which can be accessed online)
4. React 
4. Microsoft Visual Studio 


Installing

1. Clone the master branch in your local directory
2. Add the particular folder to the workspace - preferably in Visual Studio
3. Execute the below commands in the Visual studio terminal


Connection with the backend server
1. Execute the below commands in the visual studio terminal
2. Example : (cd C:\Project 515 Final\MathLadderProj\mern-math-ladder\backend)
3. npm init -y
4. npm install express cors mongoose dotenv
5. npm install -g nodemon
6. install -g nodemon
7. nodemon server


Command to launch the front end
1. Check the version of node installed in your system
		node -v
2. Change the directory to the main folder
		Example : ( C:\Project 515 Final\MathLadderProj\mern-math-ladder )
2. Run this command to launch the login screen
		npm start
		

Running the tests:

1. Sign in with this user name and password as the records with this particular user name are already present in the DB
			
			username : sakshi@asu.edu
			password : 12345

2. To test the Sign up and sign in together, sign up with a particular user name and enter invalid email address, you can see that the validation is in place
3. If you don't accept the terms and condition, the user is not allowed to login in again
4. Sign up with a particular user and password, try to sign in with a different password for the same user the login is blocked as the validation is in place
5. Sign up a user with a particular email id and again try to again add another user with the same email id, the application validates and doesn't allow the user to do that



6. To test the functionality of the drag and drop 
include this statement in the index.js file in the src 

import AppDragDropDemo from './AppDragDropDemo';
 
 The drag and drop functionality is not integrated with the application hence to run it from the same application include the above .

7. The drag and drop functionality and Student dashboard are implemented by different team members and couldn't be implemented this sprint. 