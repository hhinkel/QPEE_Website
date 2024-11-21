const events = document.getElementById("events");

function fetchEventData() {
    fetch("/./events.json") 
        .then((res) => {
            if (!res.ok) {
                throw new Error (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            createEventList(data.events))
        .catch((error) => console.error("Unable to fetch data:", error));
}

function createEventList(eventItems) {
    const ul = document.createElement("ul");
    for (const eventItem of eventItems) {
        const date = new Date(eventItem.date);
        const now = new Date();
        if (date < now)
            continue;
        const li = document.createElement("li");
        li.textContent = date.toDateString() + ": " + eventItem.text;
        ul.appendChild(li).className = "event_list_items";
    }
    events.appendChild(ul).className = "eventList";
}

fetchEventData();