const unitedStatesHolidayService = require('../../src/localization/united-states-holiday-service');

let controlSet2020 = [
    {
        name: "New Year's Day",
        date: new Date(2020, 0, 1)
    },
    {
        name: 'Martin Luther King Jr. Day',
        date: new Date(2020, 0, 20)
    },
    {
        name: "Washington's Birthday",
        date: new Date(2020, 1, 17)
    },
    {
        name: 'Memorial Day',
        date: new Date(2020, 4, 25)
    },
    {
        name: 'Juneteenth National Independence Day',
        date: new Date(2020, 5, 19)
    },
    {
        name: 'Independence Day (observed)',
        date: new Date(2020, 6, 3)
    },
    {
        name: 'Independence Day',
        date: new Date(2020, 6, 4)
    },
    {
        name: 'Labor Day',
        date: new Date(2020, 8, 7)
    },
    {
        name: 'Columbus Day',
        date: new Date(2020, 9, 12)
    },
    {
        name: 'Veterans Day',
        date: new Date(2020, 10, 11)
    },
    {
        name: 'Thanksgiving Day',
        date: new Date(2020, 10, 26)
    },
    {
        name: 'Christmas Day',
        date: new Date(2020, 11, 25)
    }
];

let controlSet2021 = [
    {
        name: "New Year's Day",
        date: new Date(2021, 0, 1)
    },
    {
        name: 'Martin Luther King Jr. Day',
        date: new Date(2021, 0, 18)
    },
    {
        name: "Washington's Birthday",
        date: new Date(2021, 1, 15)
    },
    {
        name: 'Memorial Day',
        date: new Date(2021, 4, 31)
    },
    {
        name: 'Juneteenth National Independence Day (observed)',
        date: new Date(2021, 5, 18)
    },
    {
        name: 'Juneteenth National Independence Day',
        date: new Date(2021, 5, 19)
    },
    {
        name: 'Independence Day',
        date: new Date(2021, 6, 4)
    },
    {
        name: 'Independence Day (observed)',
        date: new Date(2021, 6, 5)
    },
    {
        name: 'Labor Day',
        date: new Date(2021, 8, 6)
    },
    {
        name: 'Columbus Day',
        date: new Date(2021, 9, 11)
    },
    {
        name: 'Veterans Day',
        date: new Date(2021, 10, 11)
    },
    {
        name: 'Thanksgiving Day',
        date: new Date(2021, 10, 25)
    },
    {
        name: 'Christmas Day (observed)',
        date: new Date(2021, 11, 24)
    },
    {
        name: 'Christmas Day',
        date: new Date(2021, 11, 25)
    }
];

let controlSet2022 = [
    {
        name: "New Year's Day (observed)",
        date: new Date(2021, 11, 31)
    },
    {
        name: "New Year's Day",
        date: new Date(2022, 0, 1)
    },
    {
        name: 'Martin Luther King Jr. Day',
        date: new Date(2022, 0, 17)
    },
    {
        name: "Washington's Birthday",
        date: new Date(2022, 1, 21)
    },
    {
        name: 'Memorial Day',
        date: new Date(2022, 4, 30)
    },
    {
        name: 'Juneteenth National Independence Day',
        date: new Date(2022, 5, 19)
    },
    {
        name: 'Juneteenth National Independence Day (observed)',
        date: new Date(2022, 5, 20)
    },
    {
        name: 'Independence Day',
        date: new Date(2022, 6, 4)
    },
    {
        name: 'Labor Day',
        date: new Date(2022, 8, 5)
    },
    {
        name: 'Columbus Day',
        date: new Date(2022, 9, 10)
    },
    {
        name: 'Veterans Day',
        date: new Date(2022, 10, 11)
    },
    {
        name: 'Thanksgiving Day',
        date: new Date(2022, 10, 24)
    },
    {
        name: 'Christmas Day',
        date: new Date(2022, 11, 25)
    },
    {
        name: 'Christmas Day (observed)',
        date: new Date(2022, 11, 26)
    },
];

test ('2020 Dates are correct', () => {
    let holidayList = unitedStatesHolidayService.getHolidayList(2020, 'en_US');
    let allThere = controlSet2020.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2021 Dates are correct', () => {
    let holidayList = unitedStatesHolidayService.getHolidayList(2021, 'en_US');
    let allThere = controlSet2021.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});

test ('2022 Dates are correct', () => {
    let holidayList = unitedStatesHolidayService.getHolidayList(2022, 'en_US');
    let allThere = controlSet2022.every(c => holidayList.some(h => h.date.getTime() == c.date.getTime() && h.name == c.name));
    expect(allThere).toBe(true);
});