const events = [
    { "date": "2026-04-04 00:00", "text": "Closing for Fix-a-Test and Mini Event", "link": "None"},
    { "date": "2026-04-11 09:00", "text": "Fix-a-Test", "link": "None" },
    { "date": "2026-04-12 08:00", "text": "Mini Event", "link": "None" }
]
const body = document.getElementById("body");

function createEvents() {
    console.log("events", events);
    const table = document.createElement("table");
    table.border = 1;

    //Create Headers
    const headers = ["Date/Time", "Event", "Link"];
    const headerRow = document.createElement("tr");
    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create Data Rows
    events.forEach(event => {
        const row = document.createElement("tr");
        Object.values(event).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    // Insert table
    document.getElementById("table-container").appendChild(table);
}

createEvents();