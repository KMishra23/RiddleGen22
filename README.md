1. Delete node_modules folder in the main directory and inside ./backend
2. Run "npm install" in the main directory and inside ./backend
3. Run "npm start" in the main directory
4. Run "nodemon server" inside ./backend


MAKE SURE YOU HAVE NPM INSTALLED BEFORE THIS


Synopsis(Please go through once)

Currently the eductor dashboard displays all the riddles. Modifying them is currently not possible and selecting a few and hitting Launch Learner Dashboard always launches with the Ant concept riddle. 

Click Zoology there as the other 2 have no working riddles for now.

Hints are also currently not fucntional and clicking them simply gives some placeholder text. Submitting the answer tells whether if it was right or wrong on the console.
Click Move to Captcha to move to the last page.

It currently has 9 captchas that are not randomized. Select your options and click on Submit Answers twice(bug) to see your selected choices and whether if they are correct.


Things left to add:
1. Proper answer submission on /learner2 page
2. Proper answer submission on /learner3 page
3. Score system for /learner3 page
4. Hints for /learner2 page(this is an issue right now as the hints are all given in one cell of the table and there can be 0-3 hints)
5. Make Riddles modifiable
6. Make it so that all captchas are randomized
7. Make Launch Learner Dashboard functional

Additional information:
1. The frontend part has few .component.js files for each web page. The other .js files are for components that have been used in the components. There might be some redundant code in these.
2. The backend part uses a server that any IP address can access on MongoDB. Suggest to change this and add your own data before using as this might not be functional at times.
3. Please populate the backend database before using it. The site will break otherwise.
4. Launching the website from the educator dashboard is the only way it works right now. Directly accessing learner dashboard will result in no data being sent to these components and they wont render.
