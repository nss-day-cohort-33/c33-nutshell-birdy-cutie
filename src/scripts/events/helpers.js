import {API} from "../api.js"
import {createEventListElements} from "./createEventElements.js"


// this function loops through the array of id's and filters out all the current user id's and adds
// the current user id one time to the end of the arr
// Then it calls the events data and loops through each object. If the event.userId is the same as one of the
// array id's then the entire object will be pushed to an empty array

const getEventsFromDB = (idArr) => {
    let currId = +sessionStorage.getItem("userId")
    // create an empty array to store all the event objects that were created
    // by the current user or his/her friends
    let friendIdArr = []
    // creates an array that has only the current user's friends' id's NOT the current user's id
    let eventsArr = idArr.filter( id => {
        return id !== currId
    });
    // the current user's id is added to the end of the array
    eventsArr.push(currId)
    // the events data is called
    API.getData("events").then( data => {
        // the data is then looped through to see which ones pertain to the curr user or his/her friends
        data.forEach (eventObj => {
            // the id array is looped through to compare the id's to the event userId values
            eventsArr.forEach (eventUserId =>{
                // if the event userId value is equal to an Id in within the array then the whole event object
                // is pushed to the friendIdArr
                if (eventObj.userId === eventUserId) {
                    friendIdArr.push(eventObj);
                }
            })
        })
        // the friendIdArr is then used as an argument in putEventsInOrder()
        putEventsInOrder(friendIdArr)
    })
}
// this function sorts through the array of event objects and sorts them by timestamp.
// After they timestamps are pulled out and sorted, they are used in transformEventsToHTML()

const putEventsInOrder = (arr) => {
    let timeArr = []
    // loops through object array to get all the times stamps
    arr.forEach ( eventDataObj => {
        for (let foo of Object.entries(eventDataObj)) {
            if (foo[0] === "timestamp") {
                timeArr.push(foo[1]);
            }
        }
    })
    // sorts the time stamp from oldest to newest. So newest is on bottom.
    // to sort the other way, just make the "-" a "+"
    timeArr.sort((a,b) => a-b)
    // loops through the timestamp array
    timeArr.forEach (time => {
        addOrderedEventsToDOM(arr, time)
    })
}

// After the events are sorted in the right order transformEventsToHTML()
// cross references them to make sure they are added to the DOM correctly

const addOrderedEventsToDOM = (arr, time) => {
    let currId = +sessionStorage.getItem("userId")
    // loops through the object array
    arr.forEach (eventObj => {
        // this is saying that if the time stamp equals the object time stamp then
        // add to the DOM
        if (time === eventObj.timestamp) {
            createEventListElements(eventObj, currId)
        }
    })
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

export {createEventObj, getEventsFromDB}
