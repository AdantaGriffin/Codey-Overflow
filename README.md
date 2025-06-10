# Codey Overflow

## Table of contents
* [Overview](#overview)
* [Setup](#setup)
* [Built with](#built-with)
* [Steps](#steps)
* [Challenges and Credits](#challenges-and-credits)

## Overview
In this project, we will build the beginnings of a web forum! A forum is an online discussion board where users can exchange their opinions on a variety of topics. The most important component of a forum is the comment section. This is what we’ll work on in this project.

In building this application, you will sharpen your skills in React components by practicing using props as well as defining, rendering, and referencing components.

## Setup
Create a react <code>(npx create-react-app app-name)</code>app the follow the provided steps below

## Built with
* HTML
* CSS (course given)
* JavaScript (course given)
* Git, GitHub and GitHub Pages

## Steps
1.  >Take a look at the files provided for this project.

There is a file named <strong>commentData.js</strong> which contains an array of comment objects with <code>profileImg</code>, <code>username</code>, and <code>comment</code> as its properties. You will use this to populate the comments on the forum.

Your comment section will be composed of <code>Card</code> components, which will be comprised of smaller <code>Header</code> and <code>Body</code> child components.

Next, <strong>App.js</strong> will contain the top-level component. The data in <strong>commentData.js</strong> will be retrieved in <code>App.js</code> and flow downward from <code>App</code> to <code>Card</code> to <code>Header</code> and <code>Body</code>.

<strong>index.js</strong> will render the <code>App</code> component. <strong>style.css</strong> and <strong>index.html</strong> handle the markup and styling of the forum.

Once you feel comfortable with the structure of this application, move on to the next checkpoint.

2.  >Let’s start with the smallest component, the <code>Body</code>. The <code>Body</code> is responsible for showing the comments that users have written. It will work with the <code>comment</code> property of our passed-down <code>comments</code> object extracted from <strong>commentData.js</strong>.

Open up <strong>Body.js</strong> and define your <code>Body</code> component.

This component should receive <code>props</code>. This <code>props</code> object contains all of the data on our comment, such as the username, profile image, and comment, but the <code>Body</code> works specifically with only the <code>comment</code> property.

Have the component return a <code>< p ></code> element that contains the comment property from <code>props</code>.

3.  >Export the <code>Body</code> component after its function definition so that it can be imported and used in <strong>Card.js</strong>.

4.  >Open <strong>Header.js</strong> and define your Header component.

This component will be responsible for the <code>profileImg</code> and <code>username</code> properties of our passed-down <code>comments</code> object.

The <code>Header</code> component should receive <code>props</code>. The component should return two elements, an <code>< img ></code> element whose <code>src</code> attribute will receive the <code>profileImg</code> property from <code>props</code>, and a <code>< h1 ></code> element, displaying <code>username</code> from <code>props</code>.

5.  >Export the <code>Header</code> component after its function definition so that it can be imported and used in <strong>Card.js</strong>.

6.  >Great job! Let’s take a brief detour back to <strong>App.js</strong>.

Currently, the <code>App</code> component is empty. This is the top-level component and it is responsible for returning the interface to be rendered. In this case, it will be returning an instance of the <code>Card</code> component for every comment in <strong>commentData.js</strong>.

In the <code>App</code> component body, map over the <code>comments</code> array with the argument named <code>comment</code> and return an instance of the <code>Card</code> component.

For each component, give it an attribute named <code>commentObject</code> and the value <code>{comment}</code>.

7.  >Nice! You’ve set up <code>App</code> to pass down information to the <code>Card</code> component. Let’s put the pieces together.

Open <strong>Card.js</strong> and import the <code>Header</code> and <code>Body</code> components. <code>Card</code> will be the outer “shell” that contains our two smaller components: <code>Card</code> is the parent, and <code>Header</code> and <code>Body</code> are the child components.

Begin defining the <code>Card</code> component. <code>Card</code> should receive <code>props</code>.

<code>Card</code> should return an instance of the <code>Header</code> component, and an instance of the <code>Body</code> component.

8.  >Previously in <strong>App.js</strong>, you’ve passed down a <code>commentObject</code> attribute to <code>Card</code> which contains an object with three properties (<code>profileImg</code>, <code>username</code>, and <code>comment</code>).

It’s time to access those and finally pass them to the children components: <code>Header</code> and <code>Body</code>.

<code>Header</code> expects two props, <code>profileImg</code> and <code>username</code>.

Give the <code>Header</code> instance an attribute named <code>profileImg</code> and the value of <code>props.commentObject.profileImg</code>.

9.  >Next, give the <code>Header</code> instance an attribute named <code>username</code> and the value of <code>props.commentObject.username</code>.

10. >The <code>Body</code> instance expects a <code>comment</code> prop.

Give the <code>Body</code> instance an attribute named <code>comment</code> and the value of <code>props.commentObject.comment</code>.

11. >Now, export the <code>Card</code> component so it can be imported and used.

12. >Open up <strong>App.js</strong> again, and import the <code>Card</code> component which is now defined and exported.

13. >Then, export the <code>App</code> component.

14. >Open up <strong>index.js</strong> and import the <code>App</code> component.

15. >As you may recall, <strong>index.js</strong> is largely responsible for only rendering the <code>App</code> component.

Use <code>.createRoot()</code> to supply a container where you will render the <code>App</code> component. Then, use <code>.render()</code> to render it into the DOM!

If you’ve succeeded, you should see three comments rendered on the web browser, engaging in a riveting discussion about animals.



## Challenges and Credits
This project was a challenge from the Full Stack Developer course on Codeacademy's website.
<br>
**JavaScript and CSS codes were provided and we had to code the HTML.**
<br>

## Credits
www.codecademy.com
### License
MIT License

Copyright (c) 2025 Adanta Griffin

Permission is hereby granted, free of charge, to any person obtaining a copy
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
SOFTWARE.