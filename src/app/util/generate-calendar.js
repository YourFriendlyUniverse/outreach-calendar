import { startOfMonth, lastDayOfMonth, getDay, eachDayOfInterval, subDays, addDays, isSameDay } from "date-fns";
// TODO: Allow for event circles on the calendar to dynamically update

export const generateDates = (date, today) => {
    const firstOfMonth = startOfMonth(date)
    const lastOfMonth = lastDayOfMonth(date)

    const dateArray = []

    //days before start of month
    if (getDay(firstOfMonth) != 0){
        for (const day of eachDayOfInterval({start: subDays(firstOfMonth, getDay(firstOfMonth)), end: subDays(firstOfMonth, 1)})){
                dateArray.push({
                isCurrMonth: false,
                date: day,
                hasEvent: isSameDay(day, new Date("June 1, 2025 10:00:00")) || isSameDay(day, new Date("May 17, 2025 8:00:00"))
            })
        }
    }
    
    
    //days of month
    for (const day of eachDayOfInterval({start: firstOfMonth, end: lastOfMonth})){
        dateArray.push({
            isCurrMonth: true,
            date: day,
            isToday: isSameDay(today, day),
            hasEvent: isSameDay(day, new Date("June 1, 2025 10:00:00")) || isSameDay(day, new Date("May 17, 2025 8:00:00"))
        })
    }
    
    //days after end of month

    const remainingDays = 42 - dateArray.length

    for (const day of eachDayOfInterval({start: addDays(lastOfMonth, 1), end: addDays(lastOfMonth, remainingDays)})){
        dateArray.push({
            isCurrMonth: false,
            date: day,
            hasEvent: isSameDay(day, new Date("June 1, 2025 10:00:00")) || isSameDay(day, new Date("May 17, 2025 8:00:00"))
        })
    }

    return dateArray
};