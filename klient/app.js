async function getuser() {
  document.getElementById("user").value;
  document.getElementById("pass").value;

  const data = await fetch(`https://localhost/login/user/pass`);
  const json = await data.json();
  console.log(json);

  if (json[0] != undefined) {
    localStorage.setItem("upr", JSON.stringify(json[0]));
  } else {
    localStorage.setItem("upr", "false");
  }
}

function checkuser() {
  const user = JSON.parse(localStorage.getItem("upr"));
  const url = window.location.href;

  if (user != "admin" && url.includes("admin.html")) {
    window.location.href = "index.html";
  }
}
