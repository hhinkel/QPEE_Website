const events = document.getElementById("events2");
let test;

function createEvents() {
    const test = fetchEvents();
    // parse event file
    // setup table 4 cells (date, time, description, link) x rows
    const p = document.createElement("p");
    const event = '{"date": "2026-04-12 08:00", "text": "Schooling Day and Ride a Test", "link": "None"}';
    console.log(event);
    const objEvent = JSON.parse(event);
    console.log(objEvent["date"]);
    p.textContent = "Date: " + objEvent.date + " Description: " + objEvent.text;
    events2.appendChild(p).className = "eventList";
}


function fetchEvents() {
    fetch('./events.json')
        .then((res) => {
            if(!res.ok) {
                throw new Error ('HTTP error! Status: ${res.status}');
            }
        })
        .then(events2 => {
            test = events2;
            console.log(test);
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
})}

createEvents();
