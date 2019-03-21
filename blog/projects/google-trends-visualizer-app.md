---
path: /project/google-trends-visualizer
date: 2019-03-21T21:51:10.754Z
title: Google Trends Visualizer App
description: My process when building the Google Trends Visualizer for a coding test.
source: 'https://github.com/enriquezm/google-trends-visualizer'
demo: '#'
---
First of I had to draw out my plan of attack. 

When looking at the google trends visualizer, I noticed at large it looked pretty complex. But as I took a closer look, it's simply made up of containers each with their own color, intro/outro animation, and text animation.

So for starters, I wanted to create one container with a background color and text animation.

Conditionally handling background colors was no big deal. Where I was getting stumped was creating the text animation. I wasn't sure if it needed to be it's own component or if the functionality should be included in the Box component itself. It made more sense to me to have each Box component manage it's own text generator. So the functionality should be within the Box component.

The logic at first was a little confusing to me, but I broke it down and gradually worked my way to it. First I focused on converting a given string into an array of all the individual characters. Since the animation will have to type them one by one, I needed a way to break up the string.

Second,
