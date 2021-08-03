let daysOfWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
};

let months = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
}

let weekendDays = [ daysOfWeek.saturday, daysOfWeek.sunday ];

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function addMonths(date, months) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

function getNthDayOfNthWeek(date, dayOfWeek, weekNumber) {
    let firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstDayOfWeekOfMonth = addDays(firstOfMonth, 6 - addDays(firstOfMonth, -1 * (dayOfWeek + 1)).getDay());
    let result = addDays(firstDayOfWeekOfMonth,(weekNumber - 1) * 7);

    return result >= addMonths(firstOfMonth, 1) ? addDays(result, -7) : result;
}

module.exports = { daysOfWeek, months, weekendDays, addDays, addMonths, getNthDayOfNthWeek };