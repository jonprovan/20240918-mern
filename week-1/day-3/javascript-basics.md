# JAVASCRIPT BASICS
- Created in 1995 by Brendan Eich in 10 days
- Working at Netscape
- create a scripting language for browsers, i.e., code that could be run client-side
- been updated over the years at various ECMAScript conferences
- ECMA = European Computer Manufacturers Association
- they intermittently develop and release new JS features
- all versions of JS are "transpilable" back to the original version, so it still works on older browsers

# NODE.JS
- a JS runtime (meaning an engine) that can run JS server-side
- can also be used to run JS on your computer without a browser
- we use it to fuel MERN servers (frontend, backend, etc.)

# JS BENEFITS
- widely adopted in basically all browsers
- tons of libraries/frameworks you can use (makes coding/functionality easier)
- transpilable via things like Babel

# JS QUIRKS AND ODDITIES
- JS is event-driven -- code only runs when an event occurs (waiting for events)
- scripting language -- not compiled (React, etc. will compile the "app" before being able to serve it)
- single-threaded!!
- only one thread, so how do we deal with asynchronous events?
- managed via the JS event loop -- async events are "kicked" off to the side and handled when there's an opening
- not technically object-oriented -- "prototypical inheritance"
- JS designed to do SOMETHING and not crash/fail
- as such, there are some strange things that occur with the code, we'll see those!