
import events from "./events.json" with {type: 'json'};

const body = document.getElementById("body");

function createEvents() {
    const table = document.createElement("table");
    table.style.alignSelf = 'center';

    //Create Headers
    const headers = ["Date", "Time", "Event", "Link"];
    const headerRow = document.createElement("tr");
    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    createData();

    function createData() {
        events.forEach(event => {
            const d = new Date(event.date);
            if (d.getTime() > Date.now()) {
                const eventDate = getDate(event.date);
                const today = getToday();
                const eventTime = getTime(event.date);

                const row = table.insertRow();
                const date = row.insertCell();
                row.appendChild(createCell(date, eventDate));
                const time = row.insertCell();
                row.appendChild(createCell(time, eventTime));
                const text = row.insertCell();
                row.appendChild(createCell(text, event.text));
                const link = row.insertCell();
                if (event.linkText == "None") {
                    row.appendChild(createCell(link, event.link));
                } else {
                    const aLink = document.createElement("a");
                    aLink.textContent = event.linkText;
                    aLink.href = event.link;
                    //link.style.border = '2px solid black';
                    link.style.padding = '5px';
                    aLink.target = "_blank";
                    link.appendChild(aLink);
                }
            }
        });
    }

    function getDate(dateTime) {
        const year = dateTime.slice(0, 4);
        const month = dateTime.slice(5, 7);
        const day = dateTime.slice(8, 10);
        return month + "/" + day + "/" + year;
    }

    function getToday() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return month + "/" + day + "/" + year;
    }

    function getTime(dateTime) {
        const time = dateTime.slice(11, 16);
        return time;
    }

    function createCell(cell, value) {
        cell.textContent = value;
        cell.style.padding = '5px';
        return cell;
    }

    // Insert table
    document.getElementById("table-container").appendChild(table);
}

createEvents();