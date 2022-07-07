const React = require("react");
const { Component } = require("react");
const Try = require("./Try");

class WordRelay extends Component {
  state = {
    word: "안나",
    value: "",
    result: "",
    tries: [],
  };

  onSubmitForm = (e) => {
    const { word, value } = this.state;
    e.preventDefault();
    if (value[0] === word[word.length - 1]) {
      this.setState((prevState) => {
        return {
          word: value,
          value: "",
          result: "정답",
          tries: [...prevState.tries, { prevWord: word, userAnswer: value }],
        };
      });
    } else {
      this.setState({
        value: "",
        result: "땡",
      });
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { word, value, result, tries } = this.state;
    return (
      <>
        <h1>{word}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" value={value} onChange={this.onChangeInput} />
          <button>입력!</button>
        </form>
        <h3>{result}</h3>
        <ul>
          {tries.map((v, i) => {
            return <Try key={i} tryInfo={v} index={i + 1} />;
          })}
        </ul>
      </>
    );
  }
}

module.exports = WordRelay;
