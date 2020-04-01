function showTable() {
  var tableBody = document.getElementById("tableBody");
  if (tableBody.style.visibility === "visible") {
    tableBody.style.visibility = "hidden";
  } else {
    tableBody.style.visibility = "visible";
  }
}
function showNav() {
  var navBar = document.getElementById("navBar");
  if (navBar.style.display === "none") {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
}
