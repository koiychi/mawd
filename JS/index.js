fetch('https://script.google.com/macros/s/WEB_APP_URL/exec')
    .then(response => response.json())
    .then(data => console.log(data));
