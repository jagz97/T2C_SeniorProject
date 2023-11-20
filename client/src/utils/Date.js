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