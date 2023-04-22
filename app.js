async function getuser() {
  //POBIERANIE WARTOSCI Z INPUTA
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  //FETCH
  const data = await fetch(`http://localhost:3000/login/${user}/${pass}`);
  const json = await data.json();
  console.log(json);

  //LOCALSTORAGE (SPRAWDZA DOSTĘP DO UPRAWNIEŃ)
  if (json[0] != undefined) {
    localStorage.setItem("upr", JSON.stringify(json[0]));
  } else {
    localSt;
    localStorage.setItem("upr", "false");
  }
}

function checkuser() {
  //ZAPIS JSON JAKO STRING
  const user = JSON.parse(localStorage.getItem("upr"));
  //PRZEKIEROWYWUJE DO STRONY STARTOWEJ
  const url = window.location.href;
  //--||--
  //BEZ user.upr!!
  if (user != "admin" && url.includes("admin.html")) {
    window.location.href = "index.html";
  }
}
