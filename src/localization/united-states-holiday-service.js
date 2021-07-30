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

let rules = [
    {
        en_US: "New Year's Day",
        es_US: "Año Nuevo",
        isFixedDate: true,
        type: 'federal',
        month: months.january,
        day: 1
    },
    {
        en_US: 'Martin Luther King Jr. Day',
        es_US: "Día de Martin Luther King Jr.",
        isFixedDate: false,
        type: 'federal',
        month: months.january,
        dayOfWeek: daysOfWeek.monday,
        weekNumber: 3
    },
    {
        en_US: "Washington's Birthday",
        es_US: "Cumpleaños de Washington",
        isFixedDate: false,
        type: 'federal',
        month: months.february,
        dayOfWeek: daysOfWeek.monday,
        weekNumber: 3
    },
    {
        en_US: 'Memorial Day',
        es_US: 'Día Conmemorativo',
        isFixedDate: false,
        type: 'federal',
        month: months.may,
        dayOfWeek: daysOfWeek.monday,
        weekNumber: 5
    },
    {
        en_US: 'Juneteenth National Independence Day',
        es_US: 'Juneteenth Día de Independencia Nacional',
        isFixedDate: true,
        type: 'federal',
        month: months.june,
        day: 19
    },
    {
        en_US: 'Independence Day',
        es_US: 'Día de la Independencia',
        isFixedDate: true,
        type: 'federal',
        month: months.july,
        day: 4
    },
    {
        en_US: 'Labor Day',
        es_US: 'Día Laboral',
        isFixedDate: false,
        type: 'federal',
        month: months.september,
        dayOfWeek: daysOfWeek.monday,
        weekNumber: 1
    },
    {
        en_US: 'Columbus Day',
        es_US: 'Día de la Raza',
        isFixedDate: false,
        type: 'federal',
        month: months.october,
        dayOfWeek: daysOfWeek.monday,
        weekNumber: 2
    },
    {
        en_US: 'Veterans Day',
        es_US: 'Día de los Veteranos',
        isFixedDate: true,
        type: 'federal',
        month: months.november,
        day: 11
    },
    {
        en_US: 'Thanksgiving Day',
        es_US: 'Día de Gracias',
        isFixedDate: false,
        type: 'federal',
        month: months.november,
        dayOfWeek: daysOfWeek.thursday,
        weekNumber: 4
    },
    {
        en_US: 'Christmas Day',
        es_US: 'Navidad',
        isFixedDate: true,
        type: 'federal',
        month: months.december,
        day: 25
    }
];

function getHolidayList(year, culture) {
    let holidays = rules.map(r => ({
            name: r[culture],
            type: r.type,
            date: r.isFixedDate ? new Date(year, r.month, r.day) : getNthDayOfNthWeek(new Date(year, r.month, 1), r.dayOfWeek, r.weekNumber)
        })
    );


    let holidaysObservedOnAnotherDay = holidays
        .filter(h => weekendDays.includes(h.date.getDay()))
        .map(h => ({
                name: `${h.name} (${getObservedText(culture)})`,
                type: h.type,
                date: addDays(h.date, h.date.getDay() == daysOfWeek.saturday ? -1 : 1)
            })
        );

    return holidays.concat(holidaysObservedOnAnotherDay).sort((a, b) => a.date - b.date);
}

function getNthDayOfNthWeek(date, dayOfWeek, weekNumber) {
    let firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstDayOfWeekOfMonth = addDays(firstOfMonth, 6 - addDays(firstOfMonth, -1 * (dayOfWeek + 1)).getDay());
    let result = addDays(firstDayOfWeekOfMonth,(weekNumber - 1) * 7);

    return result >= addMonths(firstOfMonth, 1) ? addDays(result, -7) : result;
}

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

function getObservedText(culture) {
    return culture.includes('es') ? 'observado' : 'observed';
}

module.exports.getHolidayList = getHolidayList;