const unitedStatesHolidayService = require('../../src/localization/united-states-holiday-service');

test('Chirstmas 2021 is correct', () => {
    let christmas2021 = new Date(2021, 11, 25);
    let holidayList = unitedStatesHolidayService.getHolidayList(2021, 'en_US');
    expect(holidayList.some(h => h.date.getTime() == christmas2021.getTime())).toBe(true);
});