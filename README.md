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
8. You might have to install a library bcrypt_lib for which you might have to run this command "npm install bcrypt"
9. Inorder to evaluate the mathematical expression you have to install the Math.js library for which you may have to run the command
		"npm install mathjs"
		"npm install @types/mathjs"


Command to launch the front end
1. Check the version of node installed in your system
		node -v
2. Change the directory to the main folder
		Example : ( C:\Project 515 Final\MathLadderProj\mern-math-ladder )
2. Run this command to launch the login screen
		npm start
		

Running the tests:

1. Our application has 2 roles
	Role 1: Instructor 
	Role 2: Student
	
2. Role 1: Instructor has the following functionality
	1. He can login with his credentials and create assignments
	2. View the assignments he has created
	3. He can also see the number of students who have answered that particular option 
	4. He will also be able to grade the assignments.

3. Role 2: Student
	1. He will be able to with credentials and view the assignments created by the instrcutor
	2. Open any particular assignment and solve the assignments with the help of a math-ladder
	3. He can take the help of a calculator which helps in drag and drop the numbers and see the results
	4. He can submit the assignment only once upon submitting twice it prompts him a message saying that he has already answered.
	
	
4. Login in as a Instructor with the below credentials
		
			email id: smjain@asu.edu
			password: 12345
		
		1. After logging in, you will be directed to a page to create assignments and view the created assignments
		2. Click on create assignments and you will be able to create assignments and add questions and options
		3. Click on View assignments, you will be able to view the assignments which are created.
		4. On click of any assignment which are answered he can see how many students have answered this particular question.
		
5. Login as a student with the below credentials:

		email id: student01@gmail.com
		password: 12345
		
		
		1. After logging in you will be directed to a landing page where you can see the number of assignments created for a particular user
		2. Click on a particular user and you will be able to see the assignment and open the particular assignment and answer it using the "Test it yourself" options
		3. Once you click on any of the answer and click on submit you can see that the question is answered.