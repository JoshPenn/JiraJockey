JiraJockey
==========

To add to chrome
  - `menu > settings > extensions`
  - check the `Develper mode` box
  - select `Load unpacked extension`
  - load the JiraJockey directory

Functionality
=============

### Agile Board
  - Converts in sprint open ticket ticket id bar to a progress bar of sub tasks
  - Shades resolved tickets as grey
  - Shades in code review tickets as orange
  - Shades ready for QA tickets as green
  - Sets the goal line as gold bar
  - Shades tickets in the blocked epic as purple

### GitHub
  - Changes ticket in title to link to jira ticket
  - Adds useful commands below PR descriptions
    - branch and pull && delete branch at the moment
  - Converts localhost links in comments to clickable links, displaying only the path
  - Scans PR submission pages and restyles the button && adds a warning if debuggin code is found
  - adds a description template in the PR submit page

### Poller
  - all style changes listed above will execute every tenth of a second for 30 seconds to accommadate for AJAX requests and restyling in both
  - the poller will reset on click

### Jira and Git
  - after two minutes of inactiviy on the page, the poller will cease
  - the timer is reset on a mouse move event

### localhost:-
  - use the `jj` button to populate localhost forms
    - a hardcoded list of supported names/id's is maintained and must be updated if an unaccounted string is used

To Do
=====

- Jira
 - add buttons to hover to quickly navigate the agile board when moving tickets
 - shade tickets with 'is blocked by' attribute
 - ctrl + up or down - move the currently selected items to the preceding or following box

- Git
 - add logic to close tickets and assign to user
 - add 'post PR to jira' option to new PR submissions

- json
 - persistant focus on a subprop accross page loads
