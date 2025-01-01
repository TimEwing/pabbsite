# PABBSITE
## The Perfectly Adequate Big Booty Website

This is the github repo for the website for the brass band that is, maybe, the most band of all time

## Local dev
Dude its a fucking static html website. If google hadn't decided to be assholes and pushed the whole CORS thing through, you could have literally just opened the root `index.html`, but since they did you need to run a vague approximation of an actual server like `python3 -m http.server 6969`. Then just go to `localhost:6969` and it should just work.

## index.html
So I may or may not have done some slightly cursed stuff here. I didn't wanna have to copy-paste the `index.html` file everywhere, so I made symlinks from each path back to the root `index.html`.

If you want a new path on the site, you'll need to:
### Linux/Mac
`mkdir newpath`
`cd newpath`
`touch newpath/content.html`
`ln -s ../index.html index.html`

### Windows
`install WSL`
`try the unix instructions`
`probably have them fail`
`go fuck yourself`

You should also make the `content.html`, `custom.css`, and `custom.js` files into your new dir. They can be empty, they just need to exist.

## Cursed Calendar bullshit
TL;DR: Google calendars have restrictive CORS headers, but google sheets don't. I used a google app script to get around it.

The app script lives here: https://script.google.com/u/1/home/projects/1To5q8m8r9pbT0tV9xzc35AnHMj034iSGVqLccSU4F30bnmnp5FCm3D4J
And the google sheet is here: https://docs.google.com/spreadsheets/d/17Xt_vvbrcIPI0OprDVvFlaGsUkCsuq7dgK60tbH6AsM

The app script triggers every time the calendar updates, which plops the event time, name, and description in the google sheet.
