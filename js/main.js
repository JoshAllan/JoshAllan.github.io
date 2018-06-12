window.onload = function () {
  // List of teams in the world cup
  var array = shuffleArray([
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


  // List of people involved as well as the number teams
  // that they want
  // Must be JSON object
  var people = [{
    "name": "",
    "teams": 1
  }];

  var split = splitArray(array, people);

  // printJosh();
  print(split, people);


};

// This function shuffles the array of teams
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

// This function splits the array in chunks
// according to how many teams are assigned
// to a person
function splitArray(teams, people) {
  var results = [];
    for (var i = 0; i < people.length; i++) {
      if (people[i] != undefined){
        results.push(teams.splice(0, people[i].teams));
      } else {
        results.push(teams.splice(0, 1));
      }
  }
  return results;
}

// This function prints out the selections and names
// of the people involved
// It creates a h2 for the name of the person as well as
// creating a p for each of the teams assigned
function print (split, people) {
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
      name.textContent = people[i].name;
    } else {
      name.textContent = "Charity";
    }

    document.querySelector(".main").appendChild(container)

  }
}

// in case i want to cheat
// remove my name from the list as well as the teams that i want
// ie Portugal and Germany
function printJosh() {
  var container = document.createElement("div");
  container.classList.add("col-sm-6", "col-md-4");
  var name = document.createElement("h2");
  container.appendChild(name);
  name.textContent = "Josh";
  var team1 = document.createElement("p");
  var team2 = document.createElement("p");
  team1.textContent = "Portugal";
  team2.textContent = "Germany";
  container.appendChild(team1);
  container.appendChild(team2);
  document.querySelector(".main").appendChild(container);
}