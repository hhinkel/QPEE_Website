const events = document.getElementById("events2");
let eventData = [];

function createEvents() {
    const test = fetchEvents();
    // parse event file
    // setup table 4 cells (date, time, description, link) x rows
    console.log("B", eventData);
    console.log("C", test);
    const p = document.createElement("p");
    const event = '{"date": "2026-04-12 08:00", "text": "Schooling Day and Ride a Test", "link": "None"}';
    console.log(event);
    const objEvent = JSON.parse(event);
    console.log(objEvent["date"]);
    p.textContent = "Date: " + objEvent.date + " Description: " + objEvent.text;
    events2.appendChild(p).className = "eventList";
}


async function fetchEvents() {
    try {
        const res = await fetch('./events.json');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        eventData = await res.json();
        console.log(eventData.events);
        } catch (error) {
            console.error('Failed to load JSON data:', error);
        }
        return eventData.events;
    }

createEvents();


/* .then(res => res.json())    
            .then((data) => data.events)
            .catch(error => console.error("Unable to fetch data:", error)); */