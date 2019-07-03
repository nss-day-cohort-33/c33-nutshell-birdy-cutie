const createEventFormHTML = id => {
    let formString =
    `
      <p id="user-id" hidden>${id}</p>
      <h3>Create Event</h3>
      <fieldset>
        <legend for="event-name-input">Name of Event</legend>
        <input type="text" id="event-name-input" id="event-name" placeholder="Event Name">
      </fieldset>
      <fieldset>
        <legend for="event-date-input">Date of Event</legend>
        <input type="date" id="event-date-input" name="event-date" placeholder="Day of Event">
      </fieldset>
      <fieldset>
        <legend for="event-time-input">Time of Event</legend>
        <input type="time" id="event-time-input" name="event-time" placeholder="hrs:mins">
      </fieldset>
      <fieldset>
        <legend for="event-location-input">Location of Event</legend>
        <input type="text" id="event-location-input" name="event-location" placeholder="Location of Event">
      </fieldset>
    `
    return formString
}

const createEventDOMHTML = eventData => {
    let stringForDOM =
    `
        <h2 id="event-name">${eventData.event_name}</h2>
        <p id="event-date">${eventData.date}</p>
        <p id="event-time">${eventData.time}</p>
        <p id="event-location">${eventData.location}</p>
    `
    return stringForDOM
}

export {createEventFormHTML, createEventDOMHTML}