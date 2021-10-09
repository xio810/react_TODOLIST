import { useState } from "react";
``;

function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const btnAddTodoClicked = () => {
    const newTodo = {
      id: lastTodoId + 1,
      title: newTodoTitle,
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
    setLastTodoId(newTodo.id);
  };

  let todoList = <div>목록없음</div>;

  if (todos.length > 0) {
    todoList = (
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            {todo.id}: {todo.title}
          </li>
        ))}
      </ul>
    );
  }

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
        <button onClick={btnAddTodoClicked}>입력</button>
      </div>
      <hr />
      {todoList}
    </>
  );
}

export default App;
