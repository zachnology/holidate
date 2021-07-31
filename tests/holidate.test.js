const holidate = require('../src/holidate');

test('Christmas 2021 is holiday', () => {
    let christmas2021 = new Date(2021, 11, 25);
    expect(holidate.isHoliday(christmas2021)).toBe(true);
});

test('es language working', () => {
    let holidays = holidate.getAllHolidays(2021, 'us', 'es');
    expect(holidays.some(h => h.name.includes('Navidad'))).toBe(true);
});