Math Ladder:

This is a web based application built using MERN Stack which makes tedious learning process of mathematics fun and joy. The application is user intuitive and helps the student to mark his performance and also the instructor to monitor the progress of the student. The instructor will be able to add and delete the users, autheticate the user and grade the assignments submitted by the user.

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites

The below software helps you to run the application smoothly.

Node.js
MongoDB - (Don't have to use this as we are using MongoDB Atlas which can be accessed online)
React
Microsoft Visual Studio
Installing

Clone the master branch in your local directory
Add the particular folder to the workspace - preferably in Visual Studio
Execute the below commands in the Visual studio terminal
Connection with the backend server

Execute the below commands in the visual studio terminal
Example : (cd C:\Project 515 Final\MathLadderProj\mern-math-ladder\backend)
npm init -y
npm install express cors mongoose dotenv
npm install -g nodemon
install -g nodemon
nodemon server
You might have to install a library bcrypt_lib for which you might have to run this command "npm install bcrypt"
Inorder to evaluate the mathematical expression you have to install the Math.js library for which you may have to run the command "npm install mathjs" "npm install @types/mathjs"
Command to launch the front end

Check the version of node installed in your system node -v
Change the directory to the main folder Example : ( C:\Project 515 Final\MathLadderProj\mern-math-ladder )
Run this command to launch the login screen npm start
Running the tests:

Our application has 2 roles Role 1: Instructor Role 2: Student

Role 1: Instructor has the following functionality

He can login with his credentials and create assignments
View the assignments he has created
He can also see the number of students who have answered that particular option
He will also be able to grade the assignments.
Role 2: Student

He will be able to with credentials and view the assignments created by the instrcutor
Open any particular assignment and solve the assignments with the help of a math-ladder
He can take the help of a calculator which helps in drag and drop the numbers and see the results
He can submit the assignment only once upon submitting twice it prompts him a message saying that he has already answered.
Login in as a Instructor with the below credentials

 	email id: smjain@asu.edu
 	password: 12345
 
 1. After logging in, you will be directed to a page to create assignments and view the created assignments
 2. Click on create assignments and you will be able to create assignments and add questions and options
 3. Click on View assignments, you will be able to view the assignments which are created.
 4. On click of any assignment which are answered he can see how many students have answered this particular question.
 
Login as a student with the below credentials:

 email id: student01@gmail.com
 password: 12345
 
 
 1. After logging in you will be directed to a landing page where you can see the number of assignments created for a particular user
 2. Click on a particular user and you will be able to see the assignment and open the particular assignment and answer it using the "Test it yourself" options
 3. Once you click on any of the answer and click on submit you can see that the question is answered.
