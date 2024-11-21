const events = document.getElementById("events");

function createVolunteerCell(item, row) {
    const cell = document.createElement('td');
    cell.textContent = "Volunteer Button";
    row.appendChild(cell);
}

function createCell(data, row) {
    const cell = document.createElement('td');
    cell.textContent = data;
    row.appendChild(cell);
}

function createEventTable(eventItems) {
    const numCells = 4;
    const tbl = document.createElement('table');
    const tblbody = document.createElement('tbody');
    //create rows
    for (const eventItem of eventItems) {
        const date = new Date(eventItem.date);
        const now = new Date();
        if (date < now)
            continue;
        const row = document.createElement('tr');
        // create cells
        createCell(date.toDateString(), row);
        createCell(date.toLocaleTimeString('en-US'), row);
        createCell(eventItem.text, row);
        createVolunteerCell(eventItem, row);
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblbody);
    events.appendChild(tbl).className = "eventList";
}

function fetchEventData() {
    fetch("/./events.json") 
        .then((res) => {
            if (!res.ok) {
                throw new Error (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
            createEventTable(data.events))
        .catch((error) => console.error("Unable to fetch data:", error));
}

fetchEventData();