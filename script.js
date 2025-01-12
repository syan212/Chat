const fs = require('lib/fs')
function submit() {
  let uname = document.getElementById("uname").value;
  let pword = document.getElementById("pword").value;
  fs.readFile('Source code/password.txt', (err, data) => {
    if (err) throw err;
    let d = data;
  });
  if (uname == "admin123" && pword == "password") {
    document.getElementById("web_page").style.display = "block";
    document.getElementById("login").style.display = "none";
    alert(d);
  }
}
