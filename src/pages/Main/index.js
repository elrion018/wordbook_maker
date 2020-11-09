import "./index.css";
import * as React from "react";
function Main() {
  const [text, setText] = React.useState("sex");
  const [splitedText, setSplitedText] = React.useState([]);
  const [displayText, setDisplayText] = React.useState("없습니다");
  function handleSubmit(e) {
    e.preventDefault();
    let splited1 = text.split("\n");
    let splited2 = [];
    splited1.map((text) => {
      splited2 = splited2.concat(text.split(" "));
    });
    let splited3 = [...new Set(splited2)];
    let except = [
      /\"/g,
      /\'/g,
      /\“/g,
      /\”/g,
      /\,/g,
      /\./g,
      /\!/g,
      /\@/g,
      /\#/g,
      /\$/g,
      /\%/g,
      /\^/g,
      /\&/g,
      /\*/g,
      /\(/g,
      /\)/g,
      /\-/g,
      /\+/g,
      /\=/g,
      /\//g,
      /\?/g,
    ];

    for (let i = 0; i < splited3.length; i++) {
      for (let j = 0; j < except.length; j++) {
        splited3[i] = splited3[i].replace(except[j], "");
      }
    }
    setSplitedText(splited3);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleDisplayText(splitedText) {
    setDisplayText(splitedText.join());
  }

  React.useEffect(() => {
    if (splitedText !== []) {
      handleDisplayText(splitedText);
    }
  }, [splitedText]);

  return (
    <div className="main-container">
      <div className="main-body-container">
        <form onSubmit={handleSubmit} className="main-submit-form">
          <textarea
            className="main-textinput"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <input type="file" className="main-fileinput"></input>
          <input
            type="submit"
            className="main-submit-button"
            value="단어 추출하기"
          ></input>
          {splitedText}
        </form>
      </div>
    </div>
  );
}

export default Main;
