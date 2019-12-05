import React, { Component } from "react";
//import Counter from "./Counter";
//import Say from "./Say";
//import EventPractice_class from "./EventPractice_class";
//import EventPractice_function from "./EventPractice_function";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 아래로
        </button> */}
        <IterationSample />
      </div>
    );
  }
}

export default App;
