import React, { useState } from "react";
import Try from "./Try";

const WordRelay = () => {
  const [word, setWord] = useState("안나");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value[0] === word[word.length - 1]) {
      setResult("정답");
      setValue("");
      setWord(value);
      setTries((prev) => [...prev, { prevWord: word, userAnswer: value }]);
    } else {
      setValue("");
      setResult("땡");
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{word}</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={value} onChange={onChangeInput} />
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
};

export default WordRelay;
