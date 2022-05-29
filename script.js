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

// Sets background color for current time = 8AM
if (currentHr === 8) {
  id8El.classList.add("present");
  id9El.classList.add("future");
  id10El.classList.add("future");
  id11El.classList.add("future");
  id12El.classList.add("future");
  id1El.classList.add("future");
  id2El.classList.add("future");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 9AM
if (currentHr === 9) {
  id8El.classList.add("past");
  id9El.classList.add("present");
  id10El.classList.add("future");
  id11El.classList.add("future");
  id12El.classList.add("future");
  id1El.classList.add("future");
  id2El.classList.add("future");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 10AM
if (currentHr === 10) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("present");
  id11El.classList.add("future");
  id12El.classList.add("future");
  id1El.classList.add("future");
  id2El.classList.add("future");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 11AM
if (currentHr === 11) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("past");
  id11El.classList.add("present");
  id12El.classList.add("future");
  id1El.classList.add("future");
  id2El.classList.add("future");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 12PM
if (currentHr === 12) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("past");
  id11El.classList.add("past");
  id12El.classList.add("present");
  id1El.classList.add("future");
  id2El.classList.add("future");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 1PM
if (currentHr === 13) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("past");
  id11El.classList.add("past");
  id12El.classList.add("past");
  id1El.classList.add("present");
  id2El.classList.add("future");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 2PM
if (currentHr === 14) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("past");
  id11El.classList.add("past");
  id12El.classList.add("past");
  id1El.classList.add("past");
  id2El.classList.add("present");
  id3El.classList.add("future");
  id4El.classList.add("future");
}

// Sets background color for current time = 3PM
if (currentHr === 15) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("past");
  id11El.classList.add("past");
  id12El.classList.add("past");
  id1El.classList.add("past");
  id2El.classList.add("past");
  id3El.classList.add("present");
  id4El.classList.add("future");
}

// Sets background color for current time = 4PM
if (currentHr === 16) {
  id8El.classList.add("past");
  id9El.classList.add("past");
  id10El.classList.add("past");
  id11El.classList.add("past");
  id12El.classList.add("past");
  id1El.classList.add("past");
  id2El.classList.add("past");
  id3El.classList.add("past");
  id4El.classList.add("present");
}

// 8AM save button for console logging & local storage saving
saveBtn8El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
    console.log("8AM Btn Press")
    console.log("8AM text saved")
    localStorage.setItem("8AM",text8amEl.value)
    console.log(`8AM Reminder :  ${text8amEl.value} `)
    return;
});

// 9AM save button for console logging & local storage saving
saveBtn9El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("9AM Btn Press")
  console.log("9AM text saved")
  localStorage.setItem("9AM",text9amEl.value)
  console.log(`9AM Reminder :  ${text9amEl.value} `)
  return;
});

// 10AM save button for console logging & local storage saving
saveBtn10El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("10AM Btn Press")
  console.log("10AM text saved")
  localStorage.setItem("10AM",text10amEl.value)
  console.log(`10AM Reminder :  ${text10amEl.value} `)
  return;
});

// 11AM save button for console logging & local storage saving
saveBtn11El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("11AM Btn Press")
  console.log("11AM text saved")
  localStorage.setItem("11AM",text11amEl.value)
  console.log(`11AM Reminder :  ${text11amEl.value} `)
  return;
});

// 12PM save button for console logging & local storage saving
saveBtn12El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("12PM Btn Press")
  console.log("12PM text saved")
  localStorage.setItem("12PM",text12amEl.value)
  console.log(`12PM Reminder :  ${text12pmEl.value} `)
  return;
});

// 1PM save button for console logging & local storage saving
saveBtn1El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("1PM Btn Press")
  console.log("1PM text saved")
  localStorage.setItem("1PM",text1pmEl.value)
  console.log(`1PM Reminder :  ${text1pmEl.value} `)
  return;
});

// 2PM save button for console logging & local storage saving
saveBtn2El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("2PM Btn Press")
  console.log("2PM text saved")
  localStorage.setItem("2PM",text2pmEl.value)
  console.log(`2PM Reminder :  ${text2pmEl.value} `)
  return;
});

// 3PM save button for console logging & local storage saving
saveBtn3El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("3PM Btn Press")
  console.log("3PM text saved")
  localStorage.setItem("3PM",text3pmEl.value)
  console.log(`3PM Reminder :  ${text3pmEl.value} `)
  return;
});

// 4PM save button for console logging & local storage saving
saveBtn4El.on('click', function() { //On press of save button, saves input to local storage for given time and reports success to console
  console.log("4PM Btn Press")
  console.log("4PM text saved")
  localStorage.setItem("4PM",text4pmEl.value)
  console.log(`4PM Reminder :  ${text4pmEl.value} `)
  return;
});