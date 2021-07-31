# Welcome to holidate 📅
![Version](https://img.shields.io/badge/version-0.0.3-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/zachnology/holidate/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/zachnology/holidate)](https://github.com/zachnology/holidate/blob/master/LICENSE)

> JS library for calculating and validating holidays

### 🏠 [Homepage](https://github.com/zachnology/holidate#readme)

## Install

```sh
npm install holidate
```

## Usage
```js
const holidate = require('holidate');

// Get 2021 holidays in US with holiday names in English
let holidays = holidate.getHolidays(2021);

// returns:
// [
//   {
//     name: "New Year's Day",
//     type: 'federal',
//     date: 2021-01-01T07:00:00.000Z
//   },
//   {
//     name: 'Martin Luther King Jr. Day',
//     type: 'federal',
//     date: 2021-01-18T07:00:00.000Z
//   },
//   {
//     name: "Washington's Birthday",
//     type: 'federal',
//     date: 2021-02-15T07:00:00.000Z
//   },
//   // ...
// ]

// Get 2021 holidays in Mexico with holiday names in the default language
let mexicoHolidays = holidate.getHolidays(2021, 'MX');

// Get 2021 holidays in Canada with holiday names in French
let canadaHolidays = holidate.getHolidays(2021, 'CA', 'fr');

// Check if a date is a holiday
let chirstmasIsHoliday = holidate.isHoliday(new Date(2021, 11, 25));

// Check if date is a holiday in a given country
let chirstmasIsHolidayInGreatBritain = holidate.isHoliday(new Date(2021, 11, 25), 'GB');
```

Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) alpha-2 standard.

Language codes follow the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard

## Author

👤 **zachnology**

* Github: [@zachnology](https://github.com/zachnology)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/zachnology/holidate/issues). You can also take a look at the [contributing guide](https://github.com/zachnology/holidate/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [zachnology](https://github.com/zachnology).

This project is [MIT](https://github.com/zachnology/holidate/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_