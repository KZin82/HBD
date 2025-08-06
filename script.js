window.checkPassword = function () {
  const pw = document.getElementById("password").value;
  if (pw === "2191994") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("cakeScreen").classList.remove("hidden");
  }
} 
function nextStep(){
    document.getElementById("cakeScreen").classList.add("hidden");
    document.getElementById("letterScreen").classList.remove("hidden");
}
function openLetter(){
    alert("Happy Birthday!")
}
