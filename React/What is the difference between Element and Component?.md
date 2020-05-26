 An *Element* is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. *Elements* can contain other *Elements* in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

  The object representation of React Element would be as follows:

  ```javascript
  const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
  )
  ```

  The above `React.createElement()` function returns an object:

  ```
  {
    type: 'div',
    props: {
      children: 'Login',
      id: 'login-btn'
    }
  }
  ```

  And finally it renders to the DOM using `ReactDOM.render()`:

  ```html
  <div id='login-btn'>Login</div>
  ```

  Whereas a **component** can be declared in several different ways. It can be a class with a `render()` method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

  ```javascript
  const Button = ({ onLogin }) =>
    <div id={'login-btn'} onClick={onLogin}>Login</div>
  ```

  Then JSX gets transpiled to a `React.createElement()` function tree:

  ```javascript
  const Button = ({ onLogin }) => React.createElement(
    'div',
    { id: 'login-btn', onClick: onLogin },
    'Login'
  )
  ```
