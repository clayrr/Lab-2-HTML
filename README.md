# Project Description

Our project is a boba tea information site. We have one page explaining the bases, one page 
giving information on the toppings, and one page analyzing the sugar and ice levels. Our goal is to give a comprehensive explanation on the process of curating your perfect boba.  

# HTML questions

1. What does HTML stand for?
  - it stands for hypertext markup language
2. What is the syntax for writing HTML?
  - it is extended markup language syntax with tags
3. Explain what `<head>` and `<body>` are and what they should contain.
  - head contains metadata about the page, body contains the user-facing elements.
4. What are semantic elements, and why are they preferable to regular HTML elements?
  - semantic elements are things like `<section>` `<summary>` and `<time>` because they explain what the code does instead of just any sort of text display, they are in these formats
5. What is the DOM?
  - document object model which is what the html ast is based on and allows it to be modified with javascript

# css questions

1. What does **CSS** stand for?
  - cascading style sheets
2. What are the 3 ways to include CSS in your HTML?
  - inline css, internal css, and external css
3. Describe the syntax for writing CSS.
  - selector (targets elements to be styled) and declaration block (curly braces `{}` with style declaration, property value system)
4. What is a **CSS Selector**?
  - used to select html elements to be styled; element selector, class selector, id selector, attribute selector
5. What is a *class*? How is it different from an *ID*? 
  - a class is a resuable identifier that applies to multiple elements. (`.class`), an id is a unique identifier for a specific element ()`#id`)
6. Explain the difference between these [CSS units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units): `px`, `em`, `vw`, `%`, `rem`.
  - px is pixables, an absolute unit, fixed number of pixables on the screen
  - em is a relative unit based on the font size of the parent element, (font size = 16px, then 1em = 16px).
  - vw is viewpoint width, relative unit of 1% of the viewport's width, (50vw = 50% of viewport width)
  - %: percentage, relative to parent element's dimensions
  - rem: relative unit based on root element font size (`html`), (font size = 16px, then 1rem = 16px)
7. What is the difference between `margin` and `padding`?
  - margin is the space outside an element's border, separating the element from its surrounding elements.
  - padding is the space inside an element's border, between the content and the element's border.
8. What are different CSS positioning properties? What are the differences between them?
  - static is the default positioning, they are not effected by top, bottom, left or right properties
  - relative is positioned relative to its static position in the flow. it can be adjusted but still occupies space
  - absolute is positioned relative to its nearest positioned ancestor (not static). if there is no positioned ancestor, it is relative to the initial containing block. it is removed from the normal document flow.
  - fixed is positioned relative to the browser window, and stays fixed when the page is scrolled, also removed from the normal document flow.
  - sticky is positioned by toggling between relative and fixed positioning depending on the user's scroll position (acts like relative until the page is scrolled to a certain point, then becomes fixed)

# HTML DOM Tree

<img src="./images/domVisualization.svg" alt="dom visualization" />

[source](https://bioub.github.io/dom-visualizer/)
