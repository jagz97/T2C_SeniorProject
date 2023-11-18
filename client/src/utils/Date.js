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

export function getDayDifference(d1,d2) {
    // d2 -d1
    const timeDiff = Math.abs(d2 - d1)
    const result = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    return result
}