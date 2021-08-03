const util = require('../util');

let federalHolidayRules = [
    {
        en: "New Year's Day",
        es: "Año Nuevo",
        isFixedDate: true,
        tags: [ 'federal' ],
        month: util.months.january,
        day: 1
    },
    {
        en: 'Martin Luther King Jr. Day',
        es: "Día de Martin Luther King Jr.",
        isFixedDate: false,
        tags: [ 'federal' ],
        month: util.months.january,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 3
    },
    {
        en: "Washington's Birthday",
        es: "Cumpleaños de Washington",
        isFixedDate: false,
        tags: [ 'federal' ],
        month: util.months.february,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 3
    },
    {
        en: 'Memorial Day',
        es: 'Día Conmemorativo',
        isFixedDate: false,
        tags: [ 'federal' ],
        month: util.months.may,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 5
    },
    {
        en: 'Juneteenth National Independence Day',
        es: 'Juneteenth Día de Independencia Nacional',
        isFixedDate: true,
        tags: [ 'federal' ],
        month: util.months.june,
        day: 19
    },
    {
        en: 'Independence Day',
        es: 'Día de la Independencia',
        isFixedDate: true,
        tags: [ 'federal' ],
        month: util.months.july,
        day: 4
    },
    {
        en: 'Labor Day',
        es: 'Día Laboral',
        isFixedDate: false,
        tags: [ 'federal' ],
        month: util.months.september,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 1
    },
    {
        en: 'Columbus Day',
        es: 'Día de la Raza',
        isFixedDate: false,
        tags: [ 'federal' ],
        month: util.months.october,
        dayOfWeek: util.daysOfWeek.monday,
        weekNumber: 2
    },
    {
        en: 'Veterans Day',
        es: 'Día de los Veteranos',
        isFixedDate: true,
        tags: [ 'federal' ],
        month: util.months.november,
        day: 11
    },
    {
        en: 'Thanksgiving Day',
        es: 'Día de Gracias',
        isFixedDate: false,
        tags: [ 'federal' ],
        month: util.months.november,
        dayOfWeek: util.daysOfWeek.thursday,
        weekNumber: 4
    },
    {
        en: 'Christmas Day',
        es: 'Navidad',
        isFixedDate: true,
        tags: [ 'federal', 'religious', 'christianity' ],
        month: util.months.december,
        day: 25
    }
];

let otherHolidayRules = [
    {
        en: "Groundhog Day",
        es: "Día de la Marmota",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.february,
        day: 2
    },
    {
        en: "Valentine's Day",
        es: "Día de San Valentín",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.february,
        day: 14
    },
    {
        en: "Saint Patrick's Day",
        es: "Día de San Patricio",
        isFixedDate: true,
        tags: [ 'non-federal', 'religious', 'christianity' ],
        month: util.months.march,
        day: 17
    },
    {
        en: "April Fool's Day",
        es: "Día de los Inocentes",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.april,
        day: 1
    },
    {
        en: "Cinco de Mayo",
        es: "Cinco de Mayo",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.may,
        day: 5
    },
    {
        en: "Mother's Day",
        es: "Día de la Madre",
        isFixedDate: false,
        tags: [ 'non-federal' ],
        month: util.months.may,
        dayOfWeek: util.daysOfWeek.sunday,
        weekNumber: 2
    },
    {
        en: "Father's Day",
        es: "Día del Padre",
        isFixedDate: false,
        tags: [ 'non-federal' ],
        month: util.months.june,
        dayOfWeek: util.daysOfWeek.sunday,
        weekNumber: 3
    },
    {
        en: "Patriot Day",
        es: "Día Patriota",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.september,
        day: 11
    },
    {
        en: "Halloween",
        es: "Víspera de Todos los Santos",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.october,
        day: 31
    },
    {
        en: "Christmas Eve",
        es: "Nochebuena",
        isFixedDate: true,
        tags: [ 'non-federal', 'religious', 'christianity' ],
        month: util.months.december,
        day: 24
    },
    {
        en: "New Year's Eve",
        es: "Víspera de Año Nuevo",
        isFixedDate: true,
        tags: [ 'non-federal' ],
        month: util.months.december,
        day: 31
    },
];

let easterHolidayRules = [
    {
        en: "Easter",
        es: "Pascua de Resurrección",
        tags: [ 'non-federal', 'religious', 'christianity' ],
        daysBeforeEaster: 0
    },
    {
        en: "Mardi Gras",
        es: "Mardi Gras",
        tags: [ 'non-federal', 'religious', 'christianity' ],
        daysBeforeEaster: 47
    },
    {
        en: "Ash Wednesday",
        es: "Miércoles de Ceniza",
        tags: [ 'non-federal', 'religious', 'christianity' ],
        daysBeforeEaster: 46
    },
    {
        en: "Palm Sunday",
        es: "Domingo de palma",
        tags: [ 'non-federal', 'religious', 'christianity' ],
        daysBeforeEaster: 7
    },
    {
        en: "Good Friday",
        es: "El Viernes Santo",
        tags: [ 'non-federal', 'religious', 'christianity' ],
        daysBeforeEaster: 2
    }
];

function getHolidayList(year, language) {
    return getFederalHolidays(year, language)
        .concat(getOtherHolidays(year, language))
        .concat(getEasterHolidays(year, language))
        .sort((a, b) => a.date - b.date);
}

function getFederalHolidays(year, language) {
    let holidays = federalHolidayRules.map(r => ({
            name: r[language],
            tags: r.tags,
            natural: true,
            date: r.isFixedDate
                ? new Date(year, r.month, r.day)
                : util.getNthDayOfNthWeek(new Date(year, r.month, 1), r.dayOfWeek, r.weekNumber)
        })
    );

    let holidaysObservedOnAnotherDay = holidays
        .filter(h => util.weekendDays.includes(h.date.getDay()))
        .map(h => ({
                name: `${h.name} (${getObservedText(language)})`,
                tags: h.tags,
                natural: false,
                date: util.addDays(h.date, h.date.getDay() == util.daysOfWeek.saturday ? -1 : 1)
            })
        );

    return holidays.concat(holidaysObservedOnAnotherDay);
}

function getOtherHolidays(year, language) {
    return otherHolidayRules.map(r => ({
            name: r[language],
            tags: r.tags,
            natural: true,
            date: r.isFixedDate ? new Date(year, r.month, r.day) : util.getNthDayOfNthWeek(new Date(year, r.month, 1), r.dayOfWeek, r.weekNumber)
        })
    );
}

function getEasterHolidays(year, language) {
    let easter = getEaster(year);

    return easterHolidayRules.map(r => ({
            name: r[language],
            tags: r.tags,
            natural: true,
            date: util.addDays(easter, -r.daysBeforeEaster)
        })
    );
}

function getObservedText(language) {
    return language.includes('es') ? 'observado' : 'observed';
}

let computus = [
    { goldenNumber: 1, epact: 29, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 14 },
    { goldenNumber: 2, epact: 10, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 3 },
    { goldenNumber: 3, epact: 21, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 23 },
    { goldenNumber: 4, epact: 2, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 11 },
    { goldenNumber: 5, epact: 13, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 31 },
    { goldenNumber: 6, epact: 24, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 18 },
    { goldenNumber: 7, epact: 5, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 8 },
    { goldenNumber: 8, epact: 16, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 28 },
    { goldenNumber: 9, epact: 27, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 16 },
    { goldenNumber: 10, epact: 8, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 5 },
    { goldenNumber: 11, epact: 19, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 25 },
    { goldenNumber: 12, epact: 0, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 13 },
    { goldenNumber: 13, epact: 11, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 2 },
    { goldenNumber: 14, epact: 22, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 22 },
    { goldenNumber: 15, epact: 3, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 10 },
    { goldenNumber: 16, epact: 14, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 30 },
    { goldenNumber: 17, epact: 25, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 17 },
    { goldenNumber: 18, epact: 6, paschalFullMoonMonth: util.months.april, paschalFullMoonDate: 7 },
    { goldenNumber: 19, epact: 27, paschalFullMoonMonth: util.months.march, paschalFullMoonDate: 27 },
]

function getComputusGoldenNumber(year) {
    return year % 19 + 1;
}

function getEaster(year) {
    let gn = getComputusGoldenNumber(year);
    let computusOutput = computus[gn - 1];
    let fullMoonDate = new Date(year, computusOutput.paschalFullMoonMonth, computusOutput.paschalFullMoonDate);
    let easter = util.addDays(fullMoonDate, 7 - fullMoonDate.getDay());
    return easter;
}

module.exports.getHolidayList = getHolidayList;