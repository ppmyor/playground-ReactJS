import React from "react";

const Gugudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const onRefInput = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("성공: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      onRefInput.current.focus();
    } else {
      setResult("땡!");
      setValue("");
      onRefInput.current.focus();
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>
        {first} 곱하기 {second} 은?
      </h1>
      <form onSubmit={onSubmit}>
        <input type="number" ref={onRefInput} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default Gugudan;
