function submit() {
  let uname = document.getElementById("uname").value;
  let pword = document.getElementById("pword").value;
  
  fetch('./Source code/passwords.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      data = data.split("\n")
      let dict = [{}]
      for (let i = 0;i < data.length;i++){
        dict[data[i].split(":")[0]] = data[i].split(":")[1];
      }
      if (uname == "admin123" && pword == "password") {
        document.getElementById("web_page").style.display = "block";
        document.getElementById("login").style.display = "none";
        alert(data);
        alert(dict);
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
