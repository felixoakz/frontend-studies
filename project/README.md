# Cheat Sheet Central 1.0
#### Video Demo:  <URL HERE>
#### Description:


___
### intro:
Mostly when we are learning a new thing, we can often get a bit anxious about the amount of information we find. This is because there are a LOT of shortcuts and commands in the various tools we need to learn. And we still need to master and use all of this while we're learning and building even bigger things.

### What is it:
The project i decided upon is a web application that renders a simple and practical table with a list of cheat sheet from different tecnologies.
It is designed for a quick consulting on syntax to run a SQL querry, finding code snippet from a language or learn a keyboard shortcut for VSCODE.

No login required, no session being used. One of the main goals is to be a multi-language fast rendering web application for people from all around the world to use. This allows us to easily identify what really matters. We can then gradually learn and use those more important commands until it becomes natural, giving us more time and energy to focus on what really matters right now.

### The idea:
The idea was born while i was learning a lot of different technologies during cs50, having to memorize linux terminal commands, vscode keyboard shortcuts, python, Js, HTML and CSS sintaxes, plus various of other like Jinja was a little too much and got me overwhelmed and with a little impostor sindrome. I noted it was an real world issue when i constantly saw a lot of scattered JPEG and PNG files scattered around the internet with different cheat sheets of differents tecnologies, and it would be great if we went ust to a single page on the web for consulting instead of losing time checking for help everywhere.

I confirmed that was a commom practice between developers when i constantly saw professor David checking his own cheat sheet for writing HTML viewport meta tags and he said that it was ok, nobody memorizes everything and its impossible because tecnologies are always appearing and changing. We need to use our heads as a processor and not as a hard drive.

Why a web application and not a local runned app? Because i strongly think that together with microprocessors, the way the internet is implemented are the 2 greater tools humankind every created. All apps soon are gonna become web apps and also i wanted the possibility to help as much as people i can.


### The execution:
The execution itself is a better constructed version of the "homepage" project, but this time using a Flask controller and just 3 HTML templates instead of the first time around that i created it statically with just HTML and CSS, writing every table row by hand directly on HTML.
As it is: It has the layout HTML file, a index HTML file and a sheet HTML file. The Flask engine controller with just 1 route takes input from the selected technology via POST from the index page and renders any cheat sheet the user choose in the unique sheet HTML file within a HTML table listing all the "commands" and "descriptions". The controller querries a serverside SQL database with all the data according to client side user selection, and stores it on a variable to render the data on client side accordingly on the single sheet HTML page, just with different parameters.
Querries uses question mark-bound parameters to pevent SQL injection attacks even if the web application does not receive user interaction yet, but is a better writen and bettter code to maintain is case the project grows on the future.

The layout template has a navbar that works well on any display, it shrinks if in mobile for better visualization and renders on all templates for easy access from any page that is rendering. It also has a link for the repository in case anyone want to check out the code.
I opted for less javascript as possible so the page runs fast and efficiently despite the processing power of the device used and speed of the internet connection. The only jacascript snippet used is regarding a Google translator API i integrated to translate the index page and the site description live, this was the user can fell more confortable reading it in his own language.

### Future implementations:
One of the other main goal of this application is to be open source and have the possibility open to different people from all around the world contributing to it. As per myself i never create something and think is the best i can do, ever. Everytime i do it, i will do it better and faster. The project is ready for user interaction but there is infinite ammount of improvements of new implementations that can be done. Some of the ideias I already think of is a form that user can submit new addings to the different tecnologies or edit existing ones and a javascript and AJAX searching bar on top of each table for quick searching of the terms according to the live user keyboard input.

### outro:
The biggest challenge for me was the idea itself. Creating something that can really be useful and make a difference, in a way that it can actually become another good tool used by developers. The execution was done smoothly as i finished the finance project and did everything on the final project as the cs50 teaches told: Deciding what was going to be done, Pseudocode, taking it step by step and a slow and conscious implementation of each step and the technologies i decided upon. After that the improvement of the idea keeps being the greatest challenge but i hope and i will work so the tool gets better and better.