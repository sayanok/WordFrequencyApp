import React, { useState } from "react";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [aggregateResult, setAggregateResult] = useState<Array<{ word: string; count: number }>>();

  function onClickHandler() {
    if (inputText) {
      setErrorMessage("");
      tallyWords();
    } else {
      setErrorMessage("英文を入力してね");
    }
  }

  function tallyWords() {
    const words = inputText.split(" ");
    const result: { [key: string]: number } = {};

    for (let word of words) {
      if (!result[word]) {
        result[word] = 1;
      } else {
        result[word] += 1;
      }
    }

    const sortedResult = Object.keys(result).map((k) => ({ word: k, count: result[k] }));
    sortedResult.sort((a, b) => b.count - a.count);
    setAggregateResult(sortedResult);
  }

  return (
    <>
      <p>英文を入力してください</p>
      <textarea onChange={(e) => setInputText(e.target.value)} maxLength={2048}></textarea>
      <button onClick={() => onClickHandler()}>Translate</button>
      <p>結果</p>{" "}
      <table>
        <tr>
          <th>単語</th>
          <th>出現回数</th>
        </tr>
        {aggregateResult ? (
          aggregateResult.map((word) => {
            return (
              <tr>
                <td>{word.word}</td> <td> {word.count}</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </table>
      {errorMessage}
    </>
  );
};

export default App;
