import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
    };
  }

  handleOnClick = (e) => {
    let newText = this.state.currentValue.concat(e.target.value);
    this.setState({ currentValue: newText });
  };

  handleResult = (e) => {
    // use toSring method, or when concat will meet error
    let result = eval(this.state.currentValue).toString()
    this.setState({currentValue: result}) 
  };

  handleClear = (e) => {
    this.setState({ currentValue: "" });
  };
  render() {
    
    return (
      <div className="grid-container">
        <div className="grid-symbols" name="+-x/">
          <Button value={`+`} handleOnClick={this.handleOnClick} />
          <Button value={`-`} handleOnClick={this.handleOnClick} />
          <Button value={`*`} handleOnClick={this.handleOnClick} />
          <Button value={`/`} handleOnClick={this.handleOnClick} />
        </div>
        <div name="numbers" className="grid-numbers">
          <Button value={7} handleOnClick={this.handleOnClick} />
          <Button value={8} handleOnClick={this.handleOnClick} />
          <Button value={9} handleOnClick={this.handleOnClick} />
          <Button value={6} handleOnClick={this.handleOnClick} />
          <Button value={5} handleOnClick={this.handleOnClick} />
          <Button value={4} handleOnClick={this.handleOnClick} />
          <Button value={1} handleOnClick={this.handleOnClick} />
          <Button value={2} handleOnClick={this.handleOnClick} />
          <Button value={3} handleOnClick={this.handleOnClick} />
        </div>
        <div className="equal-symbol">
          <button onClick={this.handleResult}>=</button>
        </div>
        <div className="grid-clear">
          <button onClick={this.handleClear}>C</button>
        </div>
        <div className="grid-result" name="show-board">
          <input placeholder="Result" value={this.state.currentValue} />
        </div>
      </div>
    );
  }
}

export default App;
