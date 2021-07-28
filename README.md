# Welcome to holidate 📅
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
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

// defaults to en_US culture
// i.e. USA Holidays with names displayed in English
let holidays = holidate.getAllHolidays(2021);

// or you can provide a culture.
// This will return USA Holidays with names displayed in Spanish.
let spanishHolidays = holidate.getAllHolidays(2021, 'es_US');

// to check if a date is a holiday
let christmas = new Date(2021, 11, 25);
let chirstmasIsHoliday = holidate.isHoliday(christmas);

// you can control which country's holiday list is checked
// by passing the culture as the second parameter
let chirstmasIsHolidayInUSA = holidate.isHoliday(christmas, 'en_US');
```

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