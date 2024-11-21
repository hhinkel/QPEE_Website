import eventJSON from "./events.json" assert { type: 'json' };
console.log(eventJSON);
let eventItems = [{date: "2025-04-12", text: "Work Day", link: "None"},
    {date: "2025-04-13", text: "Schooling Day and Ride a Test", link: "None"},
    {date: "2025-05-03", text: "Work Day", link: "None"},
    {date: "2025-05-04", text: "Work Day", link: "None"},
    {date: "2025-05-07", text: "Work Day", link: "None"},
    {date: "2025-05-08", text: "Work Day", link: "None"},
    {date: "2025-05-09", text: "Work Day", link: "None"},
    {date: "2025-05-10", text: "Queeny Park Horse Trials: Dressage and Stadium", link: "None"},
    {date: "2025-05-11", text: "Queeny Part Horse Trials: Cross Country", link: "None"},
    {date: "2025-06-01", text: "Work Day", link: "None"},
    {date: "2025-06-07", text: "Schooling Day", link: "None"},
    {date: "2025-06-08", text: "Fun Ride", link: "None"},
    {date: "2025-08-09", text: "Work Day", link: "None"},
    {date: "2025-08-10", text: "Schooling Day", link: "None"},
    {date: "2025-11-15", text: "Fun Show or Hunter Pace", link: "None"},
    {date: "2025-11-16", text: "Work Day", link: "None"}];
const events = document.getElementById("events");

function createEventList() {
    const ul = document.createElement("ul");
    for (const eventItem of eventItems) {
        const li = document.createElement("li");
        li.textContent = eventItem.date + ": " + eventItem.text;
        ul.appendChild(li).className = "event_list_items";
    }
    events.appendChild(ul).className = "eventList";
}

createEventList();