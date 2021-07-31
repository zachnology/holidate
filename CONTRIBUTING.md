# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue or email before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

## Getting Started

### Vision
The vision for the project is to create a library that can calculate holidays for any country with holiday names in appropriate languages. Holidays should not be hardcoded. Instead the logic should be able to calculate the holiday date for any year future or past.

### Current State
Currently, only US federal holidays in English and Spanish are implemented.

### Task List
- [x] Add support for US federal holidays in English and Spanish
- [ ] Add support for non-federal US holidays
- [ ] Add support for your country and language
- [ ] Add support entities other than countries (group that are either a subset of a country OR groups that transcend country boarders)

### Structure
The main interface is in `src/holidate.js`. The main function `holidate.getHolidays(...)` returns an array of objects with with the following properties: name (string), type (string), and date (date). The type is used as a discriminator for convenient filtering. 

Each country's holiday logic should be contained in its own service in the `localization/` directory. The naming scheme of these services should be in the format `{ISO_country_code}.service.js`. Service classes should expose a method called `getHolidayList` that accepts parameters `year` and `language`.

Logic inside `/src/holidate.js` should provide mapping to the appropriate service based on country code.

Tests for each country reside in the `tests/` directory using the naming scheme `{ISO_country_code}.service.test.js`. Jest is used as the testing framework. Tests can be run with `npm run test`.

Helper collections and functions are stored in `src/util.js`.
### Contribution for a New Country
1. Create a new service class in the `localization/` directory using the name format `{ISO_country_code}.service.js`. Remember to add logic for multiple languages if applicable.
   
2. Add a test file in the `tests/` directory to test your code. The file name should be of format `{ISO_country_code}.service.test.js`. Include tests to verify correct holiday creation for the current year and at least one past and one future year.


3. Update `src/holidate.js` with the country code mapping for your new service.

### Can I make contributions other than adding a new country?
Yes! There will always be a need for supporting additional languages for the existing countries. You can also add support for additional holidays for an existing country.