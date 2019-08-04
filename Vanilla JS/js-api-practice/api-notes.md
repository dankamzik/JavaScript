<!--API NOTES-->

API: Application Programming Interface

To begin with, this: 
https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
is the link ot the article I followed that allowed me to perform this exercise. It is a great resource for project clarification.

What API's do: API's allow one software to "talk to"/exchange information between itself and another software. 

THIS PROJECT:

We'll be focusing specifically on Web APIs, which allow a web server to interact with third-party software. In this case, the web server is using HTTP requests to communicate to a publicly available URL endpoint containing JSON data.

OBJECTIVE:

We want to get the data for all Studio Ghibli films and display the titles and descriptions in a grid.

quick aside:
You will see the term 'REST' a lot when working with api's.
Representational State Transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services.

RETRIEVING DATA WITH AN HTTP REQUEST:

Before we try to put anything on the front end of the website, let's open a connection the API. We'll do so using XMLHttpRequest objects, which is a way to open files and make an HTTP request.

We'll create a request variable and assign a new XMLHttpRequest object to it. Then we'll open a new connection with the open() method - in the arguments we'll specify the type of request as GET as well as the URL of the API endpoint. The request completes and we can access the data inside the onload function. When we're done, we'll send the request.

The above is done in the "script.js" file.

WORKING WITH THE JSON RESPONSE:

Now we've received a response from our HTTP request, and we can work with it. However, the response is in JSON, and we need to convert that JSON in to JavaScript objects in order to work with it.

We're going to use JSON.parse() to parse the response, and create a data variable that contains all the JSON as an array of JavaScript objects. Using forEach(), we'll console log out the title of each film to ensure it's working properly.


NEXT STEPS: 

We've successfully used a GET HTTP request to retrieve (or consume) the API endpoint, which consisted of data in JSON format. However, we're still stuck in the console - we want to display this data on the front end of the website, which we'll do by modifying the DOM.

DISPLAYING THE DATA:

In order to display information on the front end of a site, we'll be working with the DOM, which is actually an API itself that allows JavaScript to communicate with HTML.

By the end, our page will consist of a logo image followed by a container with multiple card elements - one for each film. Each card will have a heading and a paragraph, that contains the title and description of each film.

