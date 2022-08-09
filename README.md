# genshin_guide front-end development documentation

## To-do list

Document to be updated regularly.
Completion bar: [/////.....] in rough %.

### Sections

\* working on

- Home          [//////....]
- Characters    [///////...]
- Weapons       [//........] All features implemented for this version. Will not be taking further.
- Enemies       [/.........] All features implemented for this version. Will not be taking further.
- Guides        [///.......] *
- My Account    [//////....] All features implemented for this version. Will not be taking further.

#### Home

- Background image position shift down
- Display latest news or Guide

#### Characters

- Collect all remaining images
- Finish displaying all information
- Character info page:
  - text to uppercase
  - update comment on name
  - save logged in username to comment

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

- Write some example content
- Display content dynamically
- Decide on guide content and layout template

#### My Account

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
