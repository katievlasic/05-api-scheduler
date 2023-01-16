// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $ selects existing DOM element <p id="currentDay" class="lead">
// Using dayjs, display current day in header
var today = dayjs().format("MMMM D, YYYY");
$("#currentDay").text(today);

let mainEl = document.querySelector(".main");
let workDay = [
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

$(function () {
  let workEl = $(".main");
  let timeNow = dayjs().format("HA"); // H=the hour and A=AM or PM Upper case, note! rounds down
  console.log("The appx. time right now is " + timeNow);
  for (let i = 0; i < workDay.length; i++) {
    let newWork = $("<div>");
    let timeBlock = $("<div>");
    newWork.addClass("col-2 col-md-1 hour text-center py-3");
    // newWork.textarea('empty');
    timeBlock.append(newWork);
    timeBlock.attr("id", "hour");
    if (workDay[i] < timeNow) {
      timeBlock.addClass("row time-block past"); // past=grey
    } else if (workDay[i] > timeNow) {
      timeBlock.addClass("row time-block future"); // future=green
      console.log("time workDay " + workDay[i]);
    } else if (timeNow === workDay[i]) {
      timeBlock.addClass("row time-block present"); // present=red
    }
    workEl.append(timeBlock);
    newWork.text(workDay[i]);
    let addWork = $("<textarea>"); // tag allows multi-line text input
    addWork.addClass("col-8 col-md-10 description row-3");
    timeBlock.append(addWork);
    let newButton = $("<button>");
    newButton.addClass("btn saveBtn col-2 col-md-1");
    let textButton = $("<i>");
    textButton.addClass("fas fa-save");
    newButton.append(textButton);
    timeBlock.append(newButton);
    // DOM traversal & event listener
  }

  console.log("workEl " + workEl + " is the parent."); // [object HTMLDivElement]

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
