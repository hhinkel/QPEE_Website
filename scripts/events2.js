const events = [
    { "date": "2026-03-24 00:00", "text": "Opening Date Queeny Park Horse Trials", "link": "https://useventing.com/events-competitions/calendar/event?event=18983", "linkText": "Omnibus" },
    { "date": "2026-04-11 09:00", "text": "Fix-a-Test (Cancelled)", "link": "None", "linkText": "None" },
    { "date": "2026-04-12 08:00", "text": "Mini Event (Closed)", "link": "None", "linkText": "None" },
    { "date": "2026-03-24 00:00", "text": "Closing Date Queeny Park Horse Trials", "link": "https://useventing.com/events-competitions/calendar/event?event=18983", "linkText": "Omnibus" },
    { "date": "2026-05-02 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-03 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-04 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-05 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-06 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-07 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-07 23:00", "text": "Start Times Avalible", "link": "Link will be live when avalible", "linkText": "None" },
    { "date": "2026-05-08 08:00", "text": "Work Day for Horse Trials", "link": "None", "linkText": "None" },
    { "date": "2026-05-09 08:00", "text": "Queeny Park Horse Trials (Dressage + Stadium Day)", "link": "https://useventing.com/events-competitions/calendar/event?event=18983", "linkText": "Omnibus" },
    { "date": "2026-05-09 08:00", "text": "Queeny Park Horse Trials (Cross Country Day)", "link": "None", "linkText": "None" },
    { "date": "2026-06-27 20:00", "text": "Trivia Night (Tenative)", "link": "None", "link": "https://useventing.com/events-competitions/calendar/event?event=18983", "linkText": "Omnibus" }
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

    createData();

    function createData() {
        events.forEach(event => {
            const row = table.insertRow();
            const eventDate = getDate(event.date);
            const eventTime = getTime(event.date);

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
                aLink.target = "_blank";
                link.appendChild(aLink);
            }
        });
    }

    function getDate(dateTime) {
        const year = dateTime.slice(0, 4);
        const month = dateTime.slice(5, 7);
        const day = dateTime.slice(8, 10);
        return day + "/" + month + "/" + year;
    }

    function getTime(dateTime) {
        const time = dateTime.slice(11, 16);
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