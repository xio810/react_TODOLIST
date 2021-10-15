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
  const [sub1Count] = useRecoilState(sub1CountAtom);
  const sub2Count = useRecoilValue(sub2CountAtom);

  const [subNo, setSubNo] = useState(1);

  return (
    <>
      <div>sub1 count : {sub1Count}</div>
      <div>sub2 count : {sub2Count}</div>

      <button onClick={() => setSubNo(subNo == 1 ? 2 : 1)}>change</button>
      {subNo == 1 ? <Sub1 /> : <Sub2 />}
    </>
  );
};

const sub1CountAtom = atom({
  key: "app/sub1Count",
  default: 0,
});

const Sub1 = () => {
  const [sub1Count, setSub1Count] = useRecoilState(sub1CountAtom);
  return (
    <>
      <hr />
      <div>sub1</div>
      <button onClick={() => setSub1Count(sub1Count + 1)}>{sub1Count}</button>
    </>
  );
};

const sub2CountAtom = atom({
  key: "app/sub2Count",
  default: 0,
});

const Sub2 = () => {
  const [sub2Count, setSub2Count] = useRecoilState(sub2CountAtom);
  return (
    <>
      <hr />
      <div>sub2</div>
      <button onClick={() => setSub2Count(sub2Count + 1)}>{sub2Count}</button>
    </>
  );
};
export default App;
