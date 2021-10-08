import { useState } from "react";
``;

function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  return (
    <>
      <div>
        <span>새 할일</span>
        &nbsp;
        <input
          type="text"
          placeholder="새 할일을 입력해주세요."
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        &nbsp;
        <button
          onClick={() => {
            setNewTodoTitle("");
          }}
        >
          입력
        </button>
      </div>
      <hr />
      <div>목록</div>
    </>
  );
}

export default App;
