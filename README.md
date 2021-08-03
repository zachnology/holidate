# Welcome to holidate 📅
![Version](https://github.com/zachnology/holidate/actions/workflows/npm-publish.yml/badge.svg)
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

let holidays = holidate.getHolidays();
```

### Example output
```json
[
    {
        "name": "New Year's Day",
        "tags": [ "federal" ],
        "natural": true,
        "date": "2021-01-01T07:00:00.000Z"
    },
    {
        "name": "Martin Luther King Jr. Day",
        "tags": [ "federal" ],
        "natural": true,
        "date": "2021-01-18T07:00:00.000Z"
    },
    {
        "name": "Washington's Birthday",
        "tags": [ "federal" ],
        "natural": true,
        "date": "2021-02-15T07:00:00.000Z"
    },
    {
        "name": "Memorial Day",
        "tags": [ "federal" ],
        "natural": true,
        "date": "2021-05-31T07:00:00.000Z"
    },
    {
        "name": "Juneteenth National Independence Day (observed)",
        "tags": [ "federal" ],
        "natural": false,
        "date": "2021-06-18T07:00:00.000Z"
    },
    {
        "name": "Juneteenth National Independence Day",
        "tags": [ "federal" ],
        "natural": true,
        "date": "2021-06-19T07:00:00.000Z"
    },
    // ...
]
```
## API

### getHolidays(year, country, language)

| Parameter | Type | Description |
|-----------|------|-------------|
| year | number | The holidays for this year will be returned. Defaults to the current year. |
| country | string | The [ISO 3166-1 alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. Defaults to 'US'. |
| language | string | The [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code for the language the holiday names will be returned in. Defaults to 'en'. |

### Response

Array of [holiday](#holiday) objects

### Holiday 

| Field | Type | Description |
|-------|------|-------------|
| name | string | Name of the holiday. |
| tags | array of strings | Descriptors that can be used to filter the holiday list. For example, Easter in the United States has these tags: `[ 'non-federal', 'religious', 'christianity' ]` |
| natural | boolean | Whether the holiday object represents the actual holiday date or the date it is being observed in a given year. For example if the holiday falls on a weekend but is observed on a weekday to preserve the work holiday. |
| date | Date | Date of the holiday.

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