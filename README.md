# genshin_guide front-end development documentation

## To-do list

Document to be updated regularly.
Completion bar: [/////.....] in rough %.

### Sections

\* working on

- Home          [/////.....] * (change menu colour based on chosen element)
- Characters    [//////....]
- Weapons       [/.........]
- Enemies       [/.........]
- Guides        [/.........]
- My Account    [//........]

#### Home

- Background image
- Menu colors based on chosen element
- Login button
- Create account button
- Display latest news or Guides

#### Characters

- Collect all remaining images
- Finish displaying all information
- Page de modification de personnage

#### Weapons

- Display weapons menu
- Create weapon information page
- Collect all images

#### Enemies

- Display enemy menu
- Create enemy information page
- Collect all images

#### Guides

- Requries account setup and admin login: waiting for back-end setup
- Create guide page
- Write some example content
- Display content dynamically

#### My Account

- Waiting for back-end before continuing
- 'my account' page and all its structure and styles

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
