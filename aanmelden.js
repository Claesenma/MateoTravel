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

// Get users
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
  for (element in window.users["data"]) {
    if (element==gebruikersnaam) {
      error = true;
      error_message = "Die gebruikersnaam is al gebruikt.";
    }
  }

  if (error == true) {
    alert(error_message);
  }
  else {
    inloggen2(gebruikersnaam, wachtwoord);
  }
}

function inloggen2(gebruikersnaam, wachtwoord) {
  var url = "https://script.google.com/macros/s/AKfycbwjrNdKYeyQYGG79CoqvSwIb4mwCB_rt4dlm8zjX_NN6jMCFcnjRCpc7u9jQFWQQG0uPQ/exec?username="+gebruikersnaam+"&password="+wachtwoord;
  //https://script.google.com/macros/s/AKfycbwjrNdKYeyQYGG79CoqvSwIb4mwCB_rt4dlm8zjX_NN6jMCFcnjRCpc7u9jQFWQQG0uPQ/exec
  fetch(url)
    .then(response => {
  // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.data)
      console.log(url)
      window.location.replace("index.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord);

    })
  .catch(error => console.log(error))
}
