const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint

var page = 1;

var allResults = [];
var isNext = true;
console.log("Next", isNext);
/*
while (isNext){
  console.log("In while");
  request.open('GET', 'https://swapi.co/api/vehicles/?page=' + page, true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.response);
      console.log(data);
      console.log(data.results);
  
      if (data.next){
        console.log("Next Exists");
        page += 1;
      } else {
        console.log("No next");
        isNext = false;
      }
    }
  }
}
*/

request.open('GET', 'https://swapi.co/api/vehicles/', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);
    console.log(data);
    console.log(data.results);
    resultNum = data.count;
    loopNum = Math.ceil(resultNum / 10);
    console.log(resultNum);
    console.log(loopNum);
    
    for (var i = 2; i < loopNum+1; i++){
      console.log("in for");
      console.log(i);
      console.log(data.next);
      var requestInner = new XMLHttpRequest();
      requestInner.open('GET', data.next, true);
      console.log("after req");
      requestInner.onload = function () {
        console.log("in onload");
        if (requestInner.status >= 200 && requestInner.status < 400) {
          data = JSON.parse(this.response);
          console.log(data);
          console.log(data.results);
        }
      }
    }
    

  }
}


/*
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  console.log(data);
  console.log(data.results);
  data.results.forEach(vehicles => {
    // Log each movie's title
    console.log(vehicles.name)
    console.log(vehicles.model)
    console.log(vehicles.manufacturer)
    console.log(vehicles.length)
    console.log(vehicles.cost_in_credits)
    console.log(vehicles.vehicle_class)
  
    // Create a div with a card class
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
  
    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement('h1')
    h1.textContent = vehicles.name
  
    // Create a p and set the text content to the film's description
    const pLength = document.createElement('p')
    pLength.textContent = `Length: ${vehicles.length}` 
    
    const pManufacturer = document.createElement('p')
    pManufacturer.textContent = `Manufacturer: ${vehicles.manufacturer}`

    const pModel = document.createElement('p')
    pModel.textContent = `Model: ${vehicles.model}`

    const pCost = document.createElement('p')
    pCost.textContent = `Cost in Republic Credits: ${vehicles.cost_in_credits}` 

    const pClass = document.createElement('p')
    pClass.textContent = `Vehicle Class: ${vehicles.vehicle_class}`

    // Append the cards to the container element
    container.appendChild(card)
  
    // Each card will contain an h1 and a p
    card.appendChild(h1)
    card.appendChild(pLength)
    card.appendChild(pModel)
    card.appendChild(pManufacturer)
    card.appendChild(pCost)
    card.appendChild(pClass)
    });
    } 
    else {
        console.log('error')
    }
}
*/
// Send request
request.send()
