# genshin_guide front-end development documentation

## To-do list

Document to be updated regularly.
Completion bar: [/////.....] in rough %.

### Sections

\* working on

- Home          [/////.....]
- Characters    [//////....]
- Weapons       [//........]
- Enemies       [/.........]
- Guides        [///.......]
- My Account    [//........]

#### Home

- Background image
- Login button
- Display latest news or Guides

#### Characters

- Collect all remaining images
- Finish displaying all information
- Character edit page

#### Weapons

- Display weapons menu
- Create weapon information page
- Collect all images
- Weapon edit page

#### Enemies

- Display enemy menu
- Create enemy information page
- Collect all images
- Enemy edit page

#### Guides

- Requries account setup and admin login: waiting for back-end setup
- Create guide page
- Write some example content
- Display content dynamically

#### My Account

- Waiting for back-end before continuing

## Conventions

### Structure

#### Views

App.vue contains entire website functionality.
Each menu option pertains to a single folder in @/Views which contains all relevant pages.

#### Components

Components for reusable code.

### Naming conventions

#### HTML/CSS

- Classes: name-of-class
- IDs: name_of_id

#### JS

##### Views and components

- Views: NameView.vue
- Components: Name.vue

##### Properties and variables

Declare using 'let', use camelCase.

##### Methods and functions

Use camelCase.
