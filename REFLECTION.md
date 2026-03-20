Why is it beneficial to separate your routes, models, and database connection into different directories?
---------------------------------------------------------------------------------------------------------
Organization for the human mind. It makes the location of everything easily identifiable at a glance. 
This becomes more and more important the larger the code base. We are not computers, our brains move slowly so we need help.
This is basically a shortcut that takes advantage of our system of sight.
_________________________________________________________________________________________________________

What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
---------------------------------------------------------------------------------------------------------
Put means you are replacing the entire thing. Patch means you are only updating part of that thing.

_________________________________________________________________________________________________________

In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?
---------------------------------------------------------------------------------------------------------

You should send tan appropriate code such as 200. Sending back the deleted data is usually not needed. I suppose there might 
be some outlier circumstances but generally it is not needed. 

_________________________________________________________________________________________________________

