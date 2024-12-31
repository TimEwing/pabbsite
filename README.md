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