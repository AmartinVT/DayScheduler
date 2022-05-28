let saveBtnEl = $('#8AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text8amEl = document.getElementById('8AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript

text8amEl.value = localStorage.getItem("8AM"); //Initializes given time form input field to local stroage value for same given time

saveBtnEl.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
    console.log("8AM Btn Press")
    console.log("8AM text saved")
    localStorage.setItem("8AM",text8amEl.value)
    console.log(`8AM Reminder :  ${text8amEl.value} `)
  });
