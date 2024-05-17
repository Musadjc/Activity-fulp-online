# Activity-fulp-online
Web Programming Review Activities

# BLOCK 1 - FRONTEND
 <details>
<summary>:point_right: Linux Introduction  </summary>
  </details>
   
  <details>
<summary>:point_right: Git & Github </summary>
    
# Git and GitHub Intro Lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Let's apply what we've learned from class to share and update each other's code.  With a partner, you're going going to alternate between who 'drives' and who 'navigates' while following the requirements under "Exercise" below. The goal will be to create a project, have a partner fork, clone, and edit the project, submit the changes as a pull request, and then have the changes merged.

Be sure to look at the previous lesson for notes and helpful hints.

## Exercise

Partners will be referred to as partner1 and partner2.

### Part 1

**With partner1 driving:**

- create a repository in github
- clone the repository in your computer using `git clone`

- create a folder called `git-and-github-practice` inside

- within that folder create the following files `index.html`, `style.css`, and `scripts.js`
  - 'cd git-and-github-practice'
- copy and paste the code from the [starter-code](starter-code) from the `index.html` and `style.css` into your own
- add `// JavaScript to be added` to your `scripts.js` file and link it in your HTML File
- commit your changes, and push to GitHub


**With partner2 driving, from their computer:**

- get your partners link to the GitHub repository and fork and clone it
- open the project and edit the `scripts.js` file adding some funny message
- commit your changes and submit a pull request back to partner1

**With partner1 driving:**

- merge the pull request from the GitHub interface


### Part 2

**With partner2 driving**:
- create a repository in github
- clone the repository in your computer using `git clone`

- create a folder called `git-and-github-practice` inside
-  within that folder create the following files `index.html`, `style.css`, and `script.js`
-  copy and paste the code from the merged pull request files (of your partners `git-and-github-practice` project) from each of the appropriate files to your own
- commit your changes, and push to GitHub
> Note: Partner2 should now have the solution from Part 1 locally

**With partner1 driving:**

- get your partner's link to the new GitHub repository - fork and clone it
- open the project and make sure to thank your partner editing the `script.js` file
- commit your changes and submit a pull request back to partner2


**With partner2 driving:**

- merge the pull request from the GitHub interface

**Bonus**:

- use the [syncing a fork](https://help.github.com/articles/syncing-a-fork/) documentation to update partner2's local version of `git-and-github-practice` without copying and pasting any code
- push the updated local copy to GitHub


#### Starter code

We've given you the HTML/CSS needed to get going in the [starter-code](starter-code).

#### Deliverable

You should have two separate GitHub repositories that have merged pull requests.

## How to Submit

This lab will be checked in class

## Additional Resources

- [Git documentation](https://git-scm.com/documentation)
- [Forking on github](https://help.github.com/articles/fork-a-repo/)
- [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)
   </details>
   
  <details>
<summary>:point_right: Js Introduction </summary>

# JS INTRODUCTION

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Welcome to your first JavaScript lab. This lab will help you practice some of the fundamentals of JavaScript, such as numbers, strings, conditionals & loops!

## Initial Setup

#### Local Setup
- Create a `~/code` folder (inside your home folder)
- Inside that folder, create a `labs` folder  (ie. `~/code/labs`)

#### Fork The Repository
- Now go to github and click the `fork button` to create a copy of this repository in your personal account

#### Clone To Local
- Go to your fork: `https://github.com/<your_github_id>/LAB-103-js-introduction`
- Click the `clone or download` button, select the `SSH` option and copy the git link into your clipboard
- In terminator under the directory `~/code/labs` enter:
```
$ git clone https://github.com/<your_github_id>/LAB-103-js-introduction.git
```

- Then enter the repository you cloned: `$ cd LAB-103-js-introduction`
- Open the current folder in Visual Studio: `$ code .`

## Exercise

You have 3 iterations to do today. Each iteration is within a folder `iterations` that contains two files: `index.html` and `script.js`.

The HTML file simply loads the JavaScript file where you will code your solution code.

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Your `script.js` Javascript file contains a sample code that you will have to modify. It showcases the use of the [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method, that allows you to read a value from a window.

```js
// Your Solution code goes here

var test = window.prompt("type something here")
console.log(test)
```

To test that it works, click on the Live Server button that is located on the bottom-right corner of VSCode:

And then open your [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) to see the `console.log` output.

Try it out and when you have checked that it works, you can delete the provided code in `script.js`

#### Iteration 1: Basic Input/Output & Conditionals

1. Create a prompt that asks for the name of a driver and stores it into a variable `driver`.
1. Create a prompt that asks for the name of a pilot and stores it into a variable `pilot`.
1. Print `The driver's name is XXXX`
1. Print `The pilot's name is YYYY`
1. Depending on which name is longer (where `XX` refers to the number of characters), print:
  - `The Driver has the longest name, it has XX characters` or
  - `Yo, Pilot got the longest name, it has XX characters` or
  - `Wow, you both got equally long names, XX characters!`

#### Iteration 2: String Loops
1. Print all the characters of the driver's name, separated by a space.
```
"m i c h a e l"
```

2. Print all the characters of the driver's name, separated by a dash and ending with an exclamation mark!
```
"m-i-c-h-a-e-l!"
```

3. Print all the characters of the pilot's name, in reverse order and [UpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
```
"L E A H C I M"
```

#### Iteration 3: Number Conditionals & Loops

1. Write a loop that will print all the numbers from 1-20
1. Write a loop that will print all ODD the numbers smaller than 128 that are divisible by 3, but not divisible by 5.
1. Write a loop that will write all the [powers of 2](https://www.varsitytutors.com/hotmath/hotmath_help/topics/exponent-tables-and-patterns) from 2^1 (2) to 2^10 (1024)
```
2 ^ 1 = 2
2 ^ 2 = 4
...
2 ^ 10 = 1024
```

#### Iteration 4: Bonus Time!
Go to [lorem ipsum generator](https://loremipsum.io) and:

1. Generate 3 paragraphs. Store the text in a `lorem` variable
1. Make your program count the number of words in the `lorem`
1. Make your program count the number of times the Latin word `et` appears in `lorem`


## How to Submit
In iTerm under `~/code/labs/LAB-103-js-introduction` enter the following commands

```
git add .
git commit -m "done"
git push origin master
```

Send the link of your github repository through Slack
   </details>
   
  <details>
<summary>:point_right: Arrays </summary>
   </details>
   
  <details>
<summary>:point_right: Js Objects  </summary>
   </details>
   
  <details>
<summary>:point_right: Js Functional Arrays  </summary>
   </details>
   
  <details>
<summary>:point_right: HTML Tables & Forms  </summary>
   </details>
   
   <details>
<summary>:point_right: JS Under the Hood  </summary>
   </details>
   
   <details>
<summary>:point_right:CSS Make it Pretty </summary>
   </details>
   
   <details>
<summary>:point_right: JS Prototypes  </summary>
   </details>
   
   <details>
<summary>:point_right: Web API DOM  </summary>
   </details>
   
   <details>
<summary>:point_right: CSS Animations  </summary>
   </details>
   
   <details>
<summary>:point_right: CSS Responsive - Flexbox  </summary>
   </details>
   
   <details>
<summary>:point_right: Git Branches  </summary>
   </details>
   







# BLOCK 2 - BACKEND
# BLOCK 3 - FULLSTACK
# BUSINESS
# UX / UI
