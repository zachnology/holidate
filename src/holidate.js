const unitedStatesHolidayService = require('./localization/united-states-holiday-service');

let defaultCulture = 'en_US';

let cultureMap = {
    en_US: unitedStatesHolidayService,
    es_US: unitedStatesHolidayService
}

function getHolidays(year, culture) {
    year = year || new Date().getFullYear();
    culture = culture || defaultCulture;
    let holidayService = cultureMap[culture];

    return holidayService.getHolidayList(year, culture);
}

function isHoliday(date, culture) {
    culture = culture || defaultCulture;
    let holidayService = cultureMap[culture];
    
    let timelessDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let holidays =  holidayService.getHolidayList(timelessDate.getFullYear(), culture);
    return holidays.some(h => h.date.getTime() == timelessDate.getTime());
}

module.exports = { getAllHolidays: getHolidays, isHoliday };