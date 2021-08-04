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

module.exports = { getHolidays: getHolidays };