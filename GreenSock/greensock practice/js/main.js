console.log(TweenMax);
//The code below will bring our logo to the left 600px, over a 2 second interval
TweenMax.to(".logo", 2, {left:600});

//Lets add more features...

//The code below will add an additional 600px movement to the right over 6 additional seconds. The image will also rotate and shrink to be half it's size within this interval.
TweenMax.to(".logo", 6, {x:600, rotation:360, scale:.5, ease:Bounce.easeOut});

// A note on 'ease'...You will notice that the speed of an object slows down toward the very end of the animation cycle. This is done on purpose and is a "stock" feature of GreenSock. We have the 'ease' keyword to manipulate this feature. in the code "ease:Bounce.easeOut" we can set a rule to dictate the animation style. In the case above, the ease gives the image a bounce effect at the end of it's animation cycle.
//There are many 'ease' rules available! Go to GreenSock's documentation page and play around with the different easeIn and easeOut effects. You can micromanage these effects easily on that page, then copy the code and paste it directly into your own script. A very handy and powerful tool.

//Okay, so we have only seen the syntax "TweenMax.to" thus far. Basically this code means "Send my image TO this spot the manner in which I specify". There is other syntax that chnages this meaning.

//The "TweenMax.from" syntax allows us to set parameters FROM a specific point on our page. The code basically means "Send my image FROM a spot on the page of which I specify, and get it FROM this spot to another spot in the manner of which I specify."

//For example, this code: TweenMax.to(".logo", 2, {left:600}); means that your image will move 600px to the right(remember it's like adding padding to the image), over a 2 second interval.
// And this code: TweenMax.from(".logo", 2, {left:600}); means that your image will begin 600px to the right( rather than from the 0,0 coordinate plane) and over a 2 second interval, it will move to the 0,0 starting position.

//We can also animate multple targets with a single tween. All you have to do is name them all the same class, or specify in your code which class/ID names you want to target.
 
