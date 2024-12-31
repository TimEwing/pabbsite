import ICAL from "https://unpkg.com/ical.js/dist/ical.min.js";



console.log("hello world");

console.log(ICAL);

const corsProxy = "https://cors-anywhere.herokuapp.com/";
$.get(corsProxy + "http://www.instantcal.com/test.ics", function (data) { console.log(data); });
