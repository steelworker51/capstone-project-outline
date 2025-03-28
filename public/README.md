# capstone-project-outline

the api key for unsplash will not be commit so you wil have to create an .env file with the unsplash key.
the api key for fireside will remain public and the ability to read and write has been taken away with security rules.   I will toggle these back on when a user is need to test
the functionality of my application.  I know there are other ways to get around this much the same way as i hid the unsplash api key but I will work on that later as a strech goal.

/*for servering the project in express 
note in terminal: 
npm install dotenv (then)
node server.js*/

repo for my capstone project in Code: You Kentucky:Code
Features that are being met:
1. Validate user input and either prevent the invalid input or inform the user about it: in my signup form if your not filling out the forms or you put an entry that is not an email address it will reject the entry.   In my meme generator form if you do not click to add an image or you do not fill out the form it will alert you to do so.
2. Create a function that accepts two or more input parameters and returns a value:  In my meme generator it takes an image of your choosing, a top text you input and a bottom text you input.   I draws the image on the canvas and populate the text at the top and the bottom.   I then creates a link that you can download the finished project and save it as a png file.   
3. Retrieve data from a third-party API and use it to display something within your app:  My quote page pulls a motivational quote from advice slip api, it also pulls a motivation image from unsplash not directly but by the server side via our server.js, to populate in a box below the motivational quote.   
4.  Create a node.js web server using a modern framework such as Express.js  the node.js server by way of express is set up by the function in our quotes.js to fetch the image.   The server.js interacts with the server in the unsplash.api and by way of the use of our dotenv and enviromental variables it effectively hides our api key.   
5.  Interact with a database to store and retrieve information (note the store in a database was completed it was uploaded to the firebase database as well as local storage, the retrieve information and utilize information is a stretch goal that I will complete as I can.   I would to retrieve the data from firebase and then be able to display it on the page.   So I will continue to work on this functionality.)
	
In this capstone project I'm doing 4 pages.

Page 1, will contain an index.html page that has a navigation bar at the top, which will allow you to come back to the home 
page or the navigation page.   It will allow you go the meme generator page, the mock sign-up page, and the motivational quote and image 
page.  There is also a script.js file and a styles.css file which will contain the styles to all of the a pages.

Page 2, will  contain a fitness-meme.html file which will allow you to take a file from your computer.   Write a caption over 
the photo and a caption under the photo.   It will allow you to generate the meme.  It will allow you to download the meme so that you 
can use it for yourself or share it with others to help motivate them. It will be styled by the styles.css file and it will contain its own javascript 
file meme.js.

Page 3, will contain a signup.html file which will allow you to fill a form out like you are signing up for your local fitness club.   The form will be able 
to be saved in local storage so that you can use that data when you need.  It will also be saved to the fireside data base app which will give you another
avenue to utlize this set of data.  It will be styled by the styles.css file and it will contain it's own javascript file signup.js.

Page 4, will contain a motivate.html file will will allow to click on the box and it will display a random inspiration quote from https://api.adviceslip.com/advice and 
it will contain a motivational image from the unsplash api.  It will be styled with the styles.css file and it will contain it's own javascript file quotes.js.