// created a function that gets the full date of the click being used as createTimeStamp() argument

const clickDate = () => {
    let date = new Date()
    return date
}
// create function to get offset time zone
// made timeZoneOffset into a string then targeted the first number of that string
// then used slice to recombine it
// Being called in createTimeStamp()
const timeZoneOffset = ( zoneOffset) => {
    let zoneString = `${zoneOffset}`
    let zoneSplit = zoneString.charAt(0)
    if (zoneSplit > 0) {
        if (zoneSplit < 10) {
            let pstvLessOffset = `+0${zoneSplit}:${zoneString.slice(1)}`
            return pstvLessOffset
        } else {
            let pstvPosOffset = `+${zoneSplit}:${zoneString.slice(1)}`
            return pstvPosOffset
        }
    } else {
        if (zoneSplit < 10) {
            let ngtvLessOffset = `-0${zoneSplit}:${zoneString.slice(1)}`
            return ngtvLessOffset
        } else {
            let ngtvPosOffset = `-${zoneSplit}:${zoneString.slice(1)}`
            return ngtvPosOffset
        }
    }
}
// created a funtction that create a timeStamp into a string being called in addEventToDB()

const createTimeStamp = (date) => {
    let timeStampYear = date.getFullYear()
    let timeStampMonth = date.getMonth() + 1
    let timeStampDay = date.getDate()
    let timeStampHour = date.getHours()
    let timeStampMinutes = date.getMinutes()
    let timeStampSeconds = date.getSeconds()
    let timeStampMilli = date.getMilliseconds()
    let timeStampOffset =   timeZoneOffset( date.getTimezoneOffset())
    let timeOfClick =  `${timeStampYear}-${timeStampMonth}-${timeStampDay} ${timeStampHour}:${timeStampMinutes}:${timeStampSeconds}.${timeStampMilli} ${timeStampOffset}`
    return timeOfClick
}

export {clickDate, createTimeStamp}