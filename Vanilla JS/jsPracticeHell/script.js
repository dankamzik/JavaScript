//JS Script From Hell

const myHeading = document.getElementById('myHeading');
const headingContainer = document.getElementById('headingContainer');
const infoSection = document.getElementById('infoSection');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');


//welcome alert

alert("Welcome to my JS 4311 Page. This is a just for fun page where I experiment with a bunch of different features JS offers.")

//turn header red

myHeading.addEventListener('click', function() {
    myHeading.style.color = 'red';
 });

//change header background color

 console.log("headingContainer", headingContainer);
headingContainer.addEventListener('click', function() {
     headingContainer.style.color = 'red';
  });

//change paragraph color with input

console.log("myButton", myButton);
myButton.addEventListener('click', function() {
      infoSection.style.color = myTextInput.value;
   });

myButton.addEventListener('click', function() {
      myList.style.color = myTextInput.value;
      });

// set page as home page

if (document.all){
	  document.write('<A HREF="javascript:history.go(0);" onClick="this.style.behavior=\'url(#default#homepage)\';this.setHomePage(\'http://www.danielkamzik.com\');">');
	  document.write('<font size="5" color=6699FF face=arial><B>Click Here to Make My Web Page Your Homepage</B></font></a>');
	}

//animation example

function logoMove() {
  var elem = document.getElementById("img1");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
