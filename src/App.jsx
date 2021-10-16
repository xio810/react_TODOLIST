import { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <RecoilApp />
    </RecoilRoot>
  );
};

const textAtom = atom({
  key: "app/text",
  default: "",
});

const textLengthSelector = selector({
  key: "app/textLength",
  get: ({ get }) => get(textAtom).length,
});

const reversedTextSelector = selector({
  key: "app/reversedText",
  get: ({ get }) => get(textAtom).split("").reverse().join(""),
});

const RecoilApp = () => {
  const [text, setText] = useRecoilState(textAtom);
  const [textLength] = useRecoilState(textLengthSelector);
  const [reversedText] = useRecoilState(reversedTextSelector);

  return (
    <>
      <input
        type="text"
        onChange={({ target: { value } }) => setText(value.trim())}
      />
      <div>입력된 텍스트 : {text}</div>
      <div>텍스트의 길이 : {textLength}</div>
      <div>뒤집힌 텍스트 : {reversedText}</div>
    </>
  );
};
export default App;
