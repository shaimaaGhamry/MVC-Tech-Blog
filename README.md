# MVC-Tech-Blog
A CMS-style blog site similar to a WordPress site, where developers can publish their blog posts and comment on other developers’ posts as well.
#

## Deployed URL:
https://shaimaa-teck-blog.herokuapp.com/

#
#

## Deployment on Heroku with MySQL
* Heroku login (In terminal)
* Heroku create (In Terminal)
* git push heroku main (In terminal)
* add jawsDB (Heroku repository)
* create the keys (In settings of heroku repository under config vars) <- These are the same as found in the .env file
* heroku run npm run seed (in terminal)

#
#

## Usability:
* WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted;
![screenshots](/screenshots/Screenshot%202023-02-28%20003951.png)

#
*WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

#
* WHEN I choose to sign up
THEN I am prompted to create a username and password

![screenshots](/screenshots/Screenshot%202023-02-28%20004312.png)

* WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

#
#
* WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

![screenshots](/screenshots/Screenshot%202023-02-28%20004515.png)


#
#
* WHEN I click on an existing blog post in the Homepage
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

![screenshots](/screenshots/Screenshot%202023-02-28%20004745.png)

#
#
* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
![screenshots](/screenshots/Screenshot%202023-02-28%20004945.png)

* WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

* WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

#
#
* WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

![screenshots](/screenshots/Screenshot%202023-02-28%20005156.png)

![screenshots](/screenshots/Screenshot%202023-02-28%20005513.png)

#
#
WHEN I click on the logout option in the navigation
THEN I am signed out of the site