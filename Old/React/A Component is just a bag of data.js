import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const handleClick = () => {
  alert("You clicked me.");
};

const ParentWithClick = ({ children }) => {
  return (
    <React.Fragment>
      {React.Children.map(children || null, (child, i) => {
        console.log(child);
        return <child.type {...child.props} key={i} onClick={handleClick} />;
      })}
    </React.Fragment>
  );
};

const App = () => (
  <div style={styles}>
    <ParentWithClick>
      <span>Click this span</span>
    </ParentWithClick>
  </div>
);

render(<App />, document.getElementById("root"));
