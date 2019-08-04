const col = document.getElementById('col');

//welcome alert

alert("Welcome to my Self Discovery Project. This is a simple program that runs off of HTML, CSS and JavaScript. Please take a moment to properly understand the aim of this application. You will be presented with sets of three images; all you need to do is select a single image from the three and the next set will load. This application is designed to help one introspect. While you are selecting each image, think about why you are selecting it.'Why' is the most important question to ask yourself here. Why did you select that image? Did you like the color? The subject? An ideal? Does it reflect you as a person or the way you are feeling at the moment?")

//click to change image set
console.log("hello");
/*
function swapPic() {
document.getElementById("col").classList.add("set1");
}
*/
var wrapperNode = document.querySelector("#main-container");
function imageSwapper(oldClass, newClass) {
    console.log("in imageSwapper");
    wrapperNode.classList.remove(oldClass);
    wrapperNode.classList.add(newClass);
}
var resultsArray = [];
console.log(wrapperNode);
window.addEventListener("click", function(event) {
    console.log("window listener");
    console.log("event");
    console.log(event);
    console.log("event.toElement");
    console.log(event.toElement);
    console.log("event.originalTarget");
    console.log(event.originalTarget);
    console.log("event.originalTarget.className");
    console.log(event.originalTarget.className);
    console.log("event.originalTarget.classList");
    console.log(event.originalTarget.classList);
    console.log("event.originalTarget.classList[0]");
    console.log(event.originalTarget.classList[0]);
    resultsArray.push(event.originalTarget.classList[0]);
    console.log(resultsArray);
    if (wrapperNode.classList.contains("set-1")) {
        console.log("set-1 if");
        imageSwapper("set-1", "set-2");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-2")) {
        console.log("set-2 if");
        imageSwapper("set-2", "set-3");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-3")) {
        console.log("set-3 if");
        imageSwapper("set-3", "set-4");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-4")) {
        console.log("set-4 if");
        imageSwapper("set-4", "set-5");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-5")) {
        console.log("set-5 if");
        imageSwapper("set-5", "set-6");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-6")) {
        console.log("set-6 if");
        imageSwapper("set-6", "set-7");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-7")) {
        console.log("set-7 if");
        imageSwapper("set-7", "set-8");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-8")) {
        console.log("set-8 if");
        imageSwapper("set-8", "set-9");
        //wrapperNode.removeEventListener("click", event);
    } else if (wrapperNode.classList.contains("set-9")) {
        console.log("set-9 if");
        imageSwapper("set-9", "set-10");
        //wrapperNode.removeEventListener("click", event);
    }; 
});

wrapperNode.removeEventListener("click", event);


//document.print(resultsArray);

function displayClickedImages() {
    for (i=0; i<resultsArray.length; i++) {
        print(i);
    //document.write("<li><img src='" + resultsArray[i] + "' width='160' height='120'/><span>" + resultsArray[i] + "</span></li>");
    }
    }

displayClickedImages();



  /*  function displayClickedImages() {
        for (i=0; i<wrapperNode.classList.length; i++) {
        document.write("<li><img src='" + wrapperNode.classList[i] + "' width='160' height='120'/><span>" + wrapperNode.classList[i] + "</span></li>");
        }
        }
*/ //does nothing 


/*ALL COMMENTED CODE ABOVE THIS BREAK TRIES TO DISPLAY CLICKED IMAGES*/

/*
console.log(wrapperNode);
wrapperNode.addEventListener("click", function() {
    console.log("wrapperNode Clicked");
    imageSwapper("set-2", "set-3");
});
console.log(wrapperNode);
wrapperNode.addEventListener("click", function() {
    console.log("wrapperNode Clicked");
    imageSwapper("set-3", "set-4");
});
console.log(wrapperNode);
wrapperNode.addEventListener("click", function() {
    console.log("wrapperNode Clicked");
    imageSwapper("set-4", "set-5");
});
*/
/*
var hiderClass = query("#" + targetId + " .trk-expandable-card .mdl-menu.mdl-menu--bottom-left");

// next, confirm that the node exists before running the next chunk of code
if (hiderClass) { 
    // if you're doing a querySelectorAll(), use a for loop to get everything
    // this iterates through each element found and lets you change all of them.
    for (var i = 0; i < hiderClass.length; i++) {
        //debug console logs, do not underestimate! Helps make sure you're targetting the right things.
        console.log(hiderClass[i]);
        console.log(node.parentNode.parentNode.parentNode.classList);
        console.log(hiderClass[i].classList);
        // checks if a parent node contains a class that toggles (on/off)
        if (node.parentNode.parentNode.parentNode.classList.contains("trk-expandable--open")) {
            // if class exists, run this stuff.
            hiderClass[i].classList.remove('mdl-menu--bottom-left');
            hiderClass[i].classList.add('mdl-menu--bottom-right');
            // just a utility class... add if you want to switch something back to original state
            hiderClass[i].classList.add('mdl-menu--was-bottom-left');
        } else if (hiderClass[i].classList.contains("mdl-menu--was-bottom-left")) {
            // make sure this is a node that previously had the bottom-left class... less collateral damage
            hiderClass[i].classList.add('mdl-menu--bottom-left');
            hiderClass[i].classList.remove('mdl-menu--bottom-right');
            hiderClass[i].classList.remove('mdl-menu--was-bottom-left');
        }
    }
}
*/