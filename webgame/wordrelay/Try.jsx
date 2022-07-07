const React = require("react");
const { Component } = require("react");

class Try extends Component {
  render() {
    const { tryInfo, index } = this.props;

    return (
      <li>
        <div>{index}번째 이어가고 있습니다!</div>
        <div>
          {tryInfo.prevWord} : {tryInfo.userAnswer}
        </div>
      </li>
    );
  }
}

module.exports = Try;
