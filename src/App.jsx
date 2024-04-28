import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  return (
    <section className="App">
      <table>
        <thead>
          <th>
            <th>id</th>
            <th>Title</th>
            <th>Completed</th>
          </th>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              {todo.completed ? <p>Done</p> : <p className="none">None</p>}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
