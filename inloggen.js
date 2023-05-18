const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password_input');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

btn = document.getElementById("btn");
btn.addEventListener('click', function(){
  inloggen();
});

// Get Airports by IATA codes
function get_users() {
  fetch('https://script.google.com/macros/s/AKfycbwIkgx6u3Koyhgeu6xT5UapGck_-oO7efl0_22jKbKY50aoNq8eAGVqa2IOu5XVO5RBGg/exec')
  .then(response => {
  if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
    return response.json()
    document.write("error")
  })
  .then(data => {
    //console.log(data["data"])
    window.users = data;
    //console.log(data);

  })
  .catch(error => console.log(error))
}

get_users();


function inloggen() {
  gebruikersnaam = document.getElementById("username_input").value;
  //console.log(gebruikersnaam);
  wachtwoord = document.getElementById("password_input").value;
  //console.log(wachtwoord);

  var error = false;
  var error_message = "";

  if (wachtwoord == "" || wachtwoord == undefined || wachtwoord == null) {
    error = true;
    error_message = "Je hebt geen wachtwoord ingegeven.";
  }
  else {
    if (wachtwoord.length < 8) {
      error = true;
      error_message = "Je wachtwoord moet uit minstens 8 tekens bestaan!";
    }

    if (wachtwoord.includes(" ") == true || wachtwoord.includes("&") == true || wachtwoord.includes("=") == true || wachtwoord.includes("%") == true || wachtwoord.includes("+") == true || wachtwoord.includes("-") == true) {
      error = true;
      error_message = "Er mogen geen spaties, %-tekens, &-tekens of =-tekens in je wachtwoord staan!";
    }
  }

  if (gebruikersnaam == "" || gebruikersnaam == undefined || gebruikersnaam == null) {
    error = true;
    error_message = "Je hebt geen gebruikersnaam ingegeven.";
  }
  if (gebruikersnaam.includes(" ") == true || gebruikersnaam.includes("&") == true || gebruikersnaam.includes("=") == true || gebruikersnaam.includes("%") == true || gebruikersnaam.includes("+") == true || gebruikersnaam.includes("-") == true) {
    error = true;
    error_message = "Er mogen geen spaties, +-tekens, --tekens, %-tekens, &-tekens of =-tekens in je gebruikersnaam staan!";
  }

  if (error == true) {
    alert(error_message);
  }
  else {
    inloggen2(gebruikersnaam, wachtwoord);
  }
}

function inloggen2(gebruikersnaam, wachtwoord) {
  var juist = false;
  for (element in window.users["data"]) {
    if (element==gebruikersnaam) {
      if (window.users["data"][element]["wachtwoord"]==wachtwoord) {
        //console.log("oke")
        juist = true;
        window.location.replace("index.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord);
      }
    }
  }

  if (juist==false) {
    alert("Je wachtwoord of gebruikersnaam is onjuist.");
  }
}
