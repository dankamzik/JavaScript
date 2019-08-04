//The code below is where you pull the information for your cards from

const planets = [
  {
    id: '1',
    name: 'Mercury',
    diameter: '3,031.67 mi',
    moons: 'none',
    desc: 'Mercury is the closest planet to the Sun. Due to its proximity, it\'s not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis. Up until 1965 it was thought that the same side of Mercury constantly faced the Sun.',
    url: 'img/mercury.jpg' 
  },
  {
    id: '2',
    name: 'Venus',
    diameter: '7,521 mi',
    moons: 'none',
    desc: 'Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass.',
    url: 'img/venus.jpg' 
  },
  {
    id: '3',
    name: 'Earth',
    diameter: '7,917.5 mi',
    moons: '1',
    desc: 'Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.',
    url: 'img/earth.jpg' 
  },
  {
    id: '4',
    name: 'Mars',
    diameter: '4,212 mi',
    moons: '2',
    desc: 'The fourth planet from the Sun and the second smallest planet in the solar system. Mars is often described as the "Red Planet" due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
    url: 'img/mars.jpg'
  },
  {
    id: '5',
    name: 'Jupiter',
    diameter: '86,881.4 mi',
    moons: '79',
    desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
    url: 'img/jupiter.jpg' 
  },
  {
    id: '6',
    name: 'Saturn',
    diameter: '72,367.4 mi',
    moons: '62',
    desc: 'Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei.',
    url: 'img/saturn.jpg'
  },
  {
    id: '7',
    name: 'Uranus',
    diameter: '31,518 mi',
    moons: '27',
    desc: 'Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. Uranus became the first planet discovered with the use of a telescope.',
    url: 'img/uranus.jpg' 
  },
  {
    id: '8',
    name: 'Neptune',
    diameter: '30,599 mi',
    moons: '14',
    desc: 'Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position.',
    url: 'img/neptune.jpg' 
  },
];

// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

//You use the HTML template as a guide to creating your UI. In this case, we are creating a card template to display our info on. Basically you just copy over the HTML that you wrote as a guide and reformat it into React format.  

//<!-- EXAMPLE HTML TEMPLATE -->
//<!--  
//<div class="container"> 
//  <div class="card">
//    <div>
//      <img src="img/mercury.jpg" alt="Mercury">
//    </div>
//    <h2>Mercury</h2>
//    <p>Mercury is the closest planet to the Sun. Due to its proximity, it's not easily seen except during twilight...</p>
//    <h3>Planet Profile</h3>
//    <ul>
//      <li><strong>Diameter:</strong> 3,031.67 mi</li>
//      <li><strong>Moons:</strong> none</li>
//    </ul>
//  </div>




// 1: Create a 'Planet' component that renders a planet card
//The code blow is the reformatted HTML we began with. This code is where you create your cards, which contain ijnformation pulled from the JSON array. All you are doing is inserting the format {props.INFO-YOU-WANT-TO-DISPLAY-FROM-LIST} where your static HTML would otherwise go.

const Planet = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.url} alt={props.name}></img>
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <h3>Planet Profile</h3>
      <ul>
        <li><strong>Diameter:</strong>{props.diameter}</li>
        <li><strong>Moons:</strong>{props.moons}</li>
      </ul>
    </div>
  );
}


// 2: Create a container component that iterates over the planets array 
// and renders a 'Planet' component for each object in the array 
// The code below is how you duplicate the card you made above to display every object in the JSON info array. The name is relatively arbitrary, but should make sense. The synrax is mostly magic, and then you plug in your information-containing-object name where appropriate and then add in the information you want to display in React format, within a tag with the object list name as it's title(Planet(remember to capitolize the first letter)). The rest is just magic syntax.  

const PlanetList = (props) => {
  return (
    <div className="container">
      {props.planets.map( planet => 
        <Planet
          name={planet.name}
          key={planet.id}
          diameter={planet.diameter}
          desc={planet.desc}
          url={planet.url}
        />
        )}
    </div>
  );
}


// 3: Render the container component to the DOM
// Finally, the code below is how you tell the computer to display(render) the cards to the screen. Here's where we go plural, because you are trying to display all the objects in their nice new card forms. We set up the syntax as magic, and then plug in our repeating-card-display const name, which in this case is "PlanetList", then the plural of the information-containing JSON objects array, followed by the name of the same objects array. Then we have to specify where the app is going to display to, which is often named "root", as it is in thei scenario, though you could use almost any name to describe the base of your program.    

ReactDOM.render(
  <PlanetList planets={planets} />,
  document.getElementById('root')
);