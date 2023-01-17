var today = dayjs().format("MMMM D, YYYY"); // Using dayjs, display current day in header
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
let workTime = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

$(function () {
  let workEl = $(".main");
  let timeNow = dayjs().hour(); // format("HA"); // H=the hour and A=AM or PM Upper case, note! rounds down
  console.log("The appx. time right now is " + timeNow);
  for (let i = 0; i < workTime.length; i++) {
    let newWork = $("<div>");
    let timeBlock = $("<div>");
    newWork.addClass("col-2 col-md-1 hour text-center py-3");
    timeBlock.append(newWork);
    timeBlock.attr("id", "hour-" + workTime[i]);
    if (workTime[i] < timeNow) {
      timeBlock.addClass("row time-block past"); // past=grey
    } else if (workTime[i] > timeNow) {
      timeBlock.addClass("row time-block future"); // future=green
      console.log("time workDay " + workDay[i]);
    } else if (timeNow === workTime[i]) {
      timeBlock.addClass("row time-block present"); // present=red
    }
    workEl.append(timeBlock);
    newWork.text(workDay[i]);
    let addWork = $("<textarea>"); // <textarea> tag allows multi-line text input
    addWork.addClass("col-8 col-md-10 description row-3");
    timeBlock.append(addWork);
    let newButton = $("<button>");
    newButton.addClass("btn saveBtn col-2 col-md-1");
    newButton.attr("id", "save");
    let textButton = $("<i>");
    textButton.addClass("fas fa-save");
    newButton.append(textButton);
    timeBlock.append(newButton);
    // event listener
    newButton.on("click", function () {
      console.log("addWork " + addWork.val());
      localStorage.setItem(workDay[i], addWork.val());
      localStorage.getItem(workDay[i]);
    });
  }
  // DOM traversal to save on refresh
  $(".hour").each(function () {
    console.log($(this).text()); //going to add jQuery method (.text()) so include $
    $(this)
      .siblings(".description")
      .val(localStorage.getItem($(this).text()));
  });
  // console.log(workEl); // [object Object] if add string values + within ()
});
