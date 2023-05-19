// Get params
const queryString = window.location.search;
console.log(queryString);

//window.ingelogd = false;

const urlParams = new URLSearchParams(queryString);
var wachtwoord = urlParams.get('wachtwoord')
var gebruikersnaam = urlParams.get('gebruikersnaam')
if (gebruikersnaam == null && wachtwoord != null) {
  alert("Je bent niet ingelogd.")
  window.location.replace("inloggen.html");
}
if (gebruikersnaam != null && wachtwoord == null) {
  alert("Je bent niet ingelogd.")
  window.location.replace("inloggen.html");
}
if (gebruikersnaam == null && wachtwoord == null) {
  alert("Je bent niet ingelogd.")
  window.location.replace("inloggen.html");
}

if (gebruikersnaam != null && wachtwoord != null) {
  check_login(gebruikersnaam, wachtwoord);
  window.loading = true;
}

load_page(gebruikersnaam, wachtwoord);

// delay time
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Get users
function check_login(gebruikersnaam, wachtwoord) {
  fetch('https://script.google.com/macros/s/AKfycbwIkgx6u3Koyhgeu6xT5UapGck_-oO7efl0_22jKbKY50aoNq8eAGVqa2IOu5XVO5RBGg/exec')
  .then(response => {
  if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
    return response.json()
    document.write("error")
  })
  .then(data => {
    //console.log(data["data"])
    window.users = data;

    window.ingelogd = false;

    for (element in window.users["data"]) {
      if (element==gebruikersnaam) {
        if (window.users["data"][element]["wachtwoord"]==wachtwoord) {
          window.ingelogd = true;
          //console.log(window.ingelogd);
        }
      }
    }
    window.loading = false;

  })
  .catch(error => console.log(error))
}


async function load_page(gebruikersnaam, wachtwoord) {
  var loading = true;
  get_airports();
  while (loading==true) {
    await delay(1);
    if (window.loading==false) {
      if (window.ingelogd == false) {
        alert("Je bent niet ingelogd.")
        window.location.replace("inloggen.html");
      }
      if (window.ingelogd == true) {
        load_page3(gebruikersnaam, wachtwoord);
      }
      loading = false;
    }
  }
}

function load_page3(gebruikersnaam, wachtwoord) {
  var menu = document.getElementById("menu");
  menu_btn1 = document.createElement("a");
  menu_btn1.href = "mijn_account.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  menu_btn1.innerHTML = "Mijn Account";
  menu.appendChild(menu_btn1);

  menu_btn2 = document.createElement("span");
  menu_btn2.target = "_blank";
  menu_btn2.innerHTML = "Favoriete bestemmingen";
  menu.appendChild(menu_btn2);

  menu_btn3 = document.createElement("a");
  menu_btn3.href = "index.html";
  menu_btn3.innerHTML = "Afmelden";
  menu.appendChild(menu_btn3);

  terug_btn = document.getElementById("terug_btn");
  terug_btn.href = "index.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;

  var list_div = document.getElementById("list_div");

  bestemmingslijst = string_to_list(window.users["data"][gebruikersnaam]["bestemmingslijst"]);
  console.log(bestemmingslijst);

  if (bestemmingslijst.length == 0) {
    items_text = document.createElement("p");
    items_text.innerHTML = "Je hebt nog geen favoriete bestemmingen.";
    items_text.id = "items_text";
    list_div.appendChild(items_text);

    witregel = document.createElement("br");
    list_div.appendChild(witregel);
    witregel = document.createElement("br");
    list_div.appendChild(witregel);

    add_dest_btn = document.createElement("a");
    //add_dest_btn.href = "#";
    add_dest_btn.id = "add_dest_btn";
    add_dest_btn.classList.toggle("add_btn");
    add_dest_btn.innerHTML = "Bestemming toevoegen";
    list_div.appendChild(add_dest_btn);

    add_dest_btn.addEventListener('click', function(){
      add_dest1(gebruikersnaam, wachtwoord);
    });
  }
  else {
    for (element in bestemmingslijst) {
      var input = document.createElement("input");
      input.value = bestemmingslijst[element];
      input.type = "text";
      input.disabled = true;
      input.classList.toggle("plaats_input");
      list_div.appendChild(input);

      delete_btn = document.createElement("a");
      delete_btn.classList.toggle("delete_btn");
      delete_btn.style ="margin-left: 20px;"
      delete_btn.value = +element;
      delete_btn.innerHTML = ".";
      list_div.appendChild(delete_btn);

      delete_btn.addEventListener('click', function(){
        save_dest(gebruikersnaam, wachtwoord, this.value, "verwijderen");
      });

      witregel = document.createElement("br");
      list_div.appendChild(witregel);
      witregel = document.createElement("br");
      list_div.appendChild(witregel);
    }

    witregel = document.createElement("br");
    list_div.appendChild(witregel);

    add_dest_btn = document.createElement("a");
    //add_dest_btn.href = "#";
    add_dest_btn.id = "add_dest_btn";
    add_dest_btn.classList.toggle("add_btn");
    add_dest_btn.innerHTML = "Bestemming toevoegen";
    list_div.appendChild(add_dest_btn);

    add_dest_btn.addEventListener('click', function(){
      add_dest1(gebruikersnaam, wachtwoord);
    });
  }
}

function string_to_list(str) {
  if (str == "") {
   var list = []
  }
  else {
    var list = str.split(",")
  }

  return list;
}

// Get Airports by IATA codes
function get_airports() {
  var headers2 = {"apikey": "sQn-e3Rt2AEpL1z1XmSNL2oEPYf2mJO2"}
  fetch('https://tequila-api.kiwi.com/locations/dump?locale=nl-NL&location_types=airport&sort=name&limit=4000', {headers: headers2})
  .then(response => {
  if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
    return response.json()
    document.write("error")
  })
  .then(data => {
    console.log(data)
    window.airports_data_dict = {}

    for (i = 0; i < data["locations"].length; i++) {
      var airport = data["locations"][i]

      window.airports_data_dict[airport["id"]] = {
          "name": airport["name"],
          "city": airport["city"]["name"],
          "continent": airport["city"]["continent"]["name"],
          "country": airport["city"]["country"]["name"]}
    }

    console.log(window.airports_data_dict);

  })
  .catch(error => console.log(error))
}
//Select option
function select_option(option) {
  var input = document.getElementById("input1");
  input.value = option;
}

// add input options
function add_input_options() {
  //console.log("add");
  var div = document.getElementById("options-div");
  div.replaceChildren();
  var input = document.getElementById("input1");

  var element_count = 0;
  for (var element in window.airports_data_dict) {
    var value = input.value.toLowerCase();
    var element_lower = element.toLowerCase();
    var airport = window.airports_data_dict[element];
    if (element_lower.includes(value) || airport["city"].toLowerCase().includes(value) || airport["country"].toLowerCase().includes(value) || airport["name"].toLowerCase().includes(value)) {
      element_count++;
    }
  }


  if (element_count > 3) {
    div.style="height:200px"
  }
  else {
    if (element_count == 0) {
      div.style="visibility:hidden"
    }
    else {
      var height = 70 * element_count;
      div.style="height:"+height+"px"
    }
  }

  var list = document.createElement("ul");
  div.appendChild(list)


  for (var element in window.airports_data_dict) {
    var value = input.value.toLowerCase();
    var element_lower = element.toLowerCase();
    var airport = window.airports_data_dict[element];

    if (element_lower.includes(value) || airport["city"].toLowerCase().includes(value) || airport["country"].toLowerCase().includes(value) || airport["name"].toLowerCase().includes(value)) {
      var list_item = document.createElement("li");
      list.appendChild(list_item);

      var a = document.createElement("a");
      a.classList.toggle('list-item');

      var p1 = document.createElement("p");
      p1.innerHTML = element + ", " + window.airports_data_dict[element]["city"];
      a.appendChild(p1);
      var p2 = document.createElement("p");
      p2.innerHTML = window.airports_data_dict[element]["country"];
      a.appendChild(p2);
      var p3 = document.createElement("p");
      p3.innerHTML = window.airports_data_dict[element]["name"];
      a.appendChild(p3);

      a.addEventListener('click', function(){
        select_option(this.firstChild.innerHTML.split(",")[0]);
      });
      list_item.appendChild(a);

      var hr = document.createElement("hr");
      list.appendChild(hr);

    }
  }
}

// show input options
function show_input_options() {
  //console.log("focus");
  var plaats_div = document.getElementById("plaats_div")
  div = document.createElement("div");
  div.classList.toggle('options-div');
  div.id = "options-div";
  plaats_div.appendChild(div);

  add_input_options();
}

// hide input options
async function hide_input_options() {
  //console.log("unfocus");
  await delay(100);
  var div = document.getElementById("options-div")
  div.remove();
}

function add_dest1(gebruikersnaam, wachtwoord) {
  var list_div = document.getElementById("list_div");
  var add_dest_btn = document.getElementById("add_dest_btn");
  var items_text = document.getElementById("items_text");

  list_div.replaceChildren();

  var h1 = document.createElement("h1");
  h1.classList.toggle("titel");
  h1.innerHTML = "Maak een lijst van je favoriete bestemmingen!";
  list_div.appendChild(h1);



  var plaats_div = document.createElement("div");
  plaats_div.id = "plaats_div";
  list_div.appendChild(plaats_div)

  var input = document.createElement("input");
  input.placeholder = "Bestemming";
  input.id = "input1";
  input.type = "text";
  input.classList.toggle("plaats_input");
  input.onfocus = show_input_options;
  input.onblur = hide_input_options;
  input.oninput = add_input_options;
  plaats_div.appendChild(input);

  witregel = document.createElement("br");
  list_div.appendChild(witregel);

  save_btn = document.createElement("a");
  save_btn.classList.toggle("save_btn");
  save_btn.innerHTML = "Oplsaan";
  list_div.appendChild(save_btn);

  save_btn.addEventListener('click', function(){
    save_dest(gebruikersnaam, wachtwoord, input.value, "toevoegen");
  });

  delete_btn = document.createElement("a");
  delete_btn.classList.toggle("delete_btn");
  delete_btn.href = "bestemmingslijsten.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  delete_btn.style ="margin-left: 20px;"
  delete_btn.innerHTML = ".";
  list_div.appendChild(delete_btn);
}


// Save dest1
function save_dest(gebruikersnaam, wachtwoord, bestemming, functie) {
  console.log(bestemming);
  bestemmingslijst = string_to_list(window.users["data"]["Claesenma"]["bestemmingslijst"]);

  if (functie == "verwijderen") {
    bestemmingslijst.splice(bestemming,1);
  }

  if (functie == "toevoegen") {
    var error = false;
    for (element in bestemmingslijst) {
      console.log(bestemmingslijst[element])
      if (bestemming == bestemmingslijst[element]) {
        error = true;
        var error_message = "Die bestemming is al een van je favoriete bestemmingen!"
      }
    }
  }

  if (functie == "toevoegen") {
    bestemmingslijst.push(bestemming);
  }
  bestemming2 = bestemmingslijst.toString();


  if (error == true) {
    alert(error_message)
  }

  else {
    fetch("https://script.google.com/macros/s/AKfycbxXAv6_pC8o91fX4cpJSBljCldScTZI_Y3kCAb-XnQzYa27fe2LcI-kRl4a7ANLkq8H/exec?username="+gebruikersnaam+'&bestemming='+bestemming2)
    .then(response => {
      if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
      return response.json()
      document.write("error")
    })
    .then(data => {
      //console.log(data["data"])
      window.users = data;
      window.location.replace("bestemmingslijsten.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord);


    })
    .catch(error => console.log(error))
  }
}
