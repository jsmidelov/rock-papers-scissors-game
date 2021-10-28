# A simple Rock, Paper, Scissors game
The goal of this sample was to try out Web Components, so that each button would be an instance of said web component.

## SVG icons
I took something of a detour, digging into SVG icons and the styling thereof. Having found an svg on Wikimedia Commons (using CC), I copied the relevant paths into their own files. Finding out about svg optimizer, I then ran each file through there to reduce their file size, and later connected them by CSS. Seeing as I had the image over the button, though, I had a trade-off between being able to style them with CSS and having consistent button click registrations. In the end, I sacrificed the ability to dynamically style for consistent "UX" (if you can call it that for such a small page).

## JS Code
I went for pure Javascript on this, in part to be able to send you the easiest code to get started with and read - as it would require no npm-hassle or the massive dependency trees that tends to follow - and in part because these small-scale solutions are easier without the middle layers that Typescript (TS), Angular/React and so on introduce.

The code for rock-paper-scissors is luckily very simple, so attention beyond getting to work has been to make it simple to read and understand.

## So, what about web components?
By this time, my albeit subjective perception of "4 hours" was starting to run out, and while I started to read and draft a web component, I would not in good concience finish that refactor within a reasonable time frame. As such, I've decided to leave the test without it while it works, and perhaps continue the refactor at a later time.

## Reflection
- Because this test was so open-ended, I decided to try my hand at something I wanted to do in any case. While fun, It's difficult to anticipate if this meets your expectations.
- While this solution had little room for API calls (although, come to think of it, I could've used a JSON-array as a pattern for the computer's pick rather than a simple 3-sided die), it did let me keep the languages separate to their respective task - HTML for structure, CSS for style, JS for functionality - with minimum blending of the three.
- This also gave me the opportunity to return to SVGs, which is something I enjoy playing around with.
- I found the scope of this task very apropriate for the time provided, even if it seems safe. In my experience, ambition tends to nourish over-scoping, and over-scoping is the bane of most projects through intimitating scale (that's most of my hobby projects right there :-) ), being impossible to finish or sacrificing future viability through technical debt to meet a deadline in the present.