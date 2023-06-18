import React, { useState } from "react";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onClickHandler() {
    if (inputText) {
      setErrorMessage("");
      tallyWords();
    } else {
      setErrorMessage("英文を入力してね");
    }
  }

  function tallyWords() {
    const array = inputText.split(" ");
    let count: Array<{ hoge: number }> = [];
    const keys = Object.keys(count);

    for (let n = 0; n < array.length; n++) {
      let hoge = array[n];

      if (!keys.includes(hoge)) {
        count.push({ hoge: 2 });
        console.log(true);
      } else {
        count.push({ hoge: 1 });
        console.log(false);
      }
    }
  }

  return (
    <>
      <p>英文を入力してください</p>
      <textarea onChange={(e) => setInputText(e.target.value)}></textarea>
      <button onClick={() => onClickHandler()}>Translate</button>
      <p>結果</p>
      {errorMessage}
    </>
  );
};

export default App;
