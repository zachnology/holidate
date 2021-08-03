const util = require('../util');

let rules = [
    {
        en: "New Year's Day",
        es: "Año Nuevo",
        isFixedDate: true,
        scope: 'federal',
        month: util.months.january,
        day: 1
    },
    {
        en: 'Martin Luther King Jr. Day',
        es: "Día de Martin Luther King Jr.",
        isFixedDate: false,
        scope: 'federal',
        month: util.months.january,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 3
    },
    {
        en: "Washington's Birthday",
        es: "Cumpleaños de Washington",
        isFixedDate: false,
        scope: 'federal',
        month: util.months.february,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 3
    },
    {
        en: 'Memorial Day',
        es: 'Día Conmemorativo',
        isFixedDate: false,
        scope: 'federal',
        month: util.months.may,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 5
    },
    {
        en: 'Juneteenth National Independence Day',
        es: 'Juneteenth Día de Independencia Nacional',
        isFixedDate: true,
        scope: 'federal',
        month: util.months.june,
        day: 19
    },
    {
        en: 'Independence Day',
        es: 'Día de la Independencia',
        isFixedDate: true,
        scope: 'federal',
        month: util.months.july,
        day: 4
    },
    {
        en: 'Labor Day',
        es: 'Día Laboral',
        isFixedDate: false,
        scope: 'federal',
        month: util.months.september,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 1
    },
    {
        en: 'Columbus Day',
        es: 'Día de la Raza',
        isFixedDate: false,
        scope: 'federal',
        month: util.months.october,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 2
    },
    {
        en: 'Veterans Day',
        es: 'Día de los Veteranos',
        isFixedDate: true,
        scope: 'federal',
        month: util.months.november,
        day: 11
    },
    {
        en: 'Thanksgiving Day',
        es: 'Día de Gracias',
        isFixedDate: false,
        scope: 'federal',
        month: util.months.november,
        dayOfWeek: util.daysOfWeek.thursday,
        weekNumber: 4
    },
    {
        en: 'Christmas Day',
        es: 'Navidad',
        isFixedDate: true,
        scope: 'federal',
        month: util.months.december,
        day: 25
    }
];

function getHolidayList(year, language) {
    let holidays = rules.map(r => ({
            name: r[language],
            scope: r.scope,
            natural: true,
            date: r.isFixedDate ? new Date(year, r.month, r.day) : getNthDayOfNthWeek(new Date(year, r.month, 1), r.dayOfWeek, r.weekNumber)
        })
    );


    let holidaysObservedOnAnotherDay = holidays
        .filter(h => util.weekendDays.includes(h.date.getDay()))
        .map(h => ({
                name: `${h.name} (${getObservedText(language)})`,
                scope: h.scope,
                natural: false,
                date: addDays(h.date, h.date.getDay() == util.daysOfWeek.saturday ? -1 : 1)
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

function getObservedText(language) {
    return language.includes('es') ? 'observado' : 'observed';
}

module.exports.getHolidayList = getHolidayList;