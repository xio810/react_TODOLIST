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

const RecoilApp = () => {
  const [subNo, setSubNo] = useState(1);

  return (
    <>
      <button onClick={() => setSubNo(subNo == 1 ? 2 : 1)}>페이지 전환</button>
      {subNo == 1 ? <Sub1 /> : <Sub2 />}
    </>
  );
};

const Sub1 = () => {
  const [sub1Count, setSub1Count] = useState(0);

  return (
    <>
      <hr />
      <div>서브1</div>
      <button onClick={() => setSub1Count(sub1Count + 1)}>{sub1Count}</button>
    </>
  );
};

const Sub2 = () => {
  const [sub2Count, setSub2Count] = useState(0);

  return (
    <>
      <hr />
      <div>서브2</div>
      <button onClick={() => setSub2Count(sub2Count + 1)}>{sub2Count}</button>
    </>
  );
};
export default App;
