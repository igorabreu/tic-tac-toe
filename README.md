## Tic Tac Toe Project

Tic Tac Toe game mobile application.

Built with:

- [React Native](https://github.com/facebook/react-native)
- [Styled Components](https://www.styled-components.com/docs/api#styling-components)
- [Webpack](https://webpack.js.org/)
- [Redux](https://redux.js.org/)

### Application

The application was built aiming two main concepts:

- Immutability;
- Separation of concerns;

These concepts help to build high scalable applications, easy to maintain and a most consistent code.

### Technology

The use of **Styled Components** is aiming to optimize some points of the application style: share of variables between components, conditional rendering based on components props, beyond other benefits of use the same language on style and elements structure. ([Article: benefits of use of Styled Components](<[https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)>))

### React Components Logic

The components where divide on the types: _elements_ and _screens_.
The _elements_ concepts are the lower lever components and middle level components, built to be shared across all the application, like buttons, images, icons, etc.
_Screens_ are the high-level components, a group of templates that serves direct for a router.

### Project Setup

#### Run local iOS development

- Run:

```

$ yarn install

$ yarn start-ios

```
