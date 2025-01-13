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
      let dict = {}; // Initialize as an empty object
      for (let i = 0; i < data.length; i++){
        let [user, pass] = data[i].split(":");
        dict[user] = pass;
      }
      if (dict[uname] == pword) {
        document.getElementById("web_page").style.display = "block";
        document.getElementById("login").style.display = "none";
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
