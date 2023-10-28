export function getDate(dayOffset=0) {
    // get current date
    const date = new Date() 
    
    // add dayOffset to current if nonzero
    date.setDate(date.getDate() + dayOffset) 

    // return date in YYYY-MM-DD
    const day = date.getDate() 
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const currentDate = `${year}-${month}-${day}`

    return currentDate
}