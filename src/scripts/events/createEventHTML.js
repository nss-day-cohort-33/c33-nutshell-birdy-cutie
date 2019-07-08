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

// this creates the html for the edit form that takes the values of what has already been
// inputed by the user

const createEventEditHTML = (id, name, date, time, location) => {
  let editFormString =
  `
    <p id="user-id" hidden>${id}</p>
    <h3>Edit Event</h3>
    <fieldset>
      <legend for="event-name-edit">Name of Event</legend>
      <input type="text" id="event-name-edit" id="event-name" placeholder="Event Name" value="${name}">
    </fieldset>
    <fieldset>
      <legend for="event-date-edit">Date of Event</legend>
      <input type="date" id="event-date-edit" name="event-date" placeholder="Day of Event" value="${date}">
    </fieldset>
    <fieldset>
      <legend for="event-time-edit">Time of Event</legend>
      <input type="time" id="event-time-edit" name="event-time" placeholder="hrs:mins" value="${time}">
    </fieldset>
    <fieldset>
      <legend for="event-location-edit">Location of Event</legend>
      <input type="text" id="event-location-edit" name="event-location" placeholder="Location of Event" value="${location}">
    </fieldset>
  `
  return editFormString
}

const createEventDOMHTML = eventData => {
  let stringForDOM =
  `
    <h2 id="eventName-${eventData.id}">${eventData.event_name}</h2>
    <p id="eventDate-${eventData.id}">${eventData.date}</p>
    <p id="eventTime-${eventData.id}">${eventData.time}</p>
    <p id="eventLocation-${eventData.id}">${eventData.location}</p>
  `
  return stringForDOM
}

export {createEventFormHTML, createEventDOMHTML, createEventEditHTML}