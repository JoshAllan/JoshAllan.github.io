var x = 0;
var people = Array();
var teams = shuffleArray([
    "argentina",
    "australia",
    "belgium",
    "brazil",
    "columbia",
    "costa rica",
    "croatia",
    "denmark",
    "egypt",
    "england",
    "france",
    "germany",
    "iceland",
    "ir iran",
    "japan",
    "korea republic",
    "mexico",
    "morocco",
    "nigeria",
    "panama",
    "peru",
    "poland",
    "portugal",
    "russia",
    "saudi arabia",
    "senegal",
    "serbia",
    "spain",
    "sweden",
    "switzerland",
    "tunisia",
    "uruguay"]); 

function addName() {
 people[x] = document.getElementById("name").value;
 console.log("Element: " + people[x] + " Added at index " + x);
 x++;
 document.getElementById("name").value = "";
}

function print(teams, people) {
    var split = splitArray(teams, people);
    for (var i = 0; i < split.length; i++) {
    var container = document.createElement("div");
    container.classList.add("col-sm-6", "col-md-4");
    var name = document.createElement("h2");
    container.appendChild(name);
    for (var j = 0; j <split[i].length; j++) {
      var teams = document.createElement("p");
      teams.textContent = split[i][j];
      container.appendChild(teams);
    }
    if (people[i] != undefined) {
      name.textContent = people[i];
    } else {
      name.textContent = "Charity";
    }

    document.querySelector(".main").appendChild(container)

  }
    
}

function splitArray(teams, people) {
    var chunks = 32/people.length;
    var results = [];
    for (var i = 0; i < people.length; i++) {
    results.push(teams.splice(0, chunks));
  }
  return results;
}

function shuffleArray(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}