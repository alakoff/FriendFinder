## Friend Finder

---
### Overview
---

This full-stack application will take in results from a user survey, then compare the answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Node Server is used for the backend and Express is used to handle routing. 

There are two front end HTML pages; the Home page and the survey page. We will walk through each page.

There is one API route to get a JSON listing of all friends that have been added.

---
### Home Page
---

This is the landing page for the application with a  `Start Survey`  button.
You may click on the button to begin the process of answering the survey questions, and being added into
friends data, for a possible match.

In the footer section of the Home Page, there are two links. The `API Friends List` link will display a
JSON listing of the current users.

The `Github Repo` link will take you to my Github repository for the application.

![Friend Finder - Home Page](./app/public/images/home.PNG)


---
###  Survey Page
---

The Survey page has two main sections; the `About You` secction and the `Survey` section.

![Friend Finder - Survey Page](./app/public/images/survey1.PNG)


You must enter your name and a valid link to a photo of yourself.
You must also answer all ten of the survey questions.

After entering all information, click on the submit button to submit your answers and be matched
with a new friend.

![Friend Finder - Survey Page](./app/public/images/survey2.PNG)


Your match friend will be displayed as a modal message, like the following


![Friend Finder - Match](./app/public/images/match.PNG)


---
### Application Hosting on Heroku
---

Heroku has been used for the backend hosting for the application.

https://dry-fortress-35210.herokuapp.com/





