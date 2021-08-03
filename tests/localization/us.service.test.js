const usHolidayService = require('../../src/localization/us.service');

let federalControlSet2020 = [
    { name: "New Year's Day", date: new Date(2020, 0, 1) },
    { name: 'Martin Luther King Jr. Day', date: new Date(2020, 0, 20) },
    { name: "Washington's Birthday", date: new Date(2020, 1, 17) },
    { name: 'Memorial Day', date: new Date(2020, 4, 25) },
    { name: 'Juneteenth National Independence Day', date: new Date(2020, 5, 19) },
    { name: 'Independence Day (observed)', date: new Date(2020, 6, 3) },
    { name: 'Independence Day', date: new Date(2020, 6, 4) },
    { name: 'Labor Day', date: new Date(2020, 8, 7) },
    { name: 'Columbus Day', date: new Date(2020, 9, 12) },
    { name: 'Veterans Day', date: new Date(2020, 10, 11) },
    { name: 'Thanksgiving Day', date: new Date(2020, 10, 26) },
    { name: 'Christmas Day', date: new Date(2020, 11, 25) }
];

let federalControlSet2021 = [
    { name: "New Year's Day", date: new Date(2021, 0, 1) },
    { name: 'Martin Luther King Jr. Day', date: new Date(2021, 0, 18) },
    { name: "Washington's Birthday", date: new Date(2021, 1, 15) },
    { name: 'Memorial Day', date: new Date(2021, 4, 31) },
    { name: 'Juneteenth National Independence Day (observed)', date: new Date(2021, 5, 18) },
    { name: 'Juneteenth National Independence Day', date: new Date(2021, 5, 19) },
    { name: 'Independence Day', date: new Date(2021, 6, 4) },
    { name: 'Independence Day (observed)', date: new Date(2021, 6, 5) },
    { name: 'Labor Day', date: new Date(2021, 8, 6) },
    { name: 'Columbus Day', date: new Date(2021, 9, 11) },
    { name: 'Veterans Day', date: new Date(2021, 10, 11) },
    { name: 'Thanksgiving Day', date: new Date(2021, 10, 25) },
    { name: 'Christmas Day (observed)', date: new Date(2021, 11, 24) },
    { name: 'Christmas Day', date: new Date(2021, 11, 25) }
];

let federalControlSet2022 = [
    { name: "New Year's Day (observed)", date: new Date(2021, 11, 31) },
    { name: "New Year's Day", date: new Date(2022, 0, 1) },
    { name: 'Martin Luther King Jr. Day', date: new Date(2022, 0, 17) },
    { name: "Washington's Birthday", date: new Date(2022, 1, 21) },
    { name: 'Memorial Day', date: new Date(2022, 4, 30) },
    { name: 'Juneteenth National Independence Day', date: new Date(2022, 5, 19) },
    { name: 'Juneteenth National Independence Day (observed)', date: new Date(2022, 5, 20) },
    { name: 'Independence Day', date: new Date(2022, 6, 4) },
    { name: 'Labor Day', date: new Date(2022, 8, 5) },
    { name: 'Columbus Day', date: new Date(2022, 9, 10) },
    { name: 'Veterans Day', date: new Date(2022, 10, 11) },
    { name: 'Thanksgiving Day', date: new Date(2022, 10, 24) },
    { name: 'Christmas Day', date: new Date(2022, 11, 25) },
    { name: 'Christmas Day (observed)', date: new Date(2022, 11, 26) },
];

let easterControlSet2020 = [
    { name: "Easter", date: new Date(2020, 3, 12) },
    { name: "Mardi Gras", date: new Date(2020, 1, 25) },
    { name: "Ash Wednesday", date: new Date(2020, 1, 26) },
    { name: "Palm Sunday", date: new Date(2020, 3, 5) },
    { name: "Good Friday", date: new Date(2020, 3, 10) },
];

let easterControlSet2021 = [
    { name: "Easter", date: new Date(2021, 3, 4) },
    { name: "Mardi Gras", date: new Date(2021, 1, 16) },
    { name: "Ash Wednesday", date: new Date(2021, 1, 17) },
    { name: "Palm Sunday", date: new Date(2021, 2, 28) },
    { name: "Good Friday", date: new Date(2021, 3, 2) },
];

let easterControlSet2022 = [
    { name: "Easter", date: new Date(2022, 3, 17) },
    { name: "Mardi Gras", date: new Date(2022, 2, 1) },
    { name: "Ash Wednesday", date: new Date(2022, 2, 2) },
    { name: "Palm Sunday", date: new Date(2022, 3, 10) },
    { name: "Good Friday", date: new Date(2022, 3, 15) },
];

test ('2020 Federal Holiday Dates are correct', () => {
    let holidayList = usHolidayService.getHolidayList(2020, 'en');
    let allThere = federalControlSet2020.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2021 Federal Holiday Dates are correct', () => {
    let holidayList = usHolidayService.getHolidayList(2021, 'en');
    let allThere = federalControlSet2021.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2022 Federal Holiday Dates are correct', () => {
    let holidayList = usHolidayService.getHolidayList(2022, 'en');
    let allThere = federalControlSet2022.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2020 Easter Dates are correct', () => {
    let holidayList = usHolidayService.getHolidayList(2020, 'en');
    let allThere = easterControlSet2020.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2021 Easter Dates are correct', () => {
    let holidayList = usHolidayService.getHolidayList(2021, 'en');
    let allThere = easterControlSet2021.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2022 Easter Dates are correct', () => {
    let holidayList = usHolidayService.getHolidayList(2022, 'en');
    let allThere = easterControlSet2022.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});