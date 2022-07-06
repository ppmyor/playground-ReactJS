const React = require("react");
const { Component } = React;

class Gugudan extends Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { first, second, value } = this.state;
    if (parseInt(value) === first * second) {
      this.setState((prevState) => {
        return {
          result: "정답: " + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { first, second, value, result } = this.state;
    return (
      <>
        <h1>
          {first} 곱하기 {second} 은?
        </h1>
        <form onSubmit={this.onSubmit}>
          <input type="number" value={value} onChange={this.onChange} />
          <button>입력</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

module.exports = Gugudan;
