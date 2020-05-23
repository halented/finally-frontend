# FINALLY! AN APP FOR EXTROVERTS

This project is hosted live at https://finally-app.herokuapp.com/#/

Are you an extrovert? Do you find yourself confused and concerned when it comes to respecting the needs of your introvert friends?

Finally, there is an app for you! With **FINALLY!** AN APP FOR EXTROVERTS, you can:

* Log your introvert friends and their custom quiet time needs!
* View cute animal versions of your introvert friends on your homepage, like this!

![Image of Homepage](https://raw.githubusercontent.com/halented/finally-frontend/master/homepage.png)
* Track when one of your introvert friends is ready to hang out, and keep records of your activities together!
* View graphed metrics of your hangout history!

You can checkout the code for backend here: https://github.com/halented/finally-backend

## Inspiration
- I thought of this idea in my sleep. I'm an introvert, and I deeply love my friends, but they never seem to understand how much alone time I need. I thought it would be funny if there were an app which they could check to see whether or not I was ready to hangout yet, instead of asking me to hangout constantly and being told "no" most of the time.
## What it does
- It's designed to be used by extroverts: you can log in, enter your friends' name and their favorite activity, and log when you hang out with that friend. When you "hangout" with a friend, that friend goes on cooldown and you can't hangout with them again until....finally! You can hang out with them after the cooldown ends.
## How I built it
- It's built with React.js. While building this project, I learned to use React hooks as well, and I incorporated Formidable's Victory graphing library for metrics on a user's hangouts. The backend is in Ruby on Rails.
## Challenges I ran into
- I learned a lot about how you can style things in React. I wrote all the styles in a separate file and imported them as necessary into other React components. It was fun to figure out how you can make specific style elements reusable, and combine them on the fly using both destructuring and Object.assign( ).
## Accomplishments that I'm proud of
- I really got confident with using CSS grids and flexboxes as complimentary forces in this project. I took some time away from the project to just do pure research on the core truths about these technologies, and it paid off.
## What's next for Finally! An App for Extroverts
- The backend has a lot of data stored that v1 of the project hasn't made use of. I plan on allowing users to customize their introverts' cooldowns, and log when their friends have engaged in their favorite activity -- which should decrease the cooldown time. There is also a lot of room for increasing the details of the hangouts that are logged, to add purposes, equipment, length, and location of a hangout. All of that will make for cool graphing data once the forms and frontend are more fleshed out.

<small>Officaily licensed by [MIT](https://choosealicense.com/licenses/mit/)</small>
<small><details><summary>Copyright (c) 2019 Hal Dunn </summary></small>

<small>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</small>
