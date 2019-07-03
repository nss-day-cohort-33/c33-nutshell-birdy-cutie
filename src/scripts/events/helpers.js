// created a function to filter through events that has to do with specific userId
// Being called in addEventToDB()

const filterUserEvents = ( eventData, id) => {
    let userEvents =  eventData.filter( events => {
        if (events.userId === id) {
            return events
        }
    })
    return userEvents
}

// create factory function to turn event forum input values into an object that will then be pushed to DB
// being called in addEventToDB()

const createEventObj = (userId, event_name, date, time, location, timestamp) => {
    let factoryEventObj = {
        userId,
        event_name,
        date,
        time,
        location,
        timestamp
    }
    return factoryEventObj

}

export {filterUserEvents, createEventObj}
