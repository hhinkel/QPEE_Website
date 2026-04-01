const events = [
    { "date": "2026-04-04 00:00", "text": "Closing for Fix-a-Test and Mini Event", "link": "None" },
    { "date": "2026-04-11 09:00", "text": "Fix-a-Test", "link": "None" },
    { "date": "2026-04-12 08:00", "text": "Mini Event", "link": "None" }
]
const body = document.getElementById("body");

function createEvents() {
    const table = document.createElement("table");
    table.style.alignSelf = 'center';
    table.style.border = '2px solid black';

    //Create Headers
    const headers = ["Date", "Time", "Event", "Link"];
    const headerRow = document.createElement("tr");
    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.border = '2px solid black';
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create Data Rows
    events.forEach(event => {
        const row = document.createElement("tr");
        const eventDate = getDate(event.date);
        const eventTime = getTime(event.date);
        
        const date = document.createElement("td");
        row.appendChild(createCell(date, eventDate));
        const time = document.createElement("td");
        row.appendChild(createCell(time, eventTime));
        const text = document.createElement("td");
        row.appendChild(createCell(text, event.text));
        const link = document.createElement("td");
        row.appendChild(createCell(link, event.link));        
        table.appendChild(row);
    });

    function getDate(date) {
        return date;
    }

    function getTime(time) {
        return time;
    }

    function createCell(cell, value) {
        cell.textContent = value;
        cell.style.border = '2px solid black';
        cell.style.padding = '5px';
        return cell;
    }

    // Insert table
    document.getElementById("table-container").appendChild(table);
}

createEvents();