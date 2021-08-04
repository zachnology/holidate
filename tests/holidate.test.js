const holidate = require('../src/holidate');

test('es language working', () => {
    let holidays = holidate.getHolidays(2021, 'us', 'es');
    expect(holidays.some(h => h.name.includes('Navidad'))).toBe(true);
});