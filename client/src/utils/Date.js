export function getDate(dayOffset=0) {
    // get current date
    const date = new Date() 
    
    // add dayOffset to current if nonzero
    date.setDate(date.getDate() + dayOffset) 

    return date

}

export function dateToString(date) {
    const timezoneOffset = date.getTimezoneOffset()
    const localDate = new Date(date.getTime() - (timezoneOffset * 60 * 1000))
    return localDate.toISOString().split('T')[0]
}

export function getDayDifference(d1,d2) {
    // d2 -d1
    const timeDiff = Math.abs(d2 - d1)
    const result = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    return result
}

export function getString(date) {
    let month = date.toLocaleString("default", { month: "long" });
    let day = date.getUTCDate()
    let year = date.getUTCFullYear()

    return `${month} ${day}, ${year}`
}