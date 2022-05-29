let saveBtn8El = $('#8AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text8amEl = document.getElementById('8AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
text8amEl.value = localStorage.getItem("8AM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn9El = $('#9AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text9amEl = document.getElementById('9AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
text9amEl.value = localStorage.getItem("9AM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn10El = $('#10AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text10amEl = document.getElementById('10AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
text10amEl.value = localStorage.getItem("10AM"); //Initializes given time form input field to local stroage value for same given time

currentHr = moment().hour();

if (currentHr.value === 8) {
  
}

saveBtn8El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
    console.log("8AM Btn Press")
    console.log("8AM text saved")
    localStorage.setItem("8AM",text8amEl.value)
    console.log(`8AM Reminder :  ${text8amEl.value} `)
    return;
  });

  saveBtn9El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
    console.log("9AM Btn Press")
    console.log("9AM text saved")
    localStorage.setItem("9AM",text9amEl.value)
    console.log(`9AM Reminder :  ${text9amEl.value} `)
    return;
  });

  saveBtn10El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
    console.log("10AM Btn Press")
    console.log("10AM text saved")
    localStorage.setItem("10AM",text10amEl.value)
    console.log(`10AM Reminder :  ${text10amEl.value} `)
    return;
  });