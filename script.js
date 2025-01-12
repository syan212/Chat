const fs = require('fs');
function submit() {
  let uname = document.getElementById("uname").value;
  let pword = document.getElementById("pword").value;
  
  fs.readFile('Source code/password.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let d = data;

    if (uname == "admin123" && pword == "password") {
      document.getElementById("web_page").style.display = "block";
      document.getElementById("login").style.display = "none";
      alert(d);
    }
  });
}
