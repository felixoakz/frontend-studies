# Cheat Sheet Central 1.0
#### Video Demo:  <URL HERE>
#### Description:


___

Mostly when we are learning a new thing, we can often get a bit anxious about the amount of information we find. This is because there are a LOT of shortcuts and commands in the various tools we need to learn. And we still need to master and use all of this while we're learning and building even bigger things.

The project i decided upon is a web application that renders a simple and practical table with a list of cheat sheet from different tecnologies.
It is designed for a quick consulting on syntax to run a SQL querry, finding code snippet from a language or learn a keyboard shortcut for VSCODE.

No login required, no session being used. One of the main goals is to be a multi-language fast rendering web application for people from all around the world to use. This allows us to easily identify what really matters. We can then gradually learn and use those more important commands until it becomes natural, giving us more time and energy to focus on what really matters right now.

The idea was born while i was learning a lot of different technologies during cs50, having to memorize linux terminal commands, vscode keyboard shortcuts, python, Js, HTML and CSS sintaxes, plus various of other like Jinja was a little too much and got me overwhelmed and with a little impostor sindrome. I noted it was an real world issue when i constantly saw a lot of scattered JPEG and PNG files scattered around the internet with different cheat sheets of differents tecnologies, and it would be great if we went ust to a single page on the web for consulting instead of losing time checking for help everywhere.

I confirmed that was a commom practice between developers when i constantly saw professor David checking his own cheat sheet for writing HTML viewport meta tags and he said that it was ok, nobody memorizes everything and its impossible because tecnologies are always appearing and changing. We need to use our heads as a processor and not as a hard drive.


The execution itself is a better constructed version of the "homepage" project, but this time using a Flask controller and just 3 HTML templates instead of the first time around that i created it statically with just HTML and CSS, writing every table row by hand directly on HTML. As it is, it has the layout HTML file, a index HTML file and a sheet HTML file. The Flask engine controller with just 1 route takes input from the selected technology from the index page and renders any cheat sheet the user choose in the same sheet HTML file with 


Each files i wrote:

if debated certain choices and why made them

The idea for this web application is based on 


essay:

idea
what it solves
tools used
open source-multilanguage
future implementations