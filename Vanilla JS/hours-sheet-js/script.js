
var rate = document.getElementById("rate").value;
var hours = document.getElementById("hours").value;
var total = rate * hours;
console.log("CHECK");
const input = document.querySelector('input');
const log = document.getElementById('values');
console.log("CHECKPOINT1");
input.addEventListener('input', updateValue);
console.log("CHECKPOINT2");

/*console.log(document.getElementById("rate").value);*/

function updateValue(e) {
var total = document.getElementById("rate").value * document.getElementById("hours").value;
console.log(total + "A");
}

subt.textContent = total;
console.log(total + "B");

/*

Reflection:

Initially, I thought this exercise was going to be esier than it turned out to be. Albeit I have been focusing on React for the past few months and havent done much with Vanilla JSm, I found it difficult to get started on this project. It was the visualization of what I needed to do that got me snagged. I had to remember a lot of syntax I havent used in a while as well. The console logs were paramount in helping me understand what was going wrong in the development process. I think I will keep them in for a while; until the project is finished at least.

Places I got stuck:

- figuring out how to get input values from my form nodes. 
Solution: document.getElementById("NODE ID").value;

- updating the values so that I could perform math automatically. solution: 
const input = document.querySelector('input');
const log = document.getElementById('values');
input.addEventListener('input', updateValue);

function updateValue(e){}

- updating a DOM node to accept a new value.
solution: I targeted the DOM node "subt" and used subt.textContent = total;

*/