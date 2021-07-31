const unitedStatesHolidayService = require('./localization/united-states-holiday-service');

let defaultCountry = 'US';
let defaultLanguage = 'en';

let countryMap = {
    US: unitedStatesHolidayService,
}

function getHolidays(year, country, language) {
    let holidayService = countryMap[(country || defaultCountry).toUpperCase()];
    return holidayService.getHolidayList(year || new Date().getFullYear(), (language || defaultLanguage).toLowerCase());
}

function isHoliday(date, country) {
    let holidayService = countryMap[(country || defaultCountry).toUpperCase()];
    
    let timelessDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let holidays =  holidayService.getHolidayList(timelessDate.getFullYear(), defaultLanguage);
    return holidays.some(h => h.date.getTime() == timelessDate.getTime());
}

module.exports = { getAllHolidays: getHolidays, isHoliday };