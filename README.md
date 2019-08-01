A little tutorial for learning to use jest and react-testing-library

Useful docs can be found...

https://testing-library.com/docs/intro

https://github.com/testing-library/jest-dom

https://testing-library.com/docs/guide-which-query - What kind of query should I use? A handy guide.

Quick ref:

getBy\* queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found (use getAllBy instead). Good for grabbing elements we are sure are on the page.

queryBy\* queries return the first matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found (use queryAllBy instead).
