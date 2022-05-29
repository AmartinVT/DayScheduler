let saveBtn8El = $('#8AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text8amEl = document.getElementById('8AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id8El = document.getElementById('id8'); //Gets the given time id to modify background color 
text8amEl.value = localStorage.getItem("8AM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn9El = $('#9AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text9amEl = document.getElementById('9AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id9El = document.getElementById('id9'); //Gets the given time id to modify background color 
text9amEl.value = localStorage.getItem("9AM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn10El = $('#10AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text10amEl = document.getElementById('10AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id10El = document.getElementById('id10'); //Gets the given time id to modify background color 
text10amEl.value = localStorage.getItem("10AM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn11El = $('#11AMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text11amEl = document.getElementById('11AMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id11El = document.getElementById('id11'); //Gets the given time id to modify background color 
text11amEl.value = localStorage.getItem("11AM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn12El = $('#12PMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text12pmEl = document.getElementById('12PMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id12El = document.getElementById('id12'); //Gets the given time id to modify background color 
text12pmEl.value = localStorage.getItem("12PM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn1El = $('#1PMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text1pmEl = document.getElementById('1PMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id1El = document.getElementById('id1'); //Gets the given time id to modify background color 
text1pmEl.value = localStorage.getItem("1PM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn2El = $('#2PMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text2pmEl = document.getElementById('2PMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id2El = document.getElementById('id2'); //Gets the given time id to modify background color 
text2pmEl.value = localStorage.getItem("2PM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn3El = $('#3PMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text3pmEl = document.getElementById('3PMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id3El = document.getElementById('id3'); //Gets the given time id to modify background color 
text3pmEl.value = localStorage.getItem("3PM"); //Initializes given time form input field to local stroage value for same given time

let saveBtn4El = $('#4PMbtn'); //Declares the save button from HTML as a variable to be used in JavaScript
let text4pmEl = document.getElementById('4PMtext'); //Saves the text input into the HTML form as a variable to be used in JavaScript
let id4El = document.getElementById('id4'); //Gets the given time id to modify background color 
text4pmEl.value = localStorage.getItem("4PM"); //Initializes given time form input field to local stroage value for same given time

currentHr = moment().hour();

if (currentHr === 8) {
  id8El.classList.add("present");
  id9El.classList.add("future");
  id10El.classList.add("future");
  id11El.classList.add("future")
}

if (currentHr === 9) {
  id8El.classList.add("past");
  id9El.classList.add("present");
  id10El.classList.add("future");
  id11El.classList.add("future")
}

if (currentHr === 10) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("present");
  id11El.classList.add("future")
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

  saveBtn11El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
    console.log("11AM Btn Press")
    console.log("11AM text saved")
    localStorage.setItem("11AM",text11amEl.value)
    console.log(`11AM Reminder :  ${text11amEl.value} `)
    return;
  });