const usHolidayService = require('./localization/us.service');

let defaultCountry = 'us';
let defaultLanguage = 'en';

let countryMap = {
    us: usHolidayService,
}

function getHolidays(year, country, language) {
    let holidayService = countryMap[(country || defaultCountry).toLowerCase()];
    return holidayService.getHolidayList(year || new Date().getFullYear(), (language || defaultLanguage).toLowerCase());
}

function isHoliday(date, country) {
    let holidayService = countryMap[(country || defaultCountry).toLowerCase()];
    
    let timelessDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let holidays =  holidayService.getHolidayList(timelessDate.getFullYear(), defaultLanguage);
    return holidays.some(h => h.date.getTime() == timelessDate.getTime());
}

module.exports = { getHolidays: getHolidays, isHoliday };