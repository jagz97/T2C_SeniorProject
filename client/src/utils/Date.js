export function getDate(dayOffset=0) {
    // get current date
    const date = new Date() 
    
    // add dayOffset to current if nonzero
    date.setDate(date.getDate() + dayOffset) 

    return date

}

export function dateToString(date) {
    return date.toISOString().split('T')[0]
}