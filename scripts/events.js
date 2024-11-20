let eventItems = [{date: "04/05/2024", text: "Work Day", link: "None"},
    {date: "04/12/2025", text: "Work Day", link: "None"},
    {date: "04/13/2025", text: "Schooling Day and Ride a Test", link: "None"},
    {date: "05/03/2025", text: "Work Day", link: "None"},
    {date: "05/04/2025", text: "Work Day", link: "None"},
    {date: "05/07/2025", text: "Work Day", link: "None"},
    {date: "05/08/2025", text: "Work Day", link: "None"},
    {date: "05/09/2025", text: "Work Day", link: "None"},
    {date: "05/10/2025", text: "Queeny Park Horse Trials: Dressage and Stadium", link: "None"},
    {date: "05/11/2025", text: "Queeny Part Horse Trials: Cross Country", link: "None"},
    {date: "06/01/2025", text: "Work Day", link: "None"},
    {date: "06/07/2025", text: "Schooling Day", link: "None"},
    {date: "06/08/2025", text: "Fun Ride", link: "None"},
    {date: "08/09/2025", text: "Work Day", link: "None"},
    {date: "08/10/2025", text: "Schooling Day", link: "None"},
    {date: "11/15/2025", text: "Fun Show or Hunter Pace", link: "None"},
    {date: "11/16/2025", text: "Work Day", link: "None"}];
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