const events = [
    '{ "date": "2026-04-11 09:00", "text": "Work Day", "link": "None" }',
    '{ "date": "2026-04-12 08:00", "text": "Schooling Day and Ride a Test", "link": "None" }'
]

function createEvents() {
    // parse event file
    // setup table 4 cells (date, time, description, link) x rows
    console.log("events", events);
    const p = document.createElement("p");
    const br = document.createElement("br");
    //const event = '{"date": "2026-04-12 08:00", "text": "Schooling Day and Ride a Test", "link": "None"}';
    for (let i= 0; i < events.length; i++) {
        const event =events[i];
        console.log("event: "+ event);
        const objEvent = JSON.parse(event);
        console.log(objEvent);
        p.textContent = "Date: " + objEvent["date"] + " Description: " + objEvent["text"];
        br.textContent;
        events2.appendChild(p).className = "eventList";
    }
}

createEvents();