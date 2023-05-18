const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password_input');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


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
    console.log(data["data"])
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
  menu_btn1 = document.createElement("span");
  menu_btn1.innerHTML = "Mijn Account";
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

  var username_input = document.getElementById("username_input");
  username_input.value = gebruikersnaam;
  username_input.disabled = true;

  var password_input = document.getElementById("password_input");
  password_input.value = wachtwoord;
  password_input.disabled = true;

  btn = document.getElementById("btn");
  btn.addEventListener('click', function(){
    change_password1(gebruikersnaam);
  });

  terug_btn = document.getElementById("terug_btn");
  terug_btn.href = "index.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
}

function change_password1(gebruikersnaam) {
  var password_input = document.getElementById("titel");
  titel.innerHTML = "Wachtwoord Wijzigen"

  var password_input = document.getElementById("password_input");
  password_input.disabled = false;

  btn = document.getElementById("btn");
  btn.addEventListener('click', function(){
    change_password2(gebruikersnaam, password_input.value);
  });
}

function change_password2(gebruikersnaam, wachtwoord) {
  terug_btn = document.getElementById("terug_btn");
  terug_btn.disabled = true;

  fetch('https://script.google.com/macros/s/AKfycbwDUSBw62lkrhWQhyWUDzU_aESNdQ75HF17kB8raHlTDCTT9wDqXlAhxoMDEKLtF0dcfQ/exec?username='+gebruikersnaam+'&password='+wachtwoord)
  .then(response => {
  if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
    return response.json()
    document.write("error")
  })
  .then(data => {
    window.location.replace("mijn_account.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord)
  })
  .catch(error => console.log(error))
}
