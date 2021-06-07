Demo repository for the [react-jss](https://github.com/cssinjs/jss) issue described [here](https://github.com/cssinjs/jss/issues/1231).

## Steps ##

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that a component shared between two different next.js pages will lose its media query rules when they are contained within a function rule.
5. Observe that the same behaviour does not occur with rules defined locally to the page, or when the queries are not in a function rule.