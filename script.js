let saveBtnEl = $('#8AMbtn');
let text8amEl = document.getElementById('8AMtext');

// $( document ).ready(function() {
//     if (text8amEl == null) {text8amEl = localStorage.getItem("8AM")}
// });

saveBtnEl.on('click', function() {
    console.log("8AM Btn Press")
    console.log("8AM text saved")
    localStorage.setItem("8AM",text8amEl.value)
    console.log(`8AM Reminder :  ${text8amEl.value} `)
  });
