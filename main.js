// Get params
const queryString = window.location.search;
console.log(queryString);

//window.ingelogd = false;

const urlParams = new URLSearchParams(queryString);
var wachtwoord = urlParams.get('wachtwoord')
var gebruikersnaam = urlParams.get('gebruikersnaam')
if (gebruikersnaam == null && wachtwoord != null) {
  window.location.replace("index.html");
}
if (gebruikersnaam != null && wachtwoord == null) {
  window.location.replace("index.html");
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
  if (gebruikersnaam != null && wachtwoord != null) {
    var loading = true;
    while (loading==true) {
      await delay(1);
      if (window.loading==false) {
        if (window.ingelogd == false) {
          //window.location.replace("index.html");
          load_page2();
        }
        if (window.ingelogd == true) {
          load_page3(gebruikersnaam, wachtwoord);
        }
        loading = false;
      }
    }
  }

  else {
    window.ingelogd = false;
    load_page2();
  }
}

function load_page2() {
  var v_btn = document.getElementById("vliegtuig-btn");
  v_btn.href = "vliegtuigreizen.html";
  var t_btn = document.getElementById("trein-btn");
  t_btn.href = "treinreizen.html";
  var b_btn = document.getElementById("bus-btn");
  b_btn.href = "busreizen.html";
  var d_btn = document.getElementById("deals-btn");
  d_btn.href = "deals.html";


  var menu = document.getElementById("menu");
  menu_btn1 = document.createElement("a");
  menu_btn1.href = "inloggen.html";
  menu_btn1.innerHTML = "Inloggen";
  menu.appendChild(menu_btn1)
  menu_btn2 = document.createElement("a");
  menu_btn2.href = "aanmelden.html";
  menu_btn2.innerHTML = "Aanmelden";
  menu.appendChild(menu_btn2)
}

function load_page3(gebruikersnaam, wachtwoord) {
  var v_btn = document.getElementById("vliegtuig-btn");
  v_btn.href = "vliegtuigreizen.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  var t_btn = document.getElementById("trein-btn");
  t_btn.href = "treinreizen.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  var b_btn = document.getElementById("bus-btn");
  b_btn.href = "busreizen.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  var d_btn = document.getElementById("deals-btn");
  d_btn.href = "deals.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;


  var menu = document.getElementById("menu");
  menu_btn1 = document.createElement("a");
  menu_btn1.href = "mijn_account.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  menu_btn1.innerHTML = "Mijn Account";
  menu_btn1.target = "_blank";
  menu.appendChild(menu_btn1)

  menu_btn2 = document.createElement("a");
  menu_btn2.href = "bestemmingslijsten.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  menu_btn2.target = "_blank";
  menu_btn2.innerHTML = "Favoriete bestemmingen";
  menu.appendChild(menu_btn2)

  menu_btn3 = document.createElement("a");
  menu_btn3.href = "index.html";
  menu_btn3.innerHTML = "Afmelden";
  menu.appendChild(menu_btn3)
}
