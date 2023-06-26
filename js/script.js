function generateShortLink() {
    var mainLink = document.getElementById("main-link").value;
    var domain = document.getElementById("domain").value;
  
    // Perform any necessary validation on the mainLink and domain here
    if (mainLink.trim() === '' || domain.trim() === '') {
        // Display an error message or take appropriate action when the input fields are empty
        alert('Please enter both the main link and domain.');
        return;
      }
    // Generate short link
    var shortLink = domain + "/" + generateRandomString(6);
  
    document.getElementById("short-link").value = shortLink;
  }
  
  function generateRandomString(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
  
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }
  