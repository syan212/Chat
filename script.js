function submit() {
  let uname = document.getElementById("uname").value;
  let pword = document.getElementById("pword").value;
  if (uname == "admin123" & pword == "password") {
    document.getElementById("web_page").style.display = "block";
    document.getElementById("login").style.display = "none";
  }
}
