function submit() {
  let uname = document.getElementById("uname").value;
  let pword = document.getElementById("pword").value;
  
  fetch('Source code/password.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      if (uname == "admin123" && pword == "password") {
        document.getElementById("web_page").style.display = "block";
        document.getElementById("login").style.display = "none";
        alert(data);
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
