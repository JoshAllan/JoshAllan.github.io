window.onload = function () {
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

  var people = ([]);

  var numberOfPeople = 32/people.length;
  var split = splitArray(array, numberOfPeople);

  // printJosh();
  print(split, people);

};

function splitArray(teams, group_size) {
  var results = [];

  while (teams.length) {
    results.push(teams.splice(0, group_size));
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
      name.textContent = people[i];
    } else {
      name.textContent = "Charity";
    }
    document.querySelector(".main").appendChild(container);
  }
}

// in case i want to cheat
// function printJosh() {
//   var container = document.createElement("div");
//   container.classList.add("col-sm-6", "col-md-4");
//   var name = document.createElement("h2");
//   container.appendChild(name);
//   name.textContent = "Josh";
//   var team1 = document.createElement("p");
//   var team2 = document.createElement("p");
//   team1.textContent = "Portugal";
//   team2.textContent = "Germany";
//   container.appendChild(team1);
//   container.appendChild(team2);
//   document.querySelector(".main").appendChild(container);
// }
